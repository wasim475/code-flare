import { BrowserRouter, Route, Routes } from "react-router"
import BookMark from '../Pages/BookMark/BookMark'
import Blogs from '../Pages/Blogs/Blogs'

const MainRouter = () => {
  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="/bookmark" element={<BookMark />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default MainRouter
