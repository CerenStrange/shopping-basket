import { useState } from 'react'
import Header from './components/Header'
import Products from './components/Products'
import Cart from './components/Cart'



function App() {
  const [cart, setCart] = useState([]);

  const emptyCart = () => {
    setCart([])
  }

  return (
    <div className='container mx-auto' >
      <Header cart={cart} />
      <Products cart={cart} setCart={setCart}/>
      <Cart cart={cart} emptyCart={emptyCart}/>
      <hr />
      <h6>&copy;Ceren Çelik tarafından Üretken Akademi için hazırlanmıştır</h6>
    </div>
    
  );
}

export default App
