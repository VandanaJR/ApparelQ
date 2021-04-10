import React from 'react';
import './collectionpreview.styles.scss';
import CollectionItem from '../collection-item/collectionitem.component'
import {useSelector} from 'react-redux'
import  {selectCategory} from '../../state/shopData'

const CollectionPreview = ({match})=>{
    const state = useSelector(state => state.rootReducer.shopData)
    const categoryUrlParam = match.params.categoryId
    const category= selectCategory(categoryUrlParam)(state)
    console.log(category)
    return(
        <div className='collection-preview'>
            <h1 className="title">{category.title.toUpperCase()}</h1>
            <div className="preview">
            { category.items.map(item=> <CollectionItem key={item.id} item={item}></CollectionItem>)}
            </div>
           
        </div>
    )
}
export default CollectionPreview;