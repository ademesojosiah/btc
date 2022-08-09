import React from "react";
import "./CartCard.css";

const CartCard = ({img}) => {
	return <div className="cart_left_inner">
    <div className="inner_left">
      <img className="cart_left_img" src="https://cdn.shopify.com/s/files/1/2609/9556/products/IMG_20210405_231343_1_180x.jpg?v=1636040594" alt="s" /> 
      <h4>Heavy Duty Power Cable 15A (110V-1650W, 220V-3000W) - 6ft $19.99</h4>
    </div>

    <div className="cart_card_box_con">
      <div className="cart_card_box">
        <div className="cart_card_btn minus">
          <svg focusable="false" class="icon icon--minus " viewBox="0 0 10 2" role="presentation">
            <path d="M10 0v2H0V0z" fill="currentColor"></path>
          </svg>
        </div>
        
        <h3 className="card_cart_mid">3</h3>

        <div className="cart_card_btn">
          <svg focusable="false" class="icon icon--plus " viewBox="0 0 10 10" role="presentation">
            <path d="M6 4h4v2H6v4H4V6H0V4h4V0h2v4z" fill="currentColor" fill-rule="evenodd"></path>
          </svg>
        </div>
      </div>

      <p>Remove</p>
    </div>

    <div className="cart_card_right">
      <h4>${2323}</h4>
    </div>
  </div>;
};

export default CartCard;
