import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Friend from './Pages/Friend';
import Information from './Pages/Information';
import Content from './Pages/Contect';
import Header from "./Header/Header";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Contect' element={<Content/>}/>
        <Route path='/Friend' element={<Friend/>}/>
        <Route path='/information' element={<Information/>}/>
      </Routes>
    </div>
  );
}

export default App;
