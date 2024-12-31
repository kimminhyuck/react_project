import './App.css';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import Body from './component/Body.js';

function App() {

  const BodyProps ={
    name : '이정환',
    location : '지구 대한민국 어딘가',
    favorList : ['사진찍기','여행','떡볶이']
  }

  return (
    <div className="App">
        <Header />
        <Body {...BodyProps}/>
        <Footer />
    </div>
  );
}

export default App;