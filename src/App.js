import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Menu from "./Components/Menu"
import Nav from "./Components/Nav";
import Home from "./Components/Home";
// import Gallery from "./Components/GalleryContent/CarouselCollection"
import Contactus from "./Components/Contactus";
import Booking from "./Components/Shop/Booking";
import Login from "./Components/Shop/Login";
import DryCake from './Components/MenuContent/DryCake';
import Cart from './Components/Cart/Cart'
import CartContext from './Components/context/CartContext';
import MyCarouselTwoTierRingCakes from './Components/GalleryContent/MyCarouselTwoTierRingCakes';
import Carousel from './Components/GalleryContent/Carousel';
import Footer from './Components/Footer';
import Reviews from './Components/Shop/Reviews';
import WhyChoose from './Components/WhyChoose';

function App() {
  return (
    <CartContext>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Menu />} />
          {/* <Route path='/gallery' element={<Gallery />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/dryCake' element={<DryCake />} />
          <Route path='/contact' element={<Contactus />} />
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </Router>

    </CartContext>


  );
}

export default App;


// cd backend
// npm init -y
// npm i nodemon express mongoose cors dotenv

//to run-> npm start -------if not working--------> nodemon index.js