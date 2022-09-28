import { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import BlogPost from '../components/BlogPost';
import { Post } from '../types/post';
import { getPost } from '../util/api';

function PostDetailPage() {
  const post = useLoaderData() as Post;

  return (
    <>
      <BlogPost title={post.title} text={post.body} />
    </>
  );
}

export default PostDetailPage;

export function loader({ params }: any): Promise<Post> {
  const postId = params.id;

  return getPost(postId);
}
