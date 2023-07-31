import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  const handleIncreaseQuantity = (item) => {
    dispatch(cartActions.increaseQuantity(item));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(cartActions.decreaseQuantity(item));
  };

  return (
    <li className={classes.item} key={title}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          Rs. {total.toFixed(2)}{" "}
          <span className={classes.itemprice}>
            (Rs. {price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => handleDecreaseQuantity({ title })}>-</button>
          <button onClick={() => handleIncreaseQuantity({ title })}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
