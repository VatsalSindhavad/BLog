// src/app/api/blog/[blogId]/route.ts

import { NextResponse } from 'next/server';
// Fix: Import from '../data' (parent directory, no extension)
// data.ts is two levels up from this file: src/app/api/data.ts
import { getPostById, updatePost, deletePost, Post } from '../../data'; 

// --- READ by ID (GET) ---
// Endpoint: GET /api/blog/[blogId]
export async function GET(
  request: Request,
  { params }: { params: { blogId: string } }
) {
  const { blogId } = params;
  const post = getPostById(blogId);

  if (!post) {
    return NextResponse.json({ message: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json(post);
}

// --- UPDATE (PUT) ---
// Endpoint: PUT /api/blog/[blogId]
export async function PUT(
  request: Request,
  { params }: { params: { blogId: string } }
) {
  const { blogId } = params;
  const body = await request.json() as Partial<Post>;

  const updatedPost = updatePost(blogId, body); 

  if (!updatedPost) {
    return NextResponse.json({ message: 'Post not found or update failed' }, { status: 404 });
  }

  return NextResponse.json(updatedPost);
}

// --- DELETE (DELETE) ---
// Endpoint: DELETE /api/blog/[blogId]
export async function DELETE(
  request: Request,
  { params }: { params: { blogId: string } }
) {
  const { blogId } = params;

  const success = deletePost(blogId); 

  if (!success) {
    return NextResponse.json({ message: 'Post not found or delete failed' }, { status: 404 });
  }

  // HTTP 204 No Content
  return new NextResponse(null, { status: 204 }); 
}