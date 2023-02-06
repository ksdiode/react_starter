import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import user from "./user";
import todo from "./todo";

const reducer = {
  user,
  todo,
};

const store = configureStore({ reducer });
const StoreProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
