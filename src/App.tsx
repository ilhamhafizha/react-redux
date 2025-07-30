import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";

function App() {
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
        <ProductCard
          imageUrl="https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/zoom/ad2b153ff028f3e1e308bb613178c23994ed93f5_xxl-1.jpg"
          name="T-shirt"
          price={100000}
          stock={10}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
