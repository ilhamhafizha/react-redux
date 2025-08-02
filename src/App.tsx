import HomePage from "./pages/HomePage";
import CardPage from "./pages/CardPage";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/cart" Component={CardPage} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
