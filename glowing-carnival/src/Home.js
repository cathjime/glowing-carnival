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
    //  this function will update the existing data array and render the updated ratiing for the selected card
  };

  const dataMap = listingsData.map((dataItem) => (
    <Card variant="outlined" className="card">
      <CardHeader
        title={dataItem.title}
        subheader={dataItem.location}
        className="card-header"
      />
      <CardMedia className="card-media" image={dataItem.img} />
      <CardContent>
        <Typography variant="body1" color="text.primary">
          {dataItem.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {dataItem.rating} stars
        </Typography>
        <FormControl>
          {/* <InputLabel>Rating</InputLabel> */}
          <Select onChange={(e) => changeHandler(e, id)} id={dataItem.id}>
            {/* when change occurs I want to grab the id for the corresponding card */}
            <MenuItem value={1}>⭐️</MenuItem>
            <MenuItem value={2}>⭐️⭐️</MenuItem>
            <MenuItem value={3}>⭐️⭐️⭐️</MenuItem>
            <MenuItem value={4}>⭐️⭐️⭐️⭐️</MenuItem>
            <MenuItem value={5}>⭐️⭐️⭐️⭐️⭐️</MenuItem>
          </Select>
        </FormControl>
        <Typography variant="body2" color="text.secondary">
          Price: ${dataItem.price}/night
        </Typography>
      </CardContent>
    </Card>
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
//  material-ui card img won't show unless there's a height defined
//  how to deconstruct dataObj within the map function
//  thinking about component setup when setting up the filtering for the data
