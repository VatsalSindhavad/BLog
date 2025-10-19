// src/app/api/blog/route.ts

import { NextResponse } from 'next/server';
// Fix: Import from './data' (sibling file, no extension)
// data.ts lives in src/app/api/data.ts, so from this file (src/app/api/blog/route.ts)
// the correct relative path is '../data'
import { getAllPosts, createPost, Post } from '../data'; 

// --- READ ALL (GET) ---
// Endpoint: GET /api/blog
export async function GET() {
  const posts = getAllPosts(); 
  return NextResponse.json(posts);
}

// --- CREATE (POST) ---
// Endpoint: POST /api/blog
export async function POST(request: Request) {
  try {
    const body = await request.json() as Omit<Post, 'id'>; 

    if (!body.title || !body.content) {
      return NextResponse.json({ message: 'Missing title or content' }, { status: 400 });
    }

    const newPost = createPost(body); 
    
    return NextResponse.json(newPost, { status: 201 }); // 201 Created
  } catch (error) {
    return NextResponse.json({ message: 'Invalid JSON body format' }, { status: 400 });
  }
}