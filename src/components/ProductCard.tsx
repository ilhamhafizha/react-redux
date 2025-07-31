import { useState } from "react";
import { Button } from "./ui/button";
import { IoIosRemove, IoIosAdd } from "react-icons/io";

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  stock: number;
}

export const ProductCard = (props: Props) => {
  const { imageUrl, name, price, stock } = props;

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

  return (
    <div className="p-4 border rounded-md md:max-w-96 flex flex-col gap-4">
      <div className="aspect-square w-full overflow-hidden">
        <img className="w-full" src={imageUrl} alt="product" />
      </div>
      <div>
        <p className="text-lg">{name}</p>
        <p className="text-xl font-semibold">Rp {price.toLocaleString("id-ID")}</p>
        <p className="text-muted-foreground text-sm">Stock: {stock}</p>
      </div>

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
        <Button className="w-full" onClick={addCart}>
          Add Cart
        </Button>
      </div>
    </div>
  );
};
