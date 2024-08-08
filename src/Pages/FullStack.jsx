import React from "react";
import Cards from "../Components/Cards/Cards";

const FullStack = ({ data }) => {
  let FullStack = data.filter((element) => element.head === "Full Stack Development");
  return (
    <div className="container">
      <h3>Full Stack Development Program</h3>
      <Cards data={FullStack}></Cards>
    </div>
  );
};

export default FullStack;