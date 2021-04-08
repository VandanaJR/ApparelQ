import React,{useState} from 'react'
import  './checkoutitem.styles.scss'
import Quantity from '../quantity-component/quantity.component'
import  {ReactComponent as DeleteButton} from './trash-solid.svg';
const CheckOutItem = (props)=>{
    let [quantity,setCount] = useState(1)
    console.log(props)
    return(
        <div className="item">
            <div className="checkout-item-container">
           
           <div className="product-container">
               <div className="checkout-item-image" style={{backgroundImage: `url(${props.item.imageUrl_1})`}}/>
               <span className="description">{props.item.name}</span>
           </div>
           <div className="price-container">
                <span className="price">${props.item.price}</span>
           </div>
           <div className="quantity-container">
                <Quantity handleClick={setCount}></Quantity>
           </div>
           <div className="total-container">
                <span className="total">$36</span>
           </div>
        </div>
        <div className="delete">
               <DeleteButton className="delete-icon"></DeleteButton>
           </div>
        </div>
        
    )
}

export default CheckOutItem
