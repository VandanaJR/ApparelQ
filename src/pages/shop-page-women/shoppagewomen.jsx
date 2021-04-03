import React from 'react';
import './shoppage.scss';
import CollectionPreview from '../../components/collection-preview/collectionpreview.component'
import { useSelector } from 'react-redux'


const ShopPageForWomen= ()=>{
    const shopData = useSelector(state => state.rootReducer.shopData)
    //console.log(shopData[0])
    const { title, items} = shopData[3]

    
    return(
        <div className="shop-page">
           <CollectionPreview items= {items} title= {title}/>
        </div>
    )
    
}

export default ShopPageForWomen