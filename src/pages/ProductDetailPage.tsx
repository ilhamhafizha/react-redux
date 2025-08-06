import { Button } from "@/components/ui/button";
import { axiosIntance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const [products, setProducts] = useState({
    id: 0,
    imageUrl: "",
    name: "",
    price: 0,
    stock: 0,
  });

  const params = useParams();

  const fetchProduct = async () => {
    try {
      const response = await axiosIntance.get(`/products/${params.productId}`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <main className="min-h-screen  max-w-screen-lg mx-auto px-4 mt-8 ">
        <div className="grid grid-cols-2 gap-8">
          <img src={products.imageUrl} alt={products.name} className="w-full" />
          <div className="flex flex-col gap-1 justify-center">
            <h1 className="text-3xl font-bold">{products.name}</h1>
            <p className="text-lg text-gray-700 mt-2">
              Price: {products.price.toLocaleString("id-ID")}
            </p>
            <p className="tex-sm text-muted-foreground mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium at sequi natus
              eos maiores magnam omnis aut debitis doloribus nesciunt.
            </p>
            <div className="flex items-center gap-8 mt-6">
              <Button size="icon" variant="ghost">
                <IoIosRemove className="w-6 h-6" />
              </Button>
              <p className="text-lg font-bold">{quantity}</p>
              <Button size="icon" variant="ghost">
                <IoIosAdd className="w-6 h-6" />
              </Button>
            </div>
            <div className="flex items-center mt-4 gap-4">
              <Button className="w-full" size="lg">
                Add to Cart
              </Button>
              <Button size="lg" variant="ghost">
                <IoHeartOutline className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetailPage;
