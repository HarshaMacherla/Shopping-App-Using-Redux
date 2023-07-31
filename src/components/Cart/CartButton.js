import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cart-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(cartActions.showCart());
  };

  const itemsInCart = useSelector((state) => state.cart.cartItems.length);

  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsInCart}</span>
    </button>
  );
};

export default CartButton;
