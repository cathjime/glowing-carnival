import { React, useState } from "react";
import SearchBar from "material-ui-search-bar";
import SearchIcon from "@material-ui/icons/Search";
import {
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  InputBase,
} from "@material-ui/core";
import "./Home.css";
// import * as Mui from '@material-ui/core';

import data from "./data";
//  install esLint
//  make sure to order imports correctly

const Home = () => {
  // const { searchHandler } = props;

  // const [userInput, setUserInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [listingsData, setListingsData] = useState(data);

  const handleSearch = () => {
    console.log("this is a code refactor!");
  };

  //   dataMap is supposed to render the info from each dataObj inside its own card

  const dataMap = listingsData.map((dataItem) => (
    <Card variant="outlined" className="card">
      <CardHeader
        title={dataItem.title} // data.title
        subheader={dataItem.location} //data.location
        className="card-header"
      />
      <CardMedia className="card-media" image={dataItem.img} />
      <CardContent>
        <Typography variant="body1" color="text.primary">
          {dataItem.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {dataItem.rating} stars {/* data.rating */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${dataItem.price}/night{/* data.price*/}
        </Typography>
      </CardContent>
    </Card>
  ));

  //   <SearchBar
  //   value={searched}
  //   onChange={(searchVal) => requestSearch(searchVal)}
  //   onCancelSearch={() => cancelSearch()}
  //   placeholder="filter"
  // />

  // const [items, setItems] = useState(originalItems);
  // const [searched, setSearched] = useState("");

  // const requestSearch = (searchedVal) => {
  //   const filteredItems = originalItems.filter((item) => {
  //     return item.toLowerCase().includes(searchedVal.toLowerCase());
  //   });
  //   setItems(filteredItems);
  // };

  const requestSearch = (searchTerm) => {
    const filteredItems = data.filter((dataItem) => {
      return dataItem.location.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setListingsData(filteredItems);
  };

  // onClick, the searchbar should render cards filtered by search term
  //         return listing.title.toLowerCase().includes(userInput)
  //         const listingDesc = listing.description.toLowerCase();

  //   listingsData.filter((listing) => {
  //     //   console.log("title :", listingTitle, "desc: ", listingDesc);
  //     // listingTitle ||
  //     return listingTitle.includes(userInput);
  //     //   .includes(userInput.toLowerCase());
  //     //   ||
  //     // listing.description.toLowerCase().includes(userInput.toLowerCase());
  //   });

  // const filteringlogic = (userInput) => {
  //   return;
  // };
  //this function should filter based on userInput

  return (
    <>
      <h1>HOME</h1>,<h2>This is the header component</h2>,
      <h2>Here's a banner now</h2>
      <SearchBar
        onChange={(newValue) => setSearchTerm(newValue)}
        onRequestSearch={() => requestSearch(searchTerm)}
        // onRequestSearch={() => doSomethingWith(this.state.value)}
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
//  how to deconstruct dataObj within the map function
//  thinking about component setup when setting up the filtering for the data
