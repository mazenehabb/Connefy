export interface PostsResponse {
  success: boolean;
  message: string;
  data: PostsData;
  meta: PostsMeta;
}

export interface PostsData {
  posts: Post[];
}

export interface PostsMeta {
  pagination: Pagination;
}

export interface Pagination {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage?: number;
  total: number;
}

export interface Post {
  _id: string;
  id: string;
  body?: string;
  image?: string;
  privacy: string;
  user: PostAuthor;
  sharedPost?: Post | null;
  likes: string[];
  createdAt: string;
  commentsCount: number;
  topComment?: PostComment | null;
  sharesCount: number;
  likesCount: number;
  isShare: boolean;
  bookmarked: boolean;
}

export interface PostAuthor {
  _id: string;
  name: string;
  username: string;
  photo: string;
}

export interface PostComment {
  _id: string;
  content: string;
  commentCreator: PostAuthor;
  post: string;
  parentComment: string | null;
  likes: string[];
  createdAt: string;
  image?: string;
}

export interface PostsContextType {
  posts: Post[];
  isLoading: boolean;
  error: string | null;
  getAllPosts: () => Promise<void>;
  handleLikePost: (postId: string) => Promise<void>;
}

export interface LikePostResponse {
  success: boolean;
  message: string;
  data: {
    liked: boolean;
    likesCount: number;
    post: Post;
  };
}
