import React from 'react';
import { Routes ,Route} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import About  from './About';
import Contact from './Contact';
import Weather from './Weather';
import Home from './Home'
import Error from './Error'


function App() {
  return (<>
  <Navbar/>
  <Routes>
    <Route exact path='/weatherapp' element={<Home/>} />
    <Route exact path='/about' element={<About/>} />
    {/* <Route  path='/about' element={<Error/>} /> */}
    <Route exact path='/contact' element={<Contact/>} />
    <Route exact path='/weather' element={<Weather/>} />
    <Route  path='*' element={<Error/>} />
  </Routes>
  <Footer/>
  </>);
}

export default App;
