export type UserAndPost = {
  id: string;
  title: string;
  body: string;
  authorName: string;
  authorEmail: string;
  category: string;
  date: string;
  userId: string;
};

export type Post = {
  id: string;
  title: string;
  body: string;
  userId: string;
  category: string;
  date: string;
};

export type User = {
  id: string;
  authorName: string;
  authorEmail: string;
};
