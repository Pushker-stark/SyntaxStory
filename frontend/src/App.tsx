import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin  from './pages/Signin'
import Blog  from './pages/Blog'
import Blogs  from "./pages/Blogs";
import Publish  from './pages/Publish';

function App() {
  console.log(import.meta.env.VITE_API_URL);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
          {/* Default Route */}
          <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App