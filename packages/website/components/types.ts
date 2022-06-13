export type UserAndPost = {
  id: number;
  title: string;
  body: string;
  authorName: string;
  authorEmail: string;
  category: string;
  date: string;
  userId: number;
  border: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  category: string;
  date: string;
  border?: boolean;
};

export type User = {
  id: number;
  authorName: string;
  authorEmail: string;
};
