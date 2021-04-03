import React from 'react'
import {useDispatch} from 'react-redux'
import { ReactComponent as ShoppingIcon } from './shopping-bag.svg'

import './carticon.styles.scss'

import {openCartToggle} from '../../state/ui-slice/cart.ui'

const CartIcon = ()=>{
    const dispatch = useDispatch()
    return(
        <div className="cart-icon" onClick={() => dispatch(openCartToggle())}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">2</span>
        </div>
    )
}


export default CartIcon