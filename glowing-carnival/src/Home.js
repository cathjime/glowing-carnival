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
  Grid, //  useful for cards display?
} from "@material-ui/core";
import "./Home.css";
import data from "./data";
//  install esLint
//  make sure to order imports correctly

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [listingsData, setListingsData] = useState(data);

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
          {/* will need to be rendered as a dropdown within the Card */}
        </Typography>
        <Select>
          <MenuItem value={1}>⭐️</MenuItem>
          <MenuItem value={2}>⭐️⭐️</MenuItem>
          <MenuItem value={3}>⭐️⭐️⭐️</MenuItem>
          <MenuItem placeholder="Rating ⭐️" value={4}>
            ⭐️⭐️⭐️⭐️
          </MenuItem>
          <MenuItem placeholder="Rating ⭐️" value={5}>
            ⭐️⭐️⭐️⭐️⭐️
          </MenuItem>
        </Select>
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
      <p>TEST: {searchTerm}</p>
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
