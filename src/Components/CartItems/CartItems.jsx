import React, { useContext } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import {Link} from "react-router-dom";

import one from '../Assets/productImage/1.jpg'
import two from '../Assets/productImage/2.jpg'
import three from '../Assets/productImage/3.jpg'
import four from '../Assets/productImage/4.jpg'
import five from '../Assets/productImage/5.jpg'
import six from '../Assets/productImage/6.jpg'
import seven from '../Assets/productImage/7.jpg'
import eight from '../Assets/productImage/8.webp'
import nine from '../Assets/productImage/9.webp'
import ten from '../Assets/productImage/10.jpg'
import elevent from '../Assets/productImage/11.jpg'
import twelve from '../Assets/productImage/12.jpg'
import thirteen from '../Assets/productImage/13.jpg'
import fourteen from '../Assets/productImage/14.jpg'
import fifteen from '../Assets/productImage/15.jpg'
import sixteen from '../Assets/productImage/16.png'
import seventeen from '../Assets/productImage/17.png'
import eighteen from '../Assets/productImage/18.jpg'
import nineteen from '../Assets/productImage/19.jpg'
import twenty from '../Assets/productImage/20.jpg'

const CartItems = () => {
  // get all product 
  const {products} = useContext(ShopContext);

  //get all cart variable
  const {cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e)=>{
        // if user have product in cart show all product detail in cart
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
        if(cartItems[e.id]>0)
        {
          return  <div>
                    <div className="cartitems-format">
                      <img className="cartitems-product-icon" src={e.image} alt="" />
                      <p cartitems-product-title>{e.name}</p>
                      <p>${e.new_price}</p>
                      <button className="cartitems-quatity">{cartItems[e.id]}</button>
                      <p>${e.new_price*cartItems[e.id]}</p>
                      <img onClick={()=>{removeFromCart(e.id)}} className="cartitems-remove-icon" src={cross_icon} alt="" />
                    </div>
                     <hr />
                  </div>;
        }
        return null;
      })}
      
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <Link to='/shipping'><button>PROCEED TO CHECKOUT</button></Link>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;