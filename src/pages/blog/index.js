import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import BlogProvider, { BlogContext } from '../../context/blog';

function Blog() {
  const ctx = useContext(BlogContext);
  return (
    <BlogProvider>
      <Routes>
        {/* 
        <Route path="/" exact element={<PostList />} />
        <Route path="/detail/:id" element={<PostDetail />} />
        <Route path="/edit/:id" element={<PostEdit />} />
         */}
      </Routes>
    </BlogProvider>
  );
}

export default Blog;
