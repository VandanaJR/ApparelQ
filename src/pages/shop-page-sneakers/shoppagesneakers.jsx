import React from 'react';
import './shoppage.scss';
import CollectionPreview from '../../components/collection-preview/collectionpreview.component'
import { useSelector } from 'react-redux'

const ShopPageForSneakers= ()=>{
    const shopData = useSelector(state => state.rootReducer.shopData)
    console.log(shopData[1])
    const { title,items} = shopData[1]

    
    return(
        <div className="shop-page">
           <CollectionPreview items= {items} title= {title}/>
        </div>
    )
    
}
export default ShopPageForSneakers