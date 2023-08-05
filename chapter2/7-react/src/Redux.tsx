import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = { count: 0 };

function reducer(state = initialState, action: any) {
  if (action.type === '증가') {
    return { ...state, count: state.count + 1 };
  } else if (action.type === '감소') {
    return { ...state, count: state.count - 1 };
  } else {
    return initialState;
  }
}

const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>;
