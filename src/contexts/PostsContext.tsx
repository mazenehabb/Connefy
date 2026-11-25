import { createContext, useContext } from "react";
import type { PostsContextType } from "../types/posts";

export const PostsContext = createContext<PostsContextType | undefined>(
  undefined,
);

export function usePosts() {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error("usePosts must be used within PostsProvider");
  }

  return context;
}
