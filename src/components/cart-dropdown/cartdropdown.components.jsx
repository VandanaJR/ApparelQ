import React from 'react'
import { useState } from "react";
import './cartdropdown.styles.scss'
import CustomButton from '../custom-button/custombutton.componet'
import {openCartToggle} from '../../state/ui-slice/cart.ui'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../cart-item/cartitem.component';
import useDisableBodyScroll from '../body-scroll/bodyscroll.component'
import { withRouter } from 'react-router-dom'

const  CartDropdown= (history)=>{
       
        const [isMounted, setIsMounted] = useState(false);
        const [showDiv, setShowDiv] = useState(false);
        //console.log(isMounted, setIsMounted,showDiv, setShowDiv)
        const cartItems = useSelector(state => state.rootReducer.cart.cartItems)
        const openCart = useSelector(state => state.rootReducer.cartClicks.openCart)
        useDisableBodyScroll(openCart)
        //console.log(history)
        const mountedStyle = {
            animation: "slide-in 250ms ease-in"
          };
          const unmountedStyle = {
            animation: "slide-out 270ms ease-out",
            
          };
       
    
        const dispatch = useDispatch()
        
        return(
       
            <div  className="cart-dropdown" 
            style={isMounted ? unmountedStyle  : mountedStyle}
            onAnimationEnd={() => {
              if (!isMounted) setShowDiv(false);
            }}  >
                <div className="title-close-option">
                    <h1>YOUR CART</h1>
                    <span onClick={()=>{
                        setIsMounted(!isMounted);
                        
                        if (!showDiv) 
                        setShowDiv(true)
                        setTimeout(()=>dispatch(openCartToggle()),270)
                        }}>X</span>
                </div>
                <div className="cart-items">
                 { cartItems.length?
                 (cartItems.map(cartItem=>(<CartItem key={cartItem.id} item={cartItem}></CartItem>))):
                 (<span className="empty-cart" >Your cart is empty.</span>)}
                  
                </div>
         
    
                <CustomButton history={history} routeButton >GO TO CHECKOUT</CustomButton>
            </div>
        )
    

}




  export default withRouter(CartDropdown)