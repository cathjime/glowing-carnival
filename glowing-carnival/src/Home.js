import { React, useState, useEffect } from "react";
import SearchBar from "material-ui-search-bar";
import SearchIcon from "@material-ui/icons/Search"; //  add into searchBar later
import { Select, MenuItem, FormControl, Button } from "@material-ui/core";
import "./Home.css";
import data from "./data";
import { ContactSupportOutlined } from "@material-ui/icons";
//  install esLint
//  make sure to order imports correctly

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [listingsData, setListingsData] = useState(data);
  const [starRating, setStarRating] = useState("");
  const [listingPrice, setListingPrice] = useState(1);

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
      <h4>Price: ${dataItem.price} / Night</h4>
    </div>
  ));

  const requestSearch = (searchTerm) => {
    const filteredItems = data.filter((dataItem) => {
      return dataItem.location.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setListingsData(filteredItems);
  };

  const filterByRating = (ratingVal) => {
    const filteredRatings = listingsData.filter((dataItem) => {
      return dataItem.rating >= ratingVal;
    });
    setListingsData(filteredRatings);
  };

  const onValueChange = (newVal) => {
    setListingPrice(newVal);
  };

  // const filterByPrice = (priceVal) => {
  //   const filteredByPrice = listingsData.filter((dataItem) => {
  //     return dataItem.price <= priceVal;
  //   });
  //   setListingsData(filteredByPrice);
  // };
  const filterByPrice = () => {
    const filteredByPrice = listingsData.filter((dataItem) => {
      return dataItem.price <= listingPrice;
    });
    setListingsData(filteredByPrice);
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
        <h4>Search by Star Rating:</h4>
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
      </div>
      <div className="priceFilter">
        <h4>Search by Price: ${listingPrice} / Night</h4>

        <div class="slidecontainer">
          <input
            type="range"
            min="1"
            max="500"
            value={listingPrice}
            class="slider"
            id="myRange"
            onChange={(e) => onValueChange(e.target.value)}
          />
          <div onClick={() => filterByPrice()} className="priceFilterButton">
            Save
          </div>{" "}
        </div>
      </div>
      {dataMap}
    </>
  );
};

export default Home;

//  Notes
//  you don't need a value within a material-ui searchbar
//  material-ui select requires the e passed into the (e) => function(e), otherwise it won't work
//  material-ui card img won't show unless there's a height defined
//  how to deconstruct dataObj inside the map function (you can't)
//  thinking about component setup when setting up the filtering for the data
//  making the data persist - currently it doesn't persist after refresh
