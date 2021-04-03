import React from 'react';
import CustomButton from '../custom-button/custombutton.componet';
import './collectionitem.styles.scss';
import { useDispatch } from 'react-redux'
import {openQVToggle} from '../../state/ui-slice/quickView.ui'

const CollectionItem = (props)=>{
    const dispatch = useDispatch();
    //console.log("Citem",props)
    return(
        <div className= "collection-item">
            <div className="image-container"> <div
            className='image'
            style={{
                backgroundImage: `url(${props.item.imageUrl_1})`
            }}/></div>
            <div className="footer-container" >
            <div className ="collection-footer">
                <span className='name'>{props.item.name}</span>
                <span className='price'>{`$${props.item.price}`}</span>
            </div>
            </div>
           
            <CustomButton  className= "custom-button"  inverted handleClick={()=>dispatch(openQVToggle())} >QUICK VIEW</CustomButton>
        </div>
    )
}



  export default CollectionItem