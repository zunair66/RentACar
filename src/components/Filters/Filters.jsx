import React from "react";
import "./Filters.scss";
const Filters = () => {
  return (
    <div className="filters">
      <div className="main-container">
        <div className="type-container">
          <h3>Type</h3>
          <label htmlFor="checkid">
            <input type="checkbox" id="checkid" />
            Sport
          </label>
          <label>
            <input type="checkbox" />
            SUV
          </label>
          <label>
            <input type="checkbox" />
            Sedan
          </label>
          <label>
            <input type="checkbox" />
            Hatchback
          </label>
          <label>
            <input type="checkbox" />
            PMV
          </label>
        </div>

        <div className="capacity-container">
          <h3>Capacity</h3>
          <label>
            <input type="checkbox" />2 Person
          </label>
          <label>
            <input type="checkbox" />4 Person
          </label>
          <label>
            <input type="checkbox" />6 Person
          </label>
          <label>
            <input type="checkbox" />8 Person
          </label>
        </div>
        <div className="price-container">
          <h3>Price</h3>
          <input type="range" />
          <label htmlFor="">Max $100</label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
