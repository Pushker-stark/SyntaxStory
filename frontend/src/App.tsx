import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Blog from './pages/Blog';
import Blogs from "./pages/Blogs";
import Publish from './pages/Publish';

function App() {
  const token = localStorage.getItem("token"); // Check if there's a JWT token in localStorage

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/publish" element={<Publish />} />
        
        {/* If not authenticated, redirect to signin */}
        <Route path="/" element={token ? <Navigate to="/blogs" /> : <Navigate to="/signin" />} />
        
        {/* Default Route */}
        <Route path="*" element={token ? <Navigate to="/blogs" /> : <Navigate to="/signin" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
