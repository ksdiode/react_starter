import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const userSlice = createSlice({
  name: 'menu',
  initialState: { anchor: null },
  reducers: {
    _open: (state, { payload }) => (state.anchor = payload.currentTarget),
    _close: (state) => (state.anchor = null),
  },
});

export const useMenu = () => {
  const { _open, _close } = userSlice.actions;
  const dispatch = useDispatch();
  return {
    open: (e) => dispatch(_open(e)),
    close: () => dispatch(_close()),
  };
};

export default userSlice.reducer;
