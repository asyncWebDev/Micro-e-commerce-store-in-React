import React, { useState } from "react";

import StoreContent from "./components/Components/MainContent.js/StoreContent";
import Nav from "./components/Components/MainContent.js/Nav";
import { CartContextProvider } from "./context/cart-context";

function App() {
  const [activePage, setActivePage] = useState("main");
  const loadPageHandler = (page) => {
    console.log(page);
    setActivePage(page);
  };

  return (
    <React.Fragment>
      <Nav onLoadPage={loadPageHandler} />
      <CartContextProvider>
        <StoreContent content={activePage} />
      </CartContextProvider>
    </React.Fragment>
  );
}

export default App;
