import React from "react"
import { createStore } from "redux"
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.step
    }
  }
})

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})

// function reducer(state, action) {
//   if (action.type === 'up') {
//     return { ...state, value: state.value + action.step }
//   }
//   return state;
// }
// const initialState = { value: 0 }
// const store = createStore(reducer, initialState);

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => {
    console.log(state)
    state.value
  })
  return <div>
    <button onClick={() => {
      dispatch({ type: 'up', step: 2 })
    }}>+</button> {count}
  </div>
}

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  )
}