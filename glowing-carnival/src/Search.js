import { React, useState } from "react";

const Search = () => {
  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };
  return (
    <>
      <h3>
        This will hold both a search bar and a button. Search will need to
        filter based on input
      </h3>
      <form>
        <label>
          Search by Location{" "}
          <input type="text" value={userInput} onChange={handleChange} />
        </label>
      </form>
      <p>TEST: {userInput}</p>
    </>
  );
};

export default Search;
