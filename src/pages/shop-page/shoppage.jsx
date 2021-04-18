import React,{useState} from 'react';
import './shoppage.scss';
import CollectionPreview from '../../components/collection-preview/collectionpreview.component'
import { Route } from 'react-router-dom';
import {useSelector} from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";




const ShopPage = ({match})=>{
    let status = useSelector(state => state.rootReducer.shopData.status)
    if(status==="success"){  
        return(
        <div className="shop-page" >
        <Route  path={`${match.path}:categoryId`} component={CollectionPreview}/> 
        </div>
    )}
    else if(status==="loading"){
        
        return(
        <div className="shop-page" >
            <div className="spinner">
            <ClipLoader  color={"#36D7B7"} loading={true}  size={50} />
            </div>
        
        </div>
        )}

        else if(status==="failed"){
        
            return(
            <div className="shop-page" >
                <div className="spinner">
                <h3>Something went wrong.</h3>
                </div>
            
            </div>
            )}
    
}

export default ShopPage
