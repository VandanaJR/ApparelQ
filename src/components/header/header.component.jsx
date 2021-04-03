import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import  {ReactComponent as Logo} from './ApparelQ.svg';
import SignInandSignUp from '../../pages/sign-in-and-sign-up-page/signinandsignuppage';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/carticon.component'
import CartSideBar from '../../pages/cart-sidebar-page/cartsidebar.component'

import {connect} from 'react-redux'
import QuickViewPage from '../../pages/quick-view-page/quickviewpage.component';
 //Logo-color:#93C9B8
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            clickCheck:false,
            clickCheckforSignUp:false

        }
    }
    togglePopup=()=> {
        this.setState({clickCheck:false,clickCheckforSignUp:false})
        this.setState({
            clickCheck: !this.state.clickCheck
        });
    }
    signUpPopup=()=>{
        //console.log("fired sign up")
        this.setState({clickCheckforSignUp: !this.state.clickCheckforSignUp})
        //console.log(this.state)
        
    }
    
     render(){
        console.log(this.props)
        return(
            <div className='header'>
                <Link className= 'logo-container' to ='/'>
                    <Logo className='logo'></Logo>
                   
                </Link>
                <div className='options-container'>
                    {/* <Link className='option' to='/shop'>CONTACT</Link> */}
                   {
                       this.props.currentUser?
                       <button className='sign-in-btn option user-name' onClick= {()=>auth.signOut()}>{this.props.currentUser.displayName.charAt(0).toUpperCase()}</button>
                       :  <button className='sign-in-btn option' onClick={()=>{
                        this.togglePopup();
                        //console.log(this.props.currentUser)
                        }
                    } >SIGN-IN</button>
                   }
                    {
                        this.state.clickCheck ?
                        <SignInandSignUp closePopup={this.togglePopup} signUpPopup={this.signUpPopup} {...this.state}/>
                        :null
                        
                    }
                    <CartIcon></CartIcon>
                </div>
                {this.props.openCart ? <CartSideBar/> :  null  }
                
                {this.props.openQV ? <QuickViewPage/>:  null  }
            </div>
            
        )
     }
   
}

const mapStateToProps = state => ({
    openQV:state.rootReducer.quickViewClick.openQV,
    openCart : state.rootReducer.cartClicks.openCart,
    currentUser:state.rootReducer.user
})
export default connect(mapStateToProps)(Header);