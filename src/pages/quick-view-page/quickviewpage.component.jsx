import React,{useState} from 'react'
import QuickView from '../../components/quick-view/quickview.component'
import './quickviewpage.styles.scss'

import {openQVToggle} from '../../state/ui-slice/quickView.ui'
import {inCartfromQVPage,inCartfromQV} from '../../state/cart-slice/cart'

import { useSelector,useDispatch } from 'react-redux'

const QuickViewPage =() =>{
    const dispatch = useDispatch();
    const qvDetails = useSelector(state => state.rootReducer.quickViewClick.itemDetails)
    console.log(qvDetails.id)
    dispatch(inCartfromQVPage(qvDetails))
    dispatch(inCartfromQV(false))
    return(
        <div className="quick-view-page">
             <div className="container">
             <QuickView ></QuickView>
                <div className="close-container">
                    <button className="cls-button"  type="button" onClick={()=>dispatch(openQVToggle())} >X</button>
                </div>
             </div>
           
        </div>
        
    )
}
export default QuickViewPage