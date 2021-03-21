import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import  {ReactComponent as Logo} from './ApparelQ.svg';
import SignInandSignUp from '../../pages/sign-in-and-sign-up-page/signinandsignuppage';

class Header extends React.Component{
    constructor(){
        super()
        this.state={
            clickCheck:false
        }
    }
    togglePopup=()=> {
        this.setState({
            clickCheck: !this.state.clickCheck
        });
    }
     //Logo-color:#93C9B8
     render(){
        return(
            <div className='header'>
                <Link className= 'logo-container' to ='/'>
                    <Logo className='logo'></Logo>
                   
                </Link>
                <div className='options-container'>
                    <Link className='option' to='/shop'>SHOP</Link>
                    <button className='sign-in-btn option' onClick={this.togglePopup} >SIGN-IN</button>
                    {
                        this.state.clickCheck ?
                        <SignInandSignUp closePopup={this.togglePopup}/>
                        :null
                    }
                    <Link className='option' to='/shop'>CONTACT</Link>
                </div>
            </div>
        )
     }
   
}
export default Header;