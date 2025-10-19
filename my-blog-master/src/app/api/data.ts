// src/app/api/blog/data.ts

export type Post = {
  id: string;
  title: string;
  content: string;
};

// --- SIMULATED DATABASE ARRAY (Modifiable) ---
let posts: Post[] = [
  { id: '1', title: 'First Blog Post', content: 'This is the content of the first blog post.' },
  { id: '2', title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
  { id: '3', title: 'Third Blog Post', content: 'This is the content of the third blog post.' },
];

// --- EXPORTED CRUD FUNCTIONS ---

export const getAllPosts = (): Post[] => {
  return posts;
};

export const getPostById = (id: string): Post | undefined => {
  return posts.find(post => post.id === id);
};

export const createPost = (newPostData: Omit<Post, 'id'>): Post => {
  const newPost: Post = {
    id: Date.now().toString(), // Simple unique ID
    ...newPostData,
  };
  posts.push(newPost);
  return newPost;
};

export const updatePost = (id: string, updatedFields: Partial<Post>): Post | undefined => {
  const index = posts.findIndex(post => post.id === id);
  
  if (index === -1) return undefined;

  posts[index] = { ...posts[index], ...updatedFields };
  return posts[index];
};

export const deletePost = (id: string): boolean => {
  const initialLength = posts.length;
  posts = posts.filter(post => post.id !== id);
  return posts.length < initialLength;
};