import React from 'react';
import CustomButton from '../custom-button/custombutton.componet';
import './quickview.styles.scss'



const QuickView = () =>{

    return(
        <div className="quick-view-container">
            <div className="quick-view">
                <div className="side-images">
                    <div>Image</div>
                    <div>Image</div>
                    <div>Image</div>
                </div>
                <div className="main-image">
                    <div>Carosel</div>
                </div>
                <div className="info">
                    <div className="item-cost">
                    <h4>Item Name</h4>
                    <p>$Cost</p>
                    </div>
                    <div className="size">
                    <p>Size</p>
                    </div>
                    <div className="numberofitems-cart">
                    <p>No of Items</p>
                    <CustomButton>Add to Cart</CustomButton>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default QuickView