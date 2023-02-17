import React from "react";

const SearchContext = React.createContext({
  onSearch: () => {},
});

export function SearchContextProvider(props) {
  const searchForHandler = (search) => {
    console.log(search);
  };

  return (
    <SearchContext.Provider
      value={{
        onSearch: searchForHandler,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
