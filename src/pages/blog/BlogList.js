import { Box, Pagination } from '@mui/material';
import { useContext } from 'react';
import PostTable from '../../components/blog/PostTable';
import { BlogContext } from '../../context/blog';

const BlogList = () => {
  const {
    state: { posts, page, status },
    getPage,
  } = useContext(BlogContext);

  return (
    <div>
      <h2>Blog</h2>
      <PostTable posts={posts} status={status} />

      <Box display="flex" justifyContent="center" alignItems="center">
        <Pagination count={12} value={page ? page : 1} showFirstButton showLastButton onChange={(_, page) => getPage(page)} />
      </Box>
    </div>
  );
};

export default BlogList;
