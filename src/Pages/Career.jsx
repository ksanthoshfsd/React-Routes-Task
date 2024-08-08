import React from "react";
import Cards from "../Components/Cards/Cards";

const Career = ({ data }) => {
  let Career = data.filter(
    (element) => element.head === "Career Development Program"
  );
  return (
    <div className="container">
      <h3>Career Development Program</h3>
      <Cards data={Career} />
    </div>
  );
};

export default Career;