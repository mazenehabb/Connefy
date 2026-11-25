export interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  photo: string;
  cover: string;
  bookmarks: unknown[];
  followers: unknown[];
  following: unknown[];
  createdAt: string;
  followersCount: number;
  followingCount: number;
  bookmarksCount: number;
  id: string;
}

export interface AuthContextType {
  token: string | null;
  user: User | null;
  setToken: (newToken: string) => void;
  setUser: (newUser: User) => void;
  logout: () => void;
}
