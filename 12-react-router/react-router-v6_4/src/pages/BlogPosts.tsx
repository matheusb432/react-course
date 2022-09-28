import { Suspense, useEffect, useState } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';

import Posts from '../components/Posts';
import { Post } from '../types/post';
import { getPosts } from '../util/api';

function BlogPostsPage() {
  const loaderData = useLoaderData() as { posts: Post[] };

  return (
    <>
      <h1>Our Blog Posts</h1>
      {/* NOTE While <Await /> waits for the promise to resolve, the Suspense.fallback prop will render */}
      <Suspense fallback={<p>Loading...</p>}>
        <Await
          resolve={loaderData.posts}
          errorElement={<p>Error loading blog posts!</p>}>
          {(posts) => <Posts blogPosts={posts} />}
        </Await>
      </Suspense>
      {/* <Posts blogPosts={loaderData} /> */}
    </>
  );
}

export default BlogPostsPage;

// NOTE With v6.4, initial fetching code is unnecessary.
// NOTE Registering the loader function
export function loader() {
  // NOTE If await is used, the page will load only after the promise resolves.
  // return defer({ posts: await getPosts() });
  return defer({ posts: getPosts() });
}
