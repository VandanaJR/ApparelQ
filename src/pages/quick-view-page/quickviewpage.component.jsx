import React from 'react'
import QuickView from '../../components/quick-view/quickview.component'
import './quickviewpage.styles.scss'
import { useDispatch } from 'react-redux'
import {openQVToggle} from '../../state/ui-slice/quickView.ui'


const QuickViewPage =() =>{
    const dispatch = useDispatch();

    return(
        <div className="quick-view-page">
             <div className="container">
             <QuickView></QuickView>
                <div className="close-container">
                    <button className="cls-button"  type="button" onClick={()=>dispatch(openQVToggle())}>X</button>
                </div>
             </div>
           
        </div>
        
    )
}
export default QuickViewPage