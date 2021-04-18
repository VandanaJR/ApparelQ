import React,{useState,useEffect} from 'react'
import  './checkoutitem.styles.scss'
import Quantity from '../quantity-component/quantity.component'
import  {ReactComponent as DeleteButton} from './trash-solid.svg';
import {removeItemFromCart,updateCartQuantity} from '../../state/cart-slice/cart'
import {useDispatch } from 'react-redux'
const CheckOutItem = (props)=>{
    const dispatch = useDispatch()
    const {id}=props.item
    let [quantity,setCount] = useState(props.item.quantity)
    useEffect(() => {dispatch(updateCartQuantity({quantity,id}))})
    console.log(props.item.sizeValue)
    return(
        <div className="item">
            <div className="checkout-item-container">
           
           <div className="product-container">
                <div className="checkout-item-image" style={{backgroundImage: `url(${props.item.imageUrl_1})`}}/>
                    <div className="item-details">
                        <span className="description">{props.item.name}</span>
                        <span className="size">{props.item.sizeValue}</span>
                        <span className="cost">${props.item.price}</span>
                    </div>
                </div>
           <div className="price-container">
                <span className="price">${props.item.price}</span>
           </div>
           <div className="quantity-container">
                <Quantity quantity={quantity} handleClick={setCount}></Quantity>
           </div>
           <div className="total-container">
                <span className="total">${props.item.quantity*props.item.price}</span>
           </div>
           <div className="quantity-total-delete-mob">
                    <div className="quantity-container">
                            <Quantity quantity={quantity} handleClick={setCount}></Quantity>
                    </div>
                    <div className="total-container">
                            <span className="total">${props.item.quantity*props.item.price}</span>
                    </div>
                    <div className="delete-mob">
                        <DeleteButton className="delete-icon" onClick={()=>dispatch(removeItemFromCart(props.item))}></DeleteButton>
                    </div>
                    </div>
                   
        </div>
        <div className="delete">
               <DeleteButton className="delete-icon" onClick={()=>dispatch(removeItemFromCart(props.item))}></DeleteButton>
           </div>
        </div>
        
    )
}

export default CheckOutItem
