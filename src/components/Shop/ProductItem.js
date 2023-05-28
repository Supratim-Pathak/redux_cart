import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import {cartSliceAction} from "../store";
const ProductItem = (props) => {
  const { id ,title, price, description, image } = props;
  const cart = useSelector(state=>state.cart)
 
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

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} />
        </div>
        <header className={classes.header}>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>

        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={AddtoCartHandeler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
