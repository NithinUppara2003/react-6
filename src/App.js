
import {HashRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import './App.css';
import Nav from './Components/Navbar';
import Skills from './Components/Skills';
import EducationalInfo from './Components/EducationalInfo';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
      <HashRouter>
      <Nav/>
      
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/educationalinfo' element={<EducationalInfo/>}></Route>
          <Route path='/skill' element={<Skills/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;