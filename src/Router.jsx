  import { BrowserRouter, Routes, Route } from "react-router-dom"
  import Home from "./Pages/Home"
  import { Post } from "./Pages/Post";  

  function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    )
  }

  export default Router