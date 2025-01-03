import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
//import { useState, useRef, useReducer } from 'react';
import React, { useRef, useReducer, useCallback } from 'react';
//import TestComp from './component/TestComp';

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  }
]

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.newItem, ...state]
    case "UPDATE":
      return state.map((it) =>
        it.id === action.targetId
          ? { ...it, isDone: !it.isDone }
          : it
      )
    case "DELETE":
      return state.filter((it) => it.id !== action.targetId)
    default:
      return state
  }
}

const TodoContext = React.createContext()

function App() {
  const idRef = useRef(3)
  //  const [todo, setTodo] = useState(mockTodo)
  const [todo, dispatch] = useReducer(reducer, mockTodo)
  const onCreate = (content) => {
    // const newItem = {
    //   id: idRef.current,
    //   content,//content: content 라고 쓴 것과 동등
    //   isDone: false,
    //   createdDate: new Date().getTime()
    // }
    // setTodo([newItem, ...todo])
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime()
      }
    })
    idRef.current += 1;
  }
  const onUpdate = useCallback((targetId) => {
    // setTodo(
    //   todo.map(
    //     (it) =>
    //       it.id === targetId ? { ...it, isDone: !it.isDone } : it
    //   )
    // )
    dispatch({
      type: "UPDATE",
      targetId
    })
  }, []);
  const onDelete = useCallback((targetId) => {
    // setTodo(todo.filter((it) => it.id !== targetId))
    dispatch({
      type: "DELETE",
      targetId
    })
  }, [])
  return (
    <div className="App">
      {/* <TestComp /> */}
      <Header />
      <TodoContext.Provider value={({ todo, onCreate, onUpdate, onDelete })}>
        <TodoEditor />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}
export default App;
