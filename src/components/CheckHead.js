import React from 'react'
import './CheckHead.css'

const CheckHead = () => {
  return (
    <div className='checkhead'>
      <header className='checkhead_head'>
        <img className='check_img' src="https://cdn.shopify.com/s/files/1/0548/1257/3883/files/1_360x.png?v=1642197150" alt="d" />
      </header>

      <aside className='summary'>
        <div className='sum_text'>
          <svg width="20" height="19" xmlns="http://www.w3.org/2000/svg" class="order-summary-toggle__icon">
            <path d="M17.178 13.088H5.453c-.454 0-.91-.364-.91-.818L3.727 1.818H0V0h4.544c.455 0 .91.364.91.818l.09 1.272h13.45c.274 0 .547.09.73.364.18.182.27.454.18.727l-1.817 9.18c-.09.455-.455.728-.91.728zM6.27 11.27h10.09l1.454-7.362H5.634l.637 7.362zm.092 7.715c1.004 0 1.818-.813 1.818-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817zm9.18 0c1.004 0 1.817-.813 1.817-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817z"></path>
          </svg>
          <h3>Order Summary Total</h3>
        </div>

        <h3>$564.90</h3>
      </aside>

      <div className='checklist'>
        <span>Cart</span>
        <span>Information</span>
        <span>Payment</span>
      </div>
    </div>
  )
}

export default CheckHead