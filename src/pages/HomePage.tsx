import { ProductCard } from "@/components/ProductCard";
import { axiosIntance } from "@/lib/axios";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [productsIsLoading, setProductsIsLoading] = useState(false);

  const [products, setProducts] = useState([]);

  const productList = products.map((product: any) => {
    return (
      <ProductCard
        id={product.id}
        imageUrl={product.imageUrl}
        name={product.name}
        price={product.price}
        stock={product.stock}
      />
    );
  });

  const fetchProducts = async () => {
    setProductsIsLoading(true);
    try {
      const response = await axiosIntance.get("/products");
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setProductsIsLoading(false);
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <main className="min-h-[80vh] max-w-screen-md mx-auto px-4 mt-8 mb-8">
        <div className="pb-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Discover Your Unique Style.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Explore our curated collection of fashion-forward pieces designed to elevate your
            wardrobe and express your individuality every day.
          </p>
        </div>
        {productsIsLoading ? (
          <div className="flex h-full justify-center items-center text-5xl font-bold">
            <p>Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">{productList}</div>
        )}
      </main>
    </>
  );
};

export default HomePage;
