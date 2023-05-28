import { useSelector } from 'react-redux';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  const state = useSelector(state=>state.cart)
  console.log(state.totalQuantity)
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton totalQuantity={state.totalQuantity} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
