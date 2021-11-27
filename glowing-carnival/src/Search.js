import { React, useState } from "react";
import Card from "./Card";
import data from "./data";

const Search = (props) => {
  const { searchHandler, submitHandler } = props;
  const [userInput, setUserInput] = useState("");
  //   const [listingsData, setListingsData] = useState(data);

  const handleChange = (e) => {
    setUserInput(e.target.value);
    searchHandler(userInput);
  };

  return (
    <>
      <form>
        <input
          placeholder="Search here..."
          type="search"
          value={userInput}
          onChange={handleChange}
        />
        <input type="Submit" value="Search" onSubmit={submitHandler} />
      </form>
      <p>TEST: {userInput}</p>
    </>
  );
};

export default Search;
