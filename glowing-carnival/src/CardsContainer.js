import { React, useState } from "react";
import Card from "./Card";
import data from "./data";
// import Form from "./Form";
import Search from "./Search";

const CardsContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [listingsData, setListingsData] = useState(data);

  const dataMap = listingsData.map((dataItem) => (
    <Card
      key={dataItem.id}
      title={dataItem.title}
      img={dataItem.img}
      description={dataItem.description}
      rating={dataItem.rating}
      price={dataItem.price}
      //add onClick for nav to other screens
    />
  ));

  //   const filteredList = listingsData.filter((listing) => {
  //     const listingTitle = listing.title.toLowerCase();
  //     const listingDesc = listing.description.toLowerCase();
  //     listingTitle || listingDesc.includes("h");
  //     .includes(searchTerm);
  //     ||
  //       listing.description.toLowerCase().includes(userInput.toLowerCase());
  //   });
  //   console.log("userinput: ", userInput);

  const searchHandler = (formInput) => {
    setSearchTerm(formInput.toLowerCase());
    console.log("formInput:", formInput);
    //look up how to get full input - why does it chop off last letter?
  };

  const submitHandler = () => {
    // setUserInput(e.target.value);
    console.log("idkidkidk");
  };

  return (
    <>
      {/* <Form submitHandler={submitHandler} /> */}
      <Search searchHandler={searchHandler} submitHandler={submitHandler} />
      {/* boolean to check if search? if yes then render all if no then render filtered results */}
      <h3>Search Results</h3>, {dataMap}
    </>
  );
};

export default CardsContainer;

//  Notes
//  how to deconstruct dataObj within the map function
//  thinking about component setup when setting up the filtering for the data
//  where should the search component be rendered? Home?
