import React, { useState } from "react";
import "./Card.scss";
const Card = ({ item, id }) => {
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
  };
  return (
    <div className="card">
      <div className="card-parent" key={id}>
        <h2>{item.name}</h2>
        <img
          className="favorite"
          src={like ? "./filled-Like.png" : "./Like.png"}
          alt=""
          onClick={handleLike}
        />
        <span className="sport">{item.category}</span>
        <img className="car" src={item.img} alt="" />
        <div className="details">
          <div className="gas">
            <img src="./gas-station.png" alt="" />
            <span className="fuel">{item.fuel}L</span>
          </div>
          <div className="man-auto">
            <img src="./usedBy.png" alt="" />
            <span className="manual">{item.type}</span>
          </div>
          <div className="people-info">
            <img src="./profile-2user.png" alt="" />
            <span className="people">{item.usedBy}</span>
          </div>
        </div>
        <div className="proceed">
          <h2>
            ${item.price}/<span className="day">day</span>
          </h2>
          <button>Rent Now</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
