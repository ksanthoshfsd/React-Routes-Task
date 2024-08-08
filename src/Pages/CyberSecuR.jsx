
import React from "react";
import Cards from "../Components/Cards/Cards";

const CyberSecurity = ({ data }) => {
  let CyberSecurity = data.filter((element) => element.head === "Cyber Security");
  return (
    <div className="container">
      <h3>Cyber Security Program</h3>
      <Cards data={CyberSecurity} />
    </div>
  );
};

export default CyberSecurity;
