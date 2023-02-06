import { CategoryItem } from "../../store/categories/category.types";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";

type CartItemType = CategoryItem & {
  quantity: number;
};
type CartItemProps = {
  cartItem: CartItemType;
};

const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
