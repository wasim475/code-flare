import { BrowserRouter, Route, Routes } from "react-router";
import BookMark from "../Pages/BookMark/BookMark";
import Blogs from "../Pages/Blogs/Blogs";
import RootLayout from "../RootLayout/RootLayout";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="blogs" element={<Blogs />} />
          <Route path="/bookmark" element={<BookMark />} />
          <Route path="*" element={<h1>Page not found.</h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRouter;
