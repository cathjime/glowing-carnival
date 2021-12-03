import { React, useState } from "react";
import SearchBar from "material-ui-search-bar";

import data from "./data";
//  install esLint
//  make sure to order imports correctly

const Home = (props) => {
  const { searchHandler } = props;
  const [userInput, setUserInput] = useState("");
  //   from CardsContainer
  const [searchTerm, setSearchTerm] = useState("");
  const [listingsData, setListingsData] = useState(data);

  const handleSearch = () => {
    console.log("this is a code refactor!");
  };

  //   dataMap is supposed to render the info from each dataObj inside its own card

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

  // const Card = (props) => {
  //   const { title, img, description, rating, price } = props;

  //   return (
  //     <div>
  //       <h3>{title}</h3>;
  //       <img
  //         // onClick={this.beyImageClickHandler}
  //         alt=""
  //         src={img}
  //       />
  //       <h4>{description}</h4>
  //       <h4>{rating} stars</h4>
  //       <h4> ${price} / night</h4>
  //     </div>
  //   );
  // };

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

  const filteringlogic = (userInput) => {
    return;
  };
  //this function should filter based on userInput

  return (
    <>
      <h1>HOME</h1>,<h2>This is the header component</h2>,
      <h2>Here's a banner now</h2>;{/* <CardsContainer /> */}
      <SearchBar
        value={"hoola"}
        onChange={(userInput) => setUserInput(userInput)}
        onRequestSearch={handleSearch}
        // onRequestSearch={() => doSomethingWith(this.state.value)}
      />
      <p>TEST: {userInput}</p>
    </>
  );
};

export default Home;

//  Notes
//  how to deconstruct dataObj within the map function
//  thinking about component setup when setting up the filtering for the data
//  remember to delete Form component
