import { Toaster } from 'react-hot-toast';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Checkout from './component/checkout/checkout';
import ErrorPage from './component/errorpage/error';
import FooterMain from './component/footer/footerMain';
import Header from './component/header/header';
import Whishlist from './component/header/whishlist';
import Books from './component/main/books';
import Cart from './component/main/cart';
import Magazine from './component/main/magazine';
import Main from './component/main/main';
import PdpBooks from './component/main/pdpBooks';

function App() {
  let { pathname } = useLocation();
  return (
    <>
      {pathname === '/checkout' ? <Checkout /> :
        <>
          <Toaster />
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            {/* <Route path="/" errorElement={<ErrorPage />} /> */}
            <Route path='Magazines' element={<Magazine />}></Route>
            <Route path=':Books' element={<Books />}></Route>
            <Route path='Books/:id' element={<PdpBooks />}></Route>
            <Route path='*' element={<ErrorPage />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='whishlist' element={<Whishlist />}></Route>
          </Routes>
          <FooterMain />
        </>
      }
    </>

  )
}

export default App;
