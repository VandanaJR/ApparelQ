import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import  {ReactComponent as Logo} from './ApparelQ.svg';
import SignInandSignUp from '../../pages/sign-in-and-sign-up-page/signinandsignuppage';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/carticon.component'
import CartSideBar from '../../pages/cart-sidebar-page/cartsidebar.component'
import {signInToggle} from '../../state/ui-slice/signIn-Up.ui'
import useDisableBodyScroll from '../body-scroll/bodyscroll.component'


import {useDispatch, useSelector} from 'react-redux'
import QuickViewPage from '../../pages/quick-view-page/quickviewpage.component';
 //Logo-color:#93C9B8
const Header =()=>{
        const dispatch = useDispatch()
        const openQV = useSelector(state =>state.rootReducer.quickViewClick.openQV)
        const openCart = useSelector(state =>state.rootReducer.cartClicks.openCart)
        const currentUser = useSelector(state =>state.rootReducer.user)
        const signIn = useSelector(state =>state.rootReducer.signInUpPopup.signIn) 
        useDisableBodyScroll(signIn || openCart || openQV)
        //const signUp = useSelector(state =>state.rootReducer.signInUpPopup.signUp) 
        // console.log("signIn:",signIn)
        // console.log("signUp:",signUp)
       

        return(
            <div className='header'>
                <Link className= 'logo-container' to ='/'>
                    <Logo className='logo'></Logo>
                   
                </Link>
                <div className='options-container'>
                    {/* <Link className='option' to='/shop'>CONTACT</Link> */}
                   {
                       currentUser?
                       <button className='sign-in-btn option user-name' onClick= {()=>auth.signOut()}>{currentUser.displayName.charAt(0).toUpperCase()}</button>
                       :  <button className='sign-in-btn option' onClick={()=>dispatch(signInToggle())}>SIGN-IN</button>
                   }
                    {
                        signIn ?
                        <SignInandSignUp />
                        :null
                        
                    }
                    <CartIcon></CartIcon>
                </div>
                {openCart ? <CartSideBar/> :  null  }
                
                {openQV ? <QuickViewPage/>:  null  }
            </div>
            
        )
    
}


export default Header;




