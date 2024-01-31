
import './App.css';
import About from './Components/About';
import Home from './Components/home';
import Navbar from './Components/Navbar';
import Service from './Components/Services';
import Products from './Components/products';
import Blog from './Components/blog';
import Newsletter from './Components/Newsletter';
import MyFooter from './Components/MyFooter';


function App() {


  return (
    <>
      <Navbar/>
    
      <Service/>
      <Blog/>
      <Products/>
      
      <About />
     
    
      <Newsletter/>
      <MyFooter/>


    </>
  );
}

export default App
