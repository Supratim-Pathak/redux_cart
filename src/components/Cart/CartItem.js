import classes from './CartItem.module.css';
import { useDispatch, useSelector } from "react-redux";
import { cartSliceAction } from "../store/index";
const CartItem = (props) => {
 
  const { title, quantity, total, price , id, description, image} = props.item;

  const dispatch = useDispatch()

  const AddtoCartHandeler = ()=>{
    const item = {
      description:description,
      id:id,
      price:price,
      thumbnail:image,
      title:title,
    }

    dispatch(cartSliceAction.addTocart({item}))
  }
  const RemovetoCartHandeler = ()=>{
    const item = {
      description:description,
      id:id,
      price:price,
      thumbnail:image,
      title:title,
      quantity:quantity,
    }

    dispatch(cartSliceAction.removeFromCart({item}))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={RemovetoCartHandeler}>-</button>
          <button onClick={AddtoCartHandeler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
