import { React, useState } from "react";
import SearchBar from "material-ui-search-bar";
// import Card from "./Card";
// import data from "./data";

const Search = (props) => {
  const { searchHandler } = props;
  const [userInput, setUserInput] = useState("");

  const handleSearch = () => {
    searchHandler(userInput);
  };

  return (
    <>
      <SearchBar
        value={userInput}
        onChange={(userInput) => setUserInput(userInput)}
        onRequestSearch={handleSearch}
        // onRequestSearch={() => doSomethingWith(this.state.value)}
      />

      <p>TEST: {userInput}</p>
    </>
  );
};

export default Search;

//  Notes for filter search: think about how to implement the filter when the form button is clicked
