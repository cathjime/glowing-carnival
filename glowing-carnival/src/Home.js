import { React, useState } from "react";
import SearchBar from "material-ui-search-bar";
import SearchIcon from "@material-ui/icons/Search"; //  add into searchBar later
import {
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  // Grid,
  // Input, //  useful for cards display?
} from "@material-ui/core";
import "./Home.css";
import data from "./data";
//  install esLint
//  make sure to order imports correctly

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [listingsData, setListingsData] = useState(data);
  const [starRating, setStarRating] = useState("");

  const changeHandler = (e, cardId) => {
    setStarRating(e.target.value);
    updateStarRating(cardId, listingsData);
    //calls another function that changes the data based on id
    //changeHandler also accepts an id which can be passed in on line  51
    //use that id  to call other func inside changeHandler?
  };

  const updateStarRating = (cardId, data) => {
    data.map((dataItem) => {
      if (dataItem.id === cardId) {
        data.rating = starRating;
      }
    });
    //  this function will update the existing data array and render the updated rating for the selected card
  };

  const dataMap = listingsData.map((dataItem) => (
    <div className="searchresult">
      <img src={dataItem.img} alt="" />

      <div className="searchresult_info">
        <div className="infoTop">
          <p>{dataItem.location}</p>
          <h3>{dataItem.title}</h3>
          <p>_______</p>
          <p>{dataItem.description}</p>
        </div>
        <div className="infoBottom">
          <div className="stars">
            <p>Rating: {dataItem.rating}</p>
            <FormControl>
              <Select onChange={(e) => changeHandler(e)}>
                <MenuItem value={1}>⭐️</MenuItem>
                <MenuItem value={2}>⭐️⭐️</MenuItem>
                <MenuItem value={3}>⭐️⭐️⭐️</MenuItem>
                <MenuItem value={4}>⭐️⭐️⭐️⭐️</MenuItem>
                <MenuItem value={5}>⭐️⭐️⭐️⭐️⭐️</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="price">
            <h4>Price: ${dataItem.price}/night</h4>
          </div>
        </div>
      </div>
    </div>
  ));

  const requestSearch = (searchTerm) => {
    const filteredItems = data.filter((dataItem) => {
      return dataItem.location.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setListingsData(filteredItems);
  };

  return (
    <>
      <h1>HOME</h1>,<h2>This is the header component</h2>,
      <h2>Here's a banner now</h2>
      <SearchBar
        onChange={(newValue) => setSearchTerm(newValue)}
        onRequestSearch={() => requestSearch(searchTerm)}
        placeholder="Search for a location"
      />
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
//  how to deconstruct dataObj within the map function
//  thinking about component setup when setting up the filtering for the data
