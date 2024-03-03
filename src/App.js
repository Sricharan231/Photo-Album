// import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import './App.css';
// import Services from './component/Services/Services';
import Store from './component/Store/Store';
// import Login from './component/Login/login'
import { BrowserRouter, Route,Routes } from "react-router-dom";
// import { Switch } from 'react-router-dom';
// import Navbar from './component/Navbar/Navbar';
// import Card from './component/Cards/cards';
import Gallery from './component/Gallery/gallery';
import Contact from './component/contact/Contact';
import AboutUs from '../src/component/About/About';



function App() {
  return (
    <div>
    
    <BrowserRouter>
     
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/store" element={<Store/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/ContactUs' element={<Contact/>}/>
   
      </Routes>
      
      </BrowserRouter>
      </div>
  );
}

export default App;
