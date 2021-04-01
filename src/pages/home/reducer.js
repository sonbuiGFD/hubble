// import update from 'immutability-helper';

import {} from './action';

const initialState = {
  ui: {
    loading: false,
  },
  data: {},
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default reducer;
