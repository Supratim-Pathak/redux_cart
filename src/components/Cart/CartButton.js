import { uiSliceAction } from "../store";
import classes from './CartButton.module.css';
import { useDispatch } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch()

  const toggleHandeler = ()=>{
    dispatch(uiSliceAction.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleHandeler}>
      <span>My Cart</span>
      <span className={classes.badge}>{props.totalQuantity}</span>
    </button>
  );
};

export default CartButton;
