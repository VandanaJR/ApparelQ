import React from 'react';
import './shoppage.scss';
import CollectionPreview from '../../components/collection-preview/collectionpreview.component'
import { Route } from 'react-router-dom';



const ShopPage = ({match})=>{
   return(
        <div className="shop-page" >
        <Route  path={`${match.path}:categoryId`} component={CollectionPreview}/> 
        </div>
    )
    
}

export default ShopPage
