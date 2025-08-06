import { useState } from "react";
import { Button } from "./ui/button";
import { IoIosRemove, IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";

export const ProductCard = (props: any) => {
  const { imageUrl, name, price, stock, id } = props;
  const [quantity, setquantity] = useState(0);

  const addquantity = () => {
    if (quantity < stock) {
      setquantity(quantity + 1);
    }
  };
  const removequantity = () => {
    if (quantity > 0) setquantity(quantity - 1);
  };

  const addCart = () => {
    alert("Add Cart");
  };

  // useEffect(() => {
  //   alert("Component did mount");
  // }, []);

  // useEffect(() => {
  //   alert("Component did Updated ");
  // }, [quantity]);

  // useEffect(() => {
  //   return () => alert("Component  unmount");
  // }, []);

  return (
    <div className="p-4 border rounded-md md:max-w-96 flex flex-col gap-4">
      <Link to={`/product/${id}`}>
        <img className="w-full" src={imageUrl} alt="product" />
      </Link>
      <Link to={`/product/${id}`}>
        <p className="text-lg">{name}</p>
        <p className="text-xl font-semibold">Rp {price.toLocaleString("id-ID")}</p>
        <p className="text-muted-foreground text-sm">Stock: {stock}</p>
      </Link>

      <div className="flex flex-col gap-2">
        {/* Quantity */}
        <div className="flex justify-between items-center">
          <Button disabled={quantity <= 0} size="icon" variant="ghost" onClick={removequantity}>
            <IoIosRemove className="w-6 h-6" />
          </Button>
          <p className="text-lg font-bold">{quantity}</p>
          <Button disabled={quantity >= stock} size="icon" variant="ghost" onClick={addquantity}>
            <IoIosAdd className="w-6 h-6" />
          </Button>
        </div>

        {/* Add Cart */}
        <Button disabled={!stock || !quantity} className="w-full" onClick={addCart}>
          {stock > 0 ? "Add Card" : "Out of stock"}
        </Button>
      </div>
    </div>
  );
};
