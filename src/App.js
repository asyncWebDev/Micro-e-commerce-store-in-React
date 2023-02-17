import React, { useState } from "react";

import StoreContent from "./components/Components/MainContent.js/StoreContent";
import Nav from "./components/Components/MainContent.js/Nav";
import { CartContextProvider } from "./context/cart-context";
import { SearchContextProvider } from "./context/search-context";

function App() {
  const [activePage, setActivePage] = useState("main");

  const loadPageHandler = (page) => {
    console.log(page);
    setActivePage(page);
  };

  return (
    <React.Fragment>
      <SearchContextProvider>
        <Nav onLoadPage={loadPageHandler} />
        <CartContextProvider>
          <StoreContent content={activePage} onLoadPage={loadPageHandler} />
        </CartContextProvider>
      </SearchContextProvider>
    </React.Fragment>
  );
}

export default App;
