import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import  {ReactComponent as Logo} from './ApparelQ.svg';
import SignInandSignUp from '../../pages/sign-in-and-sign-up-page/signinandsignuppage';
import {auth} from '../../firebase/firebase.utils';
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
        console.log("fired sign up")
        //this.togglePopup()
        this.setState({clickCheckforSignUp: !this.state.clickCheckforSignUp})
        //console.log(this.state)
        
    }
     //Logo-color:#93C9B8
     render(){
        // console.log(this.props)
        return(
            <div className='header'>
                <Link className= 'logo-container' to ='/'>
                    <Logo className='logo'></Logo>
                   
                </Link>
                <div className='options-container'>
                    <Link className='option' to='/shop'>SHOP</Link>
                    <Link className='option' to='/shop'>CONTACT</Link>
                   {
                       this.props.currentUser?
                       <button className='sign-in-btn option' onClick= {()=>auth.signOut()}>SIGN-OUT</button>
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
                </div>
            </div>
        )
     }
   
}
export default Header;