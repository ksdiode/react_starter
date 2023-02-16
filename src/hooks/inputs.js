import { useState } from 'react';

const useInputs = (initState = {}) => {
  const [state, setValue] = useState(initState);

  return [
    state,
    (e) =>
      setValue({
        ...state,
        [e.target.name]: e.target.value,
      }),
    (name, initialValue = '') =>
      setValue({
        ...state,
        [name]: initialValue,
      }),
  ];
};

export default useInputs;
