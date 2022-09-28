import { Outlet } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      {/* NOTE Outlet will serve as a placeholder to where nested routes content will render */}
      <Outlet />
      {/* NOTE nested routes in v6 inside the page component */}
      {/* <Routes>
         NOTE /welcome is implicit at the start of the route since `path` uses relative path matching
        <Route path="new-user" element={<p>Welcome, new user!</p>}></Route>
      </Routes> */}
    </section>
  );
};

export default Welcome;
