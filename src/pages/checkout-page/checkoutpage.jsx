import React from 'react'
import CheckOutItem from '../../components/checkout-item/checkoutitem.component'
import  './checkout.styles.scss'
import { useSelector} from 'react-redux'
import CustomButton from '../../components/custom-button/custombutton.componet'
import {cartTotal} from '../../state/cart-slice/cart'
import StripeCheckoutButton from '../../components/stripe-button/stripebutton.component'

const CheckOutPage = ()=>{
    const state = useSelector(state => state.rootReducer.cart)
    //console.log(state)
    const cartItems = useSelector(state => state.rootReducer.cart.cartItems) 
    //console.log(cartItems.length === 0)
    let total =cartTotal(state)
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
            <span>Cart Total:${total}</span>
            <CustomButton className="custom-button"><StripeCheckoutButton className="stripe" price={total} ></StripeCheckoutButton><span className="pay">PAY NOW</span></CustomButton>
        </div>
        <div className="test-card"><span>Please use the following test card for payments:<br/>
        Card No: 4242 4242 4242 4242 - Exp: 01/22- CVV: 123<br/>
        The email should be in valid format and the billing address can be any value.

        </span></div>
        </div>
    )
}

export default CheckOutPage