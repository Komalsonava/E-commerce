import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Layout from './Compontent/Layout/Layout';
import About from './Compontent/Page/About';
import Home from './Compontent/Page/Home';
import Logiin from './Compontent/Page/Logiin';
import Singup from './Compontent/Page/Singup';
import LearnHooks from './Compontent/Modules/LearnHooks';
import Contact from './Compontent/Page/Contact';
import Wishlist from './Compontent/Page/Wishlist';
import Chikankari from './Compontent/Page/Chikankari';
import Madhubani from './Compontent/Page/Madhubani';
import Ajrakh from './Compontent/Page/Ajrakh';
import Sticks from './Compontent/Page/Sticks';
import Products from './Compontent/Modules/Products';
import Productdetail from './Compontent/Page/Productdetail';
import ShoppingCart from './Compontent/Page/ShoppingCart';
import { PlaceOrder } from './Compontent/Page/PlaceOrder';
// import Payment from './Compontent/Page/Payment';


function App() {
  return (
    // <div className="App">
    //   <Home/>
    // </div>
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
           <Route index path='/' element={<Home/>} /> 
           <Route path='/about' element={<About/>} />
           <Route path='/Logiin' element={<Logiin/>} />
           <Route path='/Singup' element={<Singup/>} />
           <Route path='/LearnHooks' element={<LearnHooks/>} />
           <Route path='/Contact' element={<Contact/>} />
           <Route path='/Wishlist' element={<Wishlist/>} />
           <Route path='/Chikankari' element={<Chikankari/>} />
           <Route path='/Madhubani' element={<Madhubani/>} />
           <Route path='/Ajrakh' element={<Ajrakh/>} />
           <Route path='/sticks' element={<Sticks/>} />
           <Route path='/Productdetail' element={<Productdetail/>} />
           <Route path='/Products' element={<Products/>} />
           <Route path='/ShoppingCart' element={<ShoppingCart/>} />
           <Route path='/PlaceOrder' element={<PlaceOrder/>} />
           {/* <Route path='/Payment' element={<Payment/>} /> */}




         


         
           
  
        </Route>
      </Routes>
    </BrowserRouter>

  </>  
  );
}

export default App;
