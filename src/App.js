// import React, { useState } from "react";
// import './style1.css';

// export default function App() {
//   const [number, setNumber] = useState(1);
//   return (
//     <div id="container">
//       <h1>Root: {number}</h1>
//       <div id="grid">
//         <Left1 number={number}></Left1>
//         <Right1 onIncrease={() => {
//           setNumber(number + 1);
//         }}></Right1>
//       </div>
//     </div>
//   )
// }
// function Left1(props) {
//   return (
//     <div>
//       <h1>Left1: {props.number}</h1>
//       <Left2 number={props.number}></Left2>
//     </div>
//   )
// }
// function Left2(props) {
//   return (
//     <div>
//       <h1>Left2: {props.number}</h1>
//       <Left3 number={props.number}></Left3>
//     </div>
//   )
// }
// function Left3(props) {
//   return (
//     <div>
//       <h1>Left3: {props.number}</h1>
//     </div>
//   )
// }
// function Right1(props) {
//   return (
//     <div>
//       <h1>Right1</h1>
//       <Right2 onIncrease={() => {
//         props.onIncrease();
//       }}></Right2>
//     </div>
//   )
// }
// function Right2(props) {
//   return (
//     <div>
//       <h1>Right2</h1>
//       <Right3 onIncrease={() => {
//         props.onIncrease();
//       }}></Right3>
//     </div>
//   )
// }
// function Right3(props) {
//   return (
//     <div>
//       <h1>Right3</h1>
//       <input
//         type="button"
//         value="+"
//         onClick={() => {
//           props.onIncrease();
//         }}
//       ></input>
//     </div>
//   )
// }

import React from "react";
import './style1.css';
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from 'react-redux';

function reducer(currentState, action) {
  if (currentState === undefined) {
    return { number: 1 }
  }
  const newState = { ...currentState };
  if (action.type === 'PLUS') {
    newState.number++;
  } else if (action.type === 'MINUS') {
    newState.number--;
  }
  return newState;
}

const store = createStore(reducer);

export default function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  )
}
function Left1(props) {
  return (
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  )
}
function Left2(props) {
  console.log('2')
  return (
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  )
}
function Left3(props) {
  console.log('3')
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left3: {number}</h1>
    </div>
  )
}
function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  )
}
function Right2(props) {
  return (
    <article className="update">
      <h2>Update</h2>
      <form onSubmit={event => {
        event.preventDefault();
        const updatedTitle = event.target.title.value;
        const updatedBody = event.target.body.value;
        props.onUpdate(updatedTitle, updatedBody);
      }}>
        <p>
          <input type="text" name="title" placeholder="title" value={title} onChange={event => setTitle(event.target.value)}></input>
        </p>
        <p>
          <textarea name="body" placeholder="body" value={body} onChange={event => setBody(event.target.value)}></textarea>
        </p>
        <p>
          <input type="submit" value="Update"></input>
        </p>
      </form>
    </article>
  );
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  const [topics, setTopics] = useState([
    {id: 1, title: 'html', body: 'html is ...'},
    {id: 2, title: 'css', body: 'css is ...'},
    {id: 3, title: 'javascript', body: 'javascript is ...'}
  ]);
  let content = null;
  let contextControl = null;

  if (mode === 'WELCOME') {
    content = <Article title="환영합니다" body="Hello, Web"></Article>
  } else if (mode === 'READ') {
    let title = null, body = null; 
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
        break;
      }
    }
    content = <Article title={title} body={body}></Article>
    contextControl = (
      <ul>
        <li>
          <a href={"/update/" + id} onClick={event => {
            event.preventDefault();
            setMode('UPDATE');
          }}>update</a>
        </li>
        <li>
          <a href={"/delete/" + id} onClick={event => {
            event.preventDefault();
            const newTopics = topics.filter(topic => topic.id !== id);
            setTopics(newTopics);
            setMode('WELCOME');
          }}>delete</a>
        </li>
        <li>
          <a href="/create" onClick={(event) => {
            event.preventDefault()
            setMode('CREATE')
          }}>create</a>
        </li>
      </ul>
    );
  }  else if (mode === 'CREATE') {
    content = <Create onCreate={(_title, _body) => {
      const newTopic = { id: nextId, title: _title, body: _body };
      const newTopics = [...topics, newTopic];
      setTopics(newTopics);
      setNextId(nextId + 1);
      setMode('READ');
      setId(nextId);
    }}></Create>
  } else if (mode === 'UPDATE') {
    let title = null, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
        break;
      }
    }
    content = <Update title={title} body={body} onUpdate={(updatedTitle, updatedBody) => {
      const updatedTopics = topics.map(topic => {
        if (topic.id === id) {
          return { id: id, title: updatedTitle, body: updatedBody };
        }
        return topic;
      });
      setTopics(updatedTopics);
      setMode('READ');
    }}></Update>;
  }
  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="-"
        onClick={() => {
          dispatch({ type: 'MINUS' })
        }}
      ></input>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: 'PLUS' })
        }}
      ></input>
    </div>
  )
}