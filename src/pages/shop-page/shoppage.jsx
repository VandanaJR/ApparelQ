import React from 'react';
import './shoppage.scss';
import SHOP_DATA from './shopdata';
import CollectionPreview from '../../components/collection-preview/collectionpreview.component'

class ShopPage extends React.Component{
    constructor(){
        super()
        this.state={
            collections: SHOP_DATA
        }
    }
    render(){return(
        <div className="shop-page">
          { this.state.collections.map(({id,...otherProps})=>{
              return(
                  <CollectionPreview key={id} {...otherProps}/>
              )
           })}
        </div>
    )}
    
}
export default ShopPage