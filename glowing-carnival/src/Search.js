import { React, useState } from "react";
import { Button } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
// import Card from "./Card";
// import data from "./data";

const Search = (props) => {
  const { searchHandler, submitHandler } = props;
  const [userInput, setUserInput] = useState("");

  return (
    <>
      <SearchBar
        value={userInput}
        onChange={(userInput) => setUserInput(userInput)}
        onRequestSearch={console.log("I hope this works!")}
        // onRequestSearch={() => doSomethingWith(this.state.value)}
      />

      <p>TEST: {userInput}</p>
    </>
  );
};

export default Search;

//  Notes for filter search: think about how to implement the filter when the form button is clicked
