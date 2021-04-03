import React from 'react'
import { useState } from "react";
import './cartdropdown.styles.scss'
import CustomButton from '../custom-button/custombutton.componet'
import {openCartToggle} from '../../state/ui-slice/cart.ui'
import { useDispatch } from 'react-redux'


const  CartDropdown= ()=>{
   
        const [isMounted, setIsMounted] = useState(false);
        const [showDiv, setShowDiv] = useState(false);
        //console.log(isMounted, setIsMounted,showDiv, setShowDiv)
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
                </div>
         
    
                <CustomButton >GO TO CHECKOUT</CustomButton>
            </div>
        )
    

}




  export default CartDropdown