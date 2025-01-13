import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import CartContexProvider from "./store/shopping-cart-context.jsx";
function App() {
  return (
    //If react version < 19 use <CartContext.Provider> and for the closing tag too
    <CartContexProvider>
      <Header />
      <Shop />
    </CartContexProvider>
  );
}
export default App;
