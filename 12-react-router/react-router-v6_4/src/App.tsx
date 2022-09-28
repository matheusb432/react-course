import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage, { loader as blogPostsLoader } from './pages/BlogPosts';
import NewPostPage, { action as newPostAction } from './pages/NewPost';
import PostDetailPage, { loader as postDetailLoader } from './pages/PostDetail';
import RootLayout from './components/RootLayout';
import WelcomePage from './pages/Welcome';
import { ErrorPage } from './pages/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    // NOTE Adding a global error boundary via the error element prop
    <Route element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<WelcomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        {/* NOTE Setting the blog posts loader prop to setup auto fetching */}
        <Route index element={<BlogPostsPage />} loader={blogPostsLoader} />
        <Route
          path=":id"
          element={<PostDetailPage />}
          loader={postDetailLoader}
        />
      </Route>
      <Route
        path="/blog/new"
        element={<NewPostPage />}
        action={newPostAction}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
