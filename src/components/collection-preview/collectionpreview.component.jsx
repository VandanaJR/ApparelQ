import React from 'react';
import './collectionpreview.styles.scss';
import CollectionItem from '../collection-item/collectionitem.component'


const CollectionPreview = (props)=>{
    return(
        <div className='collection-preview'>
                <h1 className='title'>{props.title.toUpperCase()}</h1>
                <div className="preview">
                { props.items.map( item => {
                        return(
                            <CollectionItem key={item.id} item={item} />
                            )
                    } )}
                </div>
                
        </div>
    )
}
export default CollectionPreview;