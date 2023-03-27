import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Checkout from './pages/Checkout';
import Checkout2 from './pages/Checkout2';
import Checkout3 from './pages/Checkout3';
import Checkout4 from './pages/Checkout4';
import Cart from './pages/Cart';
import Header from './components/Header';
import Searching from './components/Searching';
import Hero from './components/Hero';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/checkout2' element={<Checkout2/>} />
          <Route path='/checkout3' element={<Checkout3/>} />
          <Route path='/checkout4' element={<Checkout4/>} />
          <Route path='cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
