import Cart from "./components/Cart";
import ContextProvider from "./components/Context";
import Form from "./components/Form";
import Products from "./components/Products";


function App() {
    return(
      <ContextProvider>
      <Form/>
      <Products/>
      <Cart/>
      </ContextProvider>
    )
}

export default App;
