import React from "react";
import "./ProductDetail.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const ProductDetail = () => {
  return (
    <div className="pDetail">
      <Header />
      <div className="main">
        <div className="left">
          <img src="./car1.png" alt="" />
        </div>
        <div className="right">
          <h1>Koenigsegg</h1>
          <img className="like" src="./Like.png" alt="" />
          <div className="rating">
            <img src="./fil-star.png" alt="" />
            <img src="./fil-star.png" alt="" />
            <img src="./fil-star.png" alt="" />
            <img src="./star.png" alt="" />
            <img src="./star.png" alt="" />
          </div>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            necessitatibus fuga quibusdam eum facere sequi maiores reiciendis,
            magni blanditiis ut officiis ipsa! Repellat error blanditiis odio
            modi eaque numquam maiores.
          </p>
          <div className="car-detail">
            <p>Car Type</p>
            <span>Sport</span>
            <p>Capacity</p>
            <span>2 Person</span>
            <p>Steering</p>
            <span>Manual</span>
            <p>Gasoline</p>
            <span>70L</span>
          </div>
          <p className="price">
            $80/<span>day</span>
          </p>

          <button>Rent Now</button>
        </div>
      </div>

      <div className="reviews">
        <h2>
          Reviews <span>13</span>
        </h2>

        <div className="reviewBy">
          <div className="profile">
          <img src="./profile.png" alt="" />
          <h4>Alex Stanton</h4>
          <span>CEO at MetazEdge</span>
          </div>
          <span className="date">21 July 2022</span>
          <div className="rating">
            <img src="./fil-star.png" alt="" />
            <img src="./fil-star.png" alt="" />
            <img src="./fil-star.png" alt="" />
            <img src="./star.png" alt="" />
            <img src="./star.png" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quia,
            ipsa vel quis eaque, suscipit laboriosam libero voluptatem harum
            inventore a. Nostrum voluptatum reiciendis, vitae asperiores
            mollitia non consectetur sunt.
          </p>
        </div>
      </div>

      
      <Footer />
    </div>
  );
};

export default ProductDetail;
