import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./Home.scss";
import Card from "../../components/Card/Card";
import { products } from "../../Database/data";
import Footer from "../../components/Footer/Footer";
const Home = () => {

  const productPerRow = 8
  const [next, setNext] = useState(productPerRow)
  const handleShowMore = () =>{
    setNext(next + productPerRow)
  }
  return (
    <div className="home">
      <Header />
      <div className="main">
        <div className="left">
          <h2>The Best platform for Car Rental</h2>
          <p>
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <button className="primary-btn">Rental Car</button>
          <img src="./car1.png" alt="" />
        </div>
        <div className="right">
          <h2>Easy way to rent a car at a low price</h2>
          <p>
            Providing cheap car rental services and safe and comfortable
            facilities.
          </p>
          <button className="information-btn">Rental Car</button>
          <img src="./car2.png" alt="" />
        </div>
      </div>
      <div className="info-main">
        <div className="pickup">
          <input type="radio" />
          <h2>Pick-Up</h2>
          <div className="location">
            <h3>Locations</h3>
            <span>Select your city</span>
            <img src="./arrow-down.png" alt="" />
          </div>
          <div className="date">
            <h3>Date</h3>
            <span>Select your date</span>
            <img src="./arrow-down.png" alt="" />
          </div>
          <div className="time">
            <h3>Time</h3>
            <span>Select your time</span>
            <img src="./arrow-down.png" alt="" />
          </div>
        </div>
        <div className="dropoff">
          <input type="radio" />
          <h2>Drop-Off</h2>
          <div className="location">
            <h3>Locations</h3>
            <span>Select your city</span>
            <img src="./arrow-down.png" alt="" />
          </div>
          <div className="date">
            <h3>Date</h3>
            <span>Select your date</span>
            <img src="./arrow-down.png" alt="" />
          </div>
          <div className="time">
            <h3>Time</h3>
            <span>Select your time</span>
            <img src="./arrow-down.png" alt="" />
          </div>
        </div>
      </div>
      <div className="recommend">
        <h3>Car Recommendation</h3>
        <h4>View All</h4>
      </div>
      <div className="parent-card">
      {products.slice(0, next).map((item, id) => (
        <div className="cardd">
          <Card item={item} id={id} />
        </div>
      ))}
      </div>
      <button className="showmore" onClick={handleShowMore}>Show More</button>

      <Footer/>
    </div>
  );
};

export default Home;
