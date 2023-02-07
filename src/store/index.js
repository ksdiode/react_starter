import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import user from './user';
import todo from './todo';
import menu from './menu';

const reducer = {
  user,
  todo,
  menu,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const StoreProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
