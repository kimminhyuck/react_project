import React from "react"
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store"; // store 임포트
import counterSlice from "./counterSlice"; // counterSlice 기본 내보내기 임포트

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => {
    console.log(state)
    return state.counter.value
  })
  return <div>
    <button onClick={() => {
      dispatch(counterSlice.actions.up(2))
    }}>+</button>
    <button onClick={() => {
      dispatch(counterSlice.actions.down(2))
    }}>-</button> 
    {count}
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