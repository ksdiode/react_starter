import { createContext, useState } from 'react';

export const BlogContext = createContext();

const initialValue = {
  posts: [],
  page: 1,
  post: null,
};

function BlogProvider({ children }) {
  const [state, setState] = useState(initialValue);

  const getPage = (page = 1) => {
    setState({ posts: [], post: null, page });
  };

  const getOne = (id) => {
    setState({ ...state, post: {} });
  };

  const add = (post) => {
    setState({ ...state, post });
  };

  const update = (post) => {
    setState({ ...state, post });
  };

  const remove = (id) => {
    setState({ ...state, post: null });
  };

  return <BlogContext.Provider value={{ state, getPage, getOne, add, update, remove }}>{children}</BlogContext.Provider>;
}

export default BlogProvider;
