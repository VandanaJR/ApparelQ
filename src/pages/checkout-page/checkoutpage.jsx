import React from 'react'
import CheckOutItem from '../../components/checkout-item/checkoutitem.component'
import  './checkout.styles.scss'
import { useSelector} from 'react-redux'
import CustomButton from '../../components/custom-button/custombutton.componet'
import {cartTotal} from '../../state/cart-slice/cart'

const CheckOutPage = ()=>{
    const state = useSelector(state => state.rootReducer.cart)
    //console.log(state)
    const cartItems = useSelector(state => state.rootReducer.cart.cartItems) 
    //console.log(cartItems.length === 0)
    return(
        <div className="checkout-paynow-container">
            <div className="checkout-container">
            
            <div className="header-width">
                <div className="checkout-header">
                        <div className="product-container">
                            <span>PRODUCT</span>
                        </div>
                        <div className="price-container">
                        <span>PRICE</span>
                        </div>
                        <div className="quantity-container">
                        <span>QUANTITY</span>
                        </div>
                        <div className="total-container">
                        <span>TOTAL</span>
                        </div>
                </div>
            </div>
                
            <div className="checkout-items">
                {cartItems.length !==0?cartItems.map(cartItem=>(<CheckOutItem key={cartItem.id} item={cartItem}></CheckOutItem>)):<div className="empty"><span>Your Cart is empty.</span></div>} 
            </div>
        </div>
        <div className="pay-now">
            <span>Cart Total:${cartTotal(state)}</span>
            <CustomButton className="custom-button">PAY NOW</CustomButton>
        </div>
        </div>
    )
}

export default CheckOutPage