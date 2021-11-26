import React from "react";
//import card from material UI Library

const Card = (props) => {
  const { title, img, description, rating, price } = props;
  console.log("Props: ", props);
  return (
    <div>
      <h4>{title}</h4>;
      <img
        // onClick={this.beyImageClickHandler}
        alt=""
        src={img}
      />
      <h4>{description}</h4>
      <h4>{rating} stars</h4>
      <h4> ${price} / night</h4>
    </div>
  );
};

export default Card;
