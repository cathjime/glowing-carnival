import { React, useState } from "react";

const Form = (props) => {
  const { submitHandler } = props;

  //   const [listingsData, setListingsData] = useState(data);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitHandler(e);
      }}
    >
      <input type="text" placeholder="FORM" />
    </form>
  );
};

export default Form;
