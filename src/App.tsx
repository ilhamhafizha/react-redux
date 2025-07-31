import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";

const productRaw = [
  {
    imageUrl: "https://laz-img-sg.alicdn.com/p/8b0d3d2645bdbc5ec85ec62c3fe2be5a.jpg",
    name: "T-shirt Boba",
    price: 100000,
    stock: 0,
  },
  {
    imageUrl: "https://the49thsupplyco.com/cdn/shop/products/true-navy-t-shirt.jpg?v=1612224858",
    name: "T-shirt Mamba",
    price: 120000,
    stock: 5,
  },
];

function App() {
  const products = productRaw.map((product: any) => {
    return (
      <ProductCard
        imageUrl={product.imageUrl}
        name={product.name}
        price={product.price}
        stock={product.stock}
      />
    );
  });

  return (
    <>
      <Header />
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
        {/* <Box /> */}
        <div className="grid grid-cols-2 gap-4">{products}</div>
      </main>
      <Footer />
    </>
  );
}

export default App;
