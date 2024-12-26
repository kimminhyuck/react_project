import './App.css';
import { useState } from 'react';

function Header(props) {
  return (
    <header className="header">
      <h1><a href="/" onClick={(event) => {
        event.preventDefault()
        props.onChangeMode()
      }}>{props.title}</a></h1>
    </header>
  )
}

function Nav(props) {
  
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={event => {
        event.preventDefault()
        props.onChangeMode(event.target.id)
      }}>{t.title}</a>
    </li>)
  }
  return (
    <nav className="nav">
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article(props) {
  return (
    <article className="article">
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function Create(props) {
  return(
    <article className="create">
      <h2>Create</h2>
      <form onSubmit={event => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body);
      }}>
        <p>
          <input type="text" name="title" placeholder="title"></input>
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="Create"></input>
        </p>
      </form>
    </article>
  )
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

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
    content = <Article title="집에서 작업완료" body="Hello, Web"></Article>
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
    <div className="app">
      <Header title="WEB" onChangeMode={() => {
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id) => {
        setMode('READ');
        setId(Number(id));
      }}></Nav>
      {content}
      {contextControl}
    </div>
  );
}

export default App;
