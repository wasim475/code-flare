import { BrowserRouter, Route, Routes } from "react-router"

const MainRouter = () => {
  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default MainRouter
