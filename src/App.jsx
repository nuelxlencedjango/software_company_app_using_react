import React from 'react';
import "./App.css";

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Homes from './Components/Homes';
import Services from './Components/Services';
import Product from './Components/Product';
import About from './Components/About';
import Blogs from './Components/Blogs';

//import Insights from './Components/Insights';
//import Careers from './Components/Careers';

import News from './Components/Newsletter';
import Contact from './Components/Contact_Us';
import MyFooter from './Components/MyFooter';
import Navs from './Components/Navbar';

const App = () => {
  return (
  
   <BrowserRouter>
    <Navs />
     
      <Routes>
     
      <Route path='/' element={<Homes />}></Route>
      <Route path='/services' element={<Services />}></Route>
      <Route path='/products' element={<Product />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/blog' element={<Blogs />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/newsletter' element={<News />}></Route>
  
      </Routes>
        <MyFooter />
   </BrowserRouter>
  );
};

export default App;
