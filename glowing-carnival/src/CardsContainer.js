import React from "react";
import Card from "./Card";
import data from "./data";

const CardsContainer = () => {
  const dataMap = data.map((dataItem) => (
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

  return (
    <>
      <h3>Search Results</h3>, {dataMap}
    </>
  );
};

export default CardsContainer;

//  Notes
//  how to deconstruct dataObj within the map function
