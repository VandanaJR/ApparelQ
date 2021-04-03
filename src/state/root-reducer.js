import {combineReducers} from 'redux'
import userReducer from './user-slice/user'
import cartClicksReducer from './ui-slice/cart.ui'
import quickViewClickReducer from './ui-slice/quickView.ui'
import shopDataReducer from './shopData'


 export default combineReducers({
    user:userReducer,
    cartClicks: cartClicksReducer,
    quickViewClick: quickViewClickReducer, 
    shopData:shopDataReducer
    
})


