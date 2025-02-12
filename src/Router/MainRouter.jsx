import { BrowserRouter, Route, Routes } from "react-router";
import BookMark from "../Pages/BookMark/BookMark";
import Blogs from "../Pages/Blogs/Blogs";
import RootLayout from "../RootLayout/RootLayout";
import Home from '../Pages/Home/Home/Home';

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home/>} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="/bookmark" element={<BookMark />} />
          <Route path="*" element={<h1>Page not found.</h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRouter;
