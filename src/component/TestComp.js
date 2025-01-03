import { useReducer } from "react";
import reducer from "./TestCompReducer";

function TestComp() {
  const [count, dipatch] = useReducer(reducer, 0)
  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        {count}
      </div>
      <div>
        <button onClick={() => dipatch({ type: "DECREASE", data: 1 })}>-</button>
        <button onClick={() => dipatch({ type: "INIT" })}>0</button>
        <button onClick={() => dipatch({ type: "INCREASE", data: 1 })}>+</button>
      </div>
    </div>
  )
}
export default TestComp