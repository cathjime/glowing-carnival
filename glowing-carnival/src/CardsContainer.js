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

  //         return listing.title.toLowerCase().includes(userInput)
  //         const listingDesc = listing.description.toLowerCase();

  //     // listingsData.filter((listing) => {
  //     //   //   console.log("title :", listingTitle, "desc: ", listingDesc);
  //     //   // listingTitle ||
  //     //   return listingTitle.includes(userInput);
  //     //   //   .includes(userInput.toLowerCase());
  //     //   //   ||
  //     //   // listing.description.toLowerCase().includes(userInput.toLowerCase());
  //     // });

  const filteringlogic = (userInput) => {
    return 
  }
  //this function should filter based on userInput

  const searchHandler = (formInput) => {
    setSearchTerm(formInput);
    

    console.log("formInput:", formInput.toLowerCase());
    // call function that takes new input and filters existing list
    const filteredList = listingsData.filter((listing) => {
      return listing.description.toLowerCase().includes(searchTerm);
    });

    console.log("did it filter?: ", filteredList);
    // setListingsData(filteredList);
  };
  //   console.log("listingsOG: ", listingsData);


  return (
    <>
      <Search searchHandler={searchHandler} />
      {/* boolean to check if search? if yes then render all if no then render filtered results */}
      <h3>Search Results</h3>, {dataMap}
    </>
  );
};

export default CardsContainer;

//  Notes
//  how to deconstruct dataObj within the map function
//  thinking about component setup when setting up the filtering for the data
//  remember to delete Form component
