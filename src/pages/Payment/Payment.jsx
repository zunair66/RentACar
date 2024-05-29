import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Payment.scss";
const Payment = () => {
  return (
    <div className="payment">
      <Header />
      <div className="payment-container">
        <form>
        <div className="left">
          <div className="billing-info">
            <div className="section-heading">
            <h2>Billing Info</h2>
            <span>Please enter your billing information</span>
            <span className="steps">step 1 of 4</span>
            </div>
            <div className="info">
            <label htmlFor="">Name</label>
            <input type="text" placeholder=" Your name" />
            <label htmlFor="">Phone Number</label>
            <input type="text" placeholder=" Phone number" />
            <label htmlFor="">Address</label>
            <input type="text" placeholder=" address" />
            <label htmlFor="">Town/City</label>
            <input type="text" placeholder=" Town or city" />
            </div>
          </div>
          <div className="rental-info">
            <h2>Rental Info</h2>
            <span>Please enter your rental info</span>
            <span className="steps">step 2 of 4</span>
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
          </div>
          <div className="payment-method">
            <h2>Payment Method</h2>
            <span>Please enter your payment method</span>
            <span className="steps">step 3 of 4</span>
            <div className="credit-card">
              <input type="radio" />
              <h2>Credit Card</h2>
              <img src="./Visa.png" alt="" />
              <img src="./mc.png" alt="" />
              <label htmlFor="">Card number</label>
              <input type="text" placeholder="card number" />
              <label htmlFor="">Expiration Date</label>
              <input type="text" placeholder="DD/MM/YY" />
              <label htmlFor="">Card Holder</label>
              <input type="text" placeholder="Card holder" />
              <label htmlFor="">CVC</label>
              <input type="text" placeholder="CVC" />
            </div>
            <div className="paypal">
              <input type="radio" name="" id="" />
              <label htmlFor="">PayPal</label>
              <img src="./PayPal.png" alt="" />
            </div>
            <div className="bitcoin">
              <input type="radio" name="" id="" />
              <label htmlFor="">Bitcoin</label>
              <img src="./Bitcoin.png" alt="" />
            </div>
          </div>
          <div className="confirmation">
            <h2>Confirmation</h2>
            <span>
              We are getting to the end. Just few clicks and your rental is
              ready!
            </span>
            <span className="steps">step 4 of 4</span>
            <div className="terms">
              <input type="checkbox" />
              <label htmlFor="">
                I agree with sending an Marketing and newsletter emails. No
                spam, promissed!
              </label>
              <input type="checkbox" />
              <label htmlFor="">
                I agree with our terms and conditions and privacy policy.
              </label>
            </div>
            <button>Rent Now</button>
            <img src="./security.png" alt="" />
            <h4>All your data are safe</h4>
            <span>
              We are using the most advanced security to provide you the best
              experience ever.
            </span>
          </div>
        </div>
        </form>
        <div className="right">
          <div className="rental-summary">
            <h2>Rental Summary</h2>
            <span>
              Prices may change depending on the length of the rental and the
              price of your rental car.
            </span>
            <div className="car-detail">
              <img src="./car1.png" />
              <h2>Keosberg</h2>
              <div className="rating">
                <img src="./fil-star.png" alt="" />
                <img src="./fil-star.png" alt="" />
                <img src="./fil-star.png" alt="" />
                <img src="./star.png" alt="" />
                <img src="./star.png" alt="" />
              </div>
              <hr />
              <label htmlFor="">Sub total</label>
              <h4>$80</h4>
              <label htmlFor="">Tax</label>
              <h4>$0</h4>
              <input type="text" placeholder="enter promo code" />
              <h2>Total Rental Price</h2>
              <h2>$80</h2>
              <span>Overall price and includes rental discount</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
