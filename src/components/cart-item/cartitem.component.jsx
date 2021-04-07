import React from 'react'
import  './cartitem.styles.scss'

const CartItem = ({item:{imageUrl_1,name,quantity,price}}) =>{

    return(
        <div className="cart-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl_1})`}}></div>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
        </div>
    )
       
    
}

export default CartItem