import { React, useState, useEffect } from "react";
import SearchBar from "material-ui-search-bar";
import SearchIcon from "@material-ui/icons/Search"; //  add into searchBar later
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import "./Home.css";
import data from "./data";
import { ContactSupportOutlined } from "@material-ui/icons";
//  install esLint
//  make sure to order imports correctly

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [listingsData, setListingsData] = useState(data);
  const [starRating, setStarRating] = useState("");

  const changeHandler = (e, cardId, dataArray) => {
    const val = e.target.value;
    setStarRating(val); //   when this is commented out, rating no longer renders the updated val on card. why?
    updateStarRating(cardId, dataArray, val);
  };

  const updateStarRating = (cardId, dataArray, ratingValue) => {
    dataArray.map((dataObject) => {
      if (dataObject.id === cardId) {
        dataObject.rating = ratingValue;
      }
    });
  };

  const dataMap = listingsData.map((dataItem) => (
    <div className="searchresult" id={`${dataItem.id}`}>
      <h3>{dataItem.title}</h3>
      <p>{dataItem.location}</p>
      <img src={dataItem.img} alt="" />
      <p>_________________________</p>
      <p>{dataItem.description}</p>
      <p>Rating: {dataItem.rating}</p>

      <FormControl>
        <Select onChange={(e) => changeHandler(e, dataItem.id, listingsData)}>
          <MenuItem value={1}>⭐️</MenuItem>
          <MenuItem value={2}>⭐️⭐️</MenuItem>
          <MenuItem value={3}>⭐️⭐️⭐️</MenuItem>
          <MenuItem value={4}>⭐️⭐️⭐️⭐️</MenuItem>
          <MenuItem value={5}>⭐️⭐️⭐️⭐️⭐️</MenuItem>
        </Select>
      </FormControl>
      <h4>Price: ${dataItem.price}/night</h4>
    </div>
  ));

  const requestSearch = (searchTerm) => {
    const filteredItems = data.filter((dataItem) => {
      return dataItem.location.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setListingsData(filteredItems);
  };

  const filterByRating = (ratingVal) => {
    console.log(ratingVal);
    const filteredRatings = listingsData.filter((dataItem) => {
      return dataItem.rating >= ratingVal;
    });
    setListingsData(filteredRatings);
  };

  console.log("data: ", listingsData);
  return (
    <>
      <h1>HOME</h1>,<h2>This is the header component</h2>,
      <h2>Here's a banner </h2>
      <SearchBar
        onChange={(newValue) => setSearchTerm(newValue)}
        onRequestSearch={() => requestSearch(searchTerm)}
        placeholder="Search for a location"
      />
      <div className="ratingsFilter">
        {/* should also have an onClick to return stars with x rating
  drop down with radio button when button is selected then saec button on bottom is clicked render new data
  */}
        <h5>Search by Star Rating:</h5>
        <form>
          <input
            type="radio"
            value="1"
            id="1"
            onChange={(e) => filterByRating(e.target.value)}
            name="1 star"
          />
          <label for="1 star">1 Star and Up</label>
          <input
            type="radio"
            value="2"
            id="2"
            onChange={(e) => filterByRating(e.target.value)}
            name="2 stars"
          />
          <label for="2 stars">2 Stars and Up</label>
          <input
            type="radio"
            value="3"
            id="3"
            onChange={(e) => filterByRating(e.target.value)}
            name="3 stars"
          />
          <label for="3 stars">3 Stars and Up</label>
          <input
            type="radio"
            value="4"
            id="4"
            onChange={(e) => filterByRating(e.target.value)}
            name="4 stars"
          />
          <label for="4 stars">4 Stars and Up</label>
          <input
            type="radio"
            value="5"
            id="5"
            onChange={(e) => filterByRating(e.target.value)}
            name="5 stars"
          />
          <label for="5 stars">5 Stars and Up</label>
        </form>

        <p>Your selection is {starRating}</p>
      </div>
      <p>TEST SELECTED: {starRating}</p>
      {dataMap}
    </>
  );
};

export default Home;

//  Notes
//  you don't need a value within a material-ui searchbar
//  material-ui select requires the e passed into the (e) => function(e), otherwise it won't work
//  material-ui card img won't show unless there's a height defined
//  how to deconstruct dataObj within the map function (you can't)
//  thinking about component setup when setting up the filtering for the data
//  making the data persist - currently it doesn't persist after refresh
