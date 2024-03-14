import React from "react";
import Header from './component/TopPanel'

const Shop = () => {

return(
  <div className="background">
    <Header/>
      <div className='Main'>
          <div className='Shop-Art'>ART</div>
            <div className='Shop-Right'>
              <div className='Shop-Text'>
                <span>Text</span>
            </div>
            <div className='Shop-Description'>
              Description
            </div>
              <div className='Shop-Buy'>
              <div className='background-price-Shop'>
                  <p className='price'>Price</p>
                </div>
               <div className='background-Fa-Shop-Shop'>
                    <div className='Fa-Shop-Shop'> 
                      <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                </div>
              </div>
          </div>
      </div>
  </div>
)
}
export default Shop;