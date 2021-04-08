import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { ReactComponent as ShoppingIcon } from './shopping-bag.svg'

import './carticon.styles.scss'

import {openCartToggle} from '../../state/ui-slice/cart.ui'

const CartIcon = ()=>{
    const dispatch = useDispatch()
    const totalQ = useSelector(state =>state.rootReducer.cart.totalQ)
    
    return(
        <div className="cart-icon" onClick={() => dispatch(openCartToggle())}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{totalQ}</span>
        </div>
    )
}


export default CartIcon