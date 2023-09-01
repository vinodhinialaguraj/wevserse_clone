import logo from './logo.svg';
import './App.css';
/*import Banner from './components/banner';
import Image from './components/image';
import Signup from './components/signup';
import Account from './components/account'*/
import Home  from './components/home'
import Mainpage from './components/mainpage';
import Content from './components/content';
import Artistimages from './components/artistpage'
import { Route, Routes } from 'react-router-dom';
//import PreviewMultipleImages from './components/PreviewMultipleImages';
function App() {
  return (
    <div className="App">
   <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/mainpage" element={<Mainpage/>}/>
        <Route path ="/feed" element={<Content/>}/>
        <Route path="/artist" element={<Artistimages/>}/>
      </Routes>
    </div>
  );
}

export default App;
