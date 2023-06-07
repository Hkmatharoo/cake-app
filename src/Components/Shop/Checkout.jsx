import React, { useState } from 'react'
import DeliveryForm from './DeliveryForm';
import OrderSummaryComponent from '../Cart/OrderSummaryComponent';
import PickupForm from './PickupForm';

const Checkout = () => {
  const[pickup, setPickup] = useState(false);
  return (
    <>
      <div class="CheckoutMain">
        <div class="CheckoutHeader">
          <article class="CartOption-sc-f0c42edb-9 lmidHi">
            <span class="CheckOutHead">Checkout</span>
            <div style={{position: "relative"}}>
              <div font-size="14" class="SwitchContainer">
                <div type="left" class="SwitchLabel" onClick={()=>setPickup(false)}>Delivery</div>
                <div type="right" class="SwitchLabel2" onClick={()=>setPickup(true)}>Pick Up</div>
                {/* <div class="SwitchToggle">Delivery</div> */}
              </div>
            </div>
          </article>
        </div>
        
      </div>
      <div>
        <span>
        {!pickup?<DeliveryForm/>:<><PickupForm /></>}
        </span>
        <span>
          <OrderSummaryComponent/>
        </span>
      </div>

    </>
  )
}
export default Checkout