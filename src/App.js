import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const cartState = useSelector(state=>state.ui.cartIsVisiable)
  return (
    <Layout>
      {cartState && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
