// import logo from './logo.svg';
import './App.css';

function Header(props) {
  console.log('props',props.title);
  return (
    <header>
      <h1><a href="/">React</a></h1>
    </header>
  );
}

function Article(props){
  return (
    <article>
      <h2>{props.title}</h2>
      {props.desc}
    </article>
  );
}

function Nav(props) {
  const lis = []
    for (let i=0; i<props.topics.length; i++){
      let t = props.topics[i];
      lis.push(<li>{t.title}</li>);
    }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function App() {
  const topics = [
    {id:1, title:'html', desc:'html is ...'},
    {id:2, title:'css', desc:'css is ...'},
    {id:3, title:'js', desc:'js iavascript is ...'}
  ];
  return (
    <div>
      <Header title="REACT"></Header>
       <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, Web"></Article>
    </div>
  );
}

export default App;
