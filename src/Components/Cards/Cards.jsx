import React from "react";
import "../Cards/Cards.css";
const Cards = ({ data }) => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((element, index) => {
          return (
            <div key={index}>
              <div className="col">
                <div className="card h-100">
                  <img
                    src={element.img}
                    className="card-img-top"
                    alt={element.title}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{element.title}</h4>
                    <p className="card-text">{element.content}</p>
                  </div>
                  
                  <div className="card-footer">
                  <p> {element.name} </p> 
                    <small className="text-body-secondary">                     
                      {element.date}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;