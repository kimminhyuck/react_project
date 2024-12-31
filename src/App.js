import './App.css';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import Body from './component/Body.js';

function App() {
  const name = '이정환'
  const location = '지구 대한민국 어딘가'
  return (
    <div className="App">
        <Header />
        <Body name = {name} location = {location}/>
        <Footer />
    </div>
  );
}

export default App;