import HomePage from "./pages/HomePage";
import CardPage from "./pages/CardPage";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/cart" Component={CardPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="*" Component={NotFoundPage} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
