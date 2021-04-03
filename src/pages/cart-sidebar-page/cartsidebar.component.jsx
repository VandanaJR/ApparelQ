import React from 'react'
import './cartsiderbar.styles.scss'

import CartDropdown from '../../components/cart-dropdown/cartdropdown.components'

const CartSideBar = () =>{
    return(
    <div className="cart-sidebar" >
        <CartDropdown />
    </div>
    )

}

export default CartSideBar