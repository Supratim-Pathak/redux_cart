import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartData = useSelector(state=>state.cart)
  console.log(cartData)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartData.items.map((value, index)=>{
          return(
            <CartItem key={index} item={{ title: value.title, quantity: value.quantity, total: value.quantity*value.price, price: value.price,description:value.description,image: value.image ,id:value.id}} />
          )
        })}
        
      </ul>
    </Card>
  );
};

export default Cart;
