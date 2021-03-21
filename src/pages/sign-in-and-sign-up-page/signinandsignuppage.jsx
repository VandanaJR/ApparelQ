import React from 'react';
import './signinandsignuppage.scss';
import SignIn from '../../components/sign-in/signin.component';



const SignInandSignUp = (props)=> {
    return(
        <div className="signin-signup">
            <div className="container">
                <SignIn/> 
                <div className="close">
                    <button className="close-button" onClick={props.closePopup}>X</button>
                </div>
            </div>
          
        </div>
    )
}


export default SignInandSignUp;