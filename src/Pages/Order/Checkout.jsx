// Checkout.jsx
import React, { useState, useContext, useEffect } from "react";
import "../CSS/Checkout.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

import one from '../../../src/Components/Assets/productImage/1.jpg'
import two from '../../../src/Components/Assets/productImage/2.jpg'
import three from '../../../src/Components/Assets/productImage/3.jpg'
import four from '../../../src/Components/Assets/productImage/4.jpg'
import five from '../../../src/Components/Assets/productImage/5.jpg'
import six from '../../../src/Components/Assets/productImage/6.jpg'
import seven from '../../../src/Components/Assets/productImage/7.jpg'
import eight from '../../../src/Components/Assets/productImage/8.webp'
import nine from '../../../src/Components/Assets/productImage/9.webp'
import ten from '../../../src/Components/Assets/productImage/10.jpg'
import elevent from '../../../src/Components/Assets/productImage/11.jpg'
import twelve from '../../../src/Components/Assets/productImage/12.jpg'
import thirteen from '../../../src/Components/Assets/productImage/13.jpg'
import fourteen from '../../../src/Components/Assets/productImage/14.jpg'
import fifteen from '../../../src/Components/Assets/productImage/15.jpg'
import sixteen from '../../../src/Components/Assets/productImage/16.png'
import seventeen from '../../../src/Components/Assets/productImage/17.png'
import eighteen from '../../../src/Components/Assets/productImage/18.jpg'
import nineteen from '../../../src/Components/Assets/productImage/19.jpg'
import twenty from '../../../src/Components/Assets/productImage/20.jpg'
 
const Checkout = () => {

  const navigate = useNavigate()

  // state variable
  const { products } = useContext(ShopContext);
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cashOnDelivery");

  // set state when confirm payment method
  const handleConfirmation = () => {
    if (selectedPaymentMethod) {
      setIsConfirmed(true);
    } else {
      setIsConfirmed(false);
    }
  };

  // set notify when confirm payment method
  const handleConfirmation2 = () => {
    if (selectedPaymentMethod) {
      alert(`Selected Payment Method: ${selectedPaymentMethod}`);
      // Additional actions after confirming the payment method can be added here
    } else {
      alert("Please select a payment method.");
    }
  };

  // call api to add order 
  const handleOrderAction = (e) => {
    e.preventDefault()
    fetch('http://localhost:4000/order/addOrder', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'auth-token': `${localStorage.getItem("auth-token")}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name, 
        address: address, 
        province: province, 
        phoneNumber: phoneNumber, 
        payment: selectedPaymentMethod, 
        orderItems: cartItems, 
        totalPrice: getTotalCartAmount()
      })
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        alert("order successfully")
        // navigate to home page when order success
        navigate("/")
      }
    })
  }

  // get information in url query
  const name = queryParams.get("name");
  const address = queryParams.get("address");
  const province = queryParams.get("province");
  const phoneNumber = queryParams.get("phoneNumber");


  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };


  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <h2>Payment Method</h2>
        <form>
          <label className="payment-method-label">
            <input
              type="radio"
              value="cashOnDelivery"
              checked={selectedPaymentMethod === "cashOnDelivery"}
              onChange={handlePaymentMethodChange}
              className="payment-method-input"
            />
            Cash on Delivery
          </label>
          <label className="payment-method-label">
            <input
              type="radio"
              value="Bank Transfer"
              checked={selectedPaymentMethod === "Bank Transfer"}
              onChange={handlePaymentMethodChange}
              className="payment-method-input"
            />
            Bank Transfer
          </label>
          <label className="payment-method-label">
            <input
              type="radio"
              value="Momo"
              checked={selectedPaymentMethod === "Momo"}
              onChange={handlePaymentMethodChange}
              className="payment-method-input"
            />
            Momo
          </label>
          <button type="button" onClick={() => { handleConfirmation(); handleConfirmation2(); }} className="confirm-payment-button">
            Confirm Payment Method
          </button>
        </form>
      </div>


      <div className="checkout-right">
        <h2>Order Summary</h2>
        <div className="order-summary">
          <h3>Ordered Products</h3>
          <div className="ordered-products">
            {/* get all product in cart*/}
            {products.map((e) => {
              switch(e.id) {
              case 1: e.image = one; break;
              case 2: e.image = two; break;
              case 3: e.image = three; break;
              case 4: e.image = four; break;
              case 5: e.image = five; break;
              case 6: e.image = six; break;
              case 7: e.image = seven; break;
              case 8: e.image = eight; break;
              case 9: e.image = nine; break;
              case 10: e.image = ten; break;
              case 11: e.image = elevent; break;
              case 12: e.image = twelve; break;
              case 13: e.image = thirteen; break;
              case 14: e.image = fourteen; break;
              case 15: e.image = fifteen; break;
              case 16: e.image = sixteen; break;
              case 17: e.image = seventeen; break;
              case 18: e.image = eighteen; break;
              case 19: e.image = nineteen; break;
              case 20: e.image = twenty; break;
            }
              if (cartItems[e.id] > 0) {
                return <div>
                  <div className="ordered-product">
                    <img className="ordered-product-img" src={e.image} alt="" />
                    <p cartitems-product-title>{e.name}</p>
                    {/* <p>${e.new_price}</p> */}
                    <p>x{cartItems[e.id]} </p>
                    <p>${e.new_price * cartItems[e.id]}</p>
                  </div>
                  <hr />
                </div>;
              }
              return null;
            })}
          </div>
        </div>

        <div className="shipping-info">
          <h3>Shipping Information</h3>
          <p>Name: {name}</p>
          <p>Address: {address} </p>
          <p>Province: {province} </p>
          <p>Phone Number: {phoneNumber}</p>
        </div>
        <div className="total-amount">
          <h3>Total Amount</h3>
          <p>${getTotalCartAmount()}</p>
        </div>
        {/* Button to confirm order */}

        <div className="Select-method">
          {/* Display selected payment method only after confirmation */}
          {isConfirmed && selectedPaymentMethod && (
            <div className="selected-payment-info">
              <h3>Payment Method:</h3>
              <p>{selectedPaymentMethod}</p>
            </div>
          )}
        </div>

        <button className="confirm-order-button" onClick={handleOrderAction}>Confirm Order</button>
      </div>
    </div>
  );
};

export default Checkout;