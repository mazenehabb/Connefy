import {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  type ReactNode,
} from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import { PostsContext } from "./PostsContext";
import type {
  Post,
  PostsContextType,
  PostsResponse,
  LikePostResponse,
} from "../types/posts";

interface PostsProviderProps {
  children: ReactNode;
}

type PostsState = Pick<PostsContextType, "posts" | "isLoading" | "error">;

type PostsAction =
  | { type: "request" }
  | { type: "success"; posts: Post[] }
  | { type: "failure"; message: string }
  | { type: "reset" }
  | { type: "likeOptimistic"; postId: string; userId: string }
  | {
      type: "likeSuccess";
      postId: string;
      userId: string;
      liked: boolean;
      likesCount: number;
    }
  | { type: "likeFailure"; postId: string; previousPost: Post };
const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
};

function postsReducer(state: PostsState, action: PostsAction): PostsState {
  switch (action.type) {
    case "request":
      return { ...state, isLoading: true, error: null };
    case "success":
      return { posts: action.posts, isLoading: false, error: null };
    case "failure":
      return { ...state, isLoading: false, error: action.message };
    case "reset":
      return initialState;
    case "likeOptimistic":
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id !== action.postId) {
            return post;
          }

          const isLiked = post.likes.includes(action.userId);

          return {
            ...post,
            likes: isLiked
              ? post.likes.filter((id) => id !== action.userId)
              : [...post.likes, action.userId],

            likesCount: isLiked ? post.likesCount - 1 : post.likesCount + 1,
          };
        }),
      };

    case "likeSuccess":
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id !== action.postId) return post;

          const likes = action.liked
            ? post.likes.includes(action.userId)
              ? post.likes
              : [...post.likes, action.userId]
            : post.likes.filter((id) => id !== action.userId);

          return {
            ...post,
            likes,
            likesCount: action.likesCount,
          };
        }),
      };
    case "likeFailure":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.postId ? action.previousPost : post,
        ),
      };
  }
}

export default function PostsProvider({ children }: PostsProviderProps) {
  const { token, user } = useAuth();
  const [state, dispatch] = useReducer(postsReducer, initialState);
  // console.log(state);

  const requestPosts = useCallback(
    async (signal?: AbortSignal) => {
      if (!token) {
        dispatch({ type: "reset" });
        return;
      }

      dispatch({ type: "request" });

      try {
        const { data } = await axios.get<PostsResponse>(
          "https://route-posts.routemisr.com/posts",
          {
            headers: { Authorization: `Bearer ${token}` },
            signal,
          },
        );

        if (!signal?.aborted) {
          dispatch({ type: "success", posts: data.data.posts });
        }
      } catch (error) {
        if (signal?.aborted || axios.isCancel(error)) {
          return;
        }

        dispatch({
          type: "failure",
          message: "We could not load the latest posts. Please try again.",
        });
      }
    },
    [token],
  );

  const getAllPosts = useCallback(() => requestPosts(), [requestPosts]);

  const pendingLikes = useRef(new Set<string>());

  const handleLikePost = useCallback(
    async (postId: string) => {
      if (!token || !user?._id) return;

      // Prevent duplicate requests for the same post
      if (pendingLikes.current.has(postId)) return;

      const previousPost = state.posts.find((post) => post._id === postId);

      if (!previousPost) return;

      pendingLikes.current.add(postId);

      // 1. Update UI immediately
      dispatch({
        type: "likeOptimistic",
        postId,
        userId: user._id,
      });

      try {
        // 2. Send API request
        const { data } = await axios.put<LikePostResponse>(
          `https://route-posts.routemisr.com/posts/${postId}/like`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        // 3. Sync with server response
        dispatch({
          type: "likeSuccess",
          postId,
          userId: user._id,
          liked: data.data.liked,
          likesCount: data.data.likesCount,
        });
      } catch (error) {
        // 4. Rollback if request fails
        dispatch({
          type: "likeFailure",
          postId,
          previousPost,
        });

        console.error("Failed to toggle post like:", error);
      } finally {
        pendingLikes.current.delete(postId);
      }
    },
    [token, user, state.posts],
  );

  useEffect(() => {
    if (!token) {
      dispatch({ type: "reset" });
      return;
    }

    const controller = new AbortController();
    void requestPosts(controller.signal);

    return () => controller.abort();
  }, [requestPosts, token]);

  return (
    <PostsContext.Provider value={{ ...state, getAllPosts, handleLikePost }}>
      {children}
    </PostsContext.Provider>
  );
}
