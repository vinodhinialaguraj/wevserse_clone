import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Image from './components/image';
import Signup from './components/signup';
function App() {
  return (
    <div className="App">
      <Signup/>
     <Home/>
     <Image/>
    </div>
  );
}

export default App;
