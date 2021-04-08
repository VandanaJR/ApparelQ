import React from 'react';
import './custombutton.styles.scss';
import { withRouter } from 'react-router-dom'
import {openCartToggle} from '../../state/ui-slice/cart.ui'
import { useDispatch, useSelector } from 'react-redux'
const CustomButton = ({children,...otherProps})=>{
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.rootReducer.cart.cartItems)
    const onclick=()=>{
        if(cartItems.length) {
            otherProps.history.push('/checkout')
            dispatch(openCartToggle())
        }
        return
    }
    return(
        otherProps.routeButton?
        <button className={` ${otherProps.inverted?'inverted':''} ${otherProps.isGoogleSignIn?'google-sign-in':''} custom-button`} 
        onClick= {onclick}>
        {children}
        </button>:
        <button className={` ${otherProps.inverted?'inverted':''} ${otherProps.isGoogleSignIn?'google-sign-in':''} custom-button`} 
        onClick= {otherProps.handleClick}>
        {children}
        </button>
    )
}

export default withRouter(CustomButton);