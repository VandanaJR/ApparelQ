import React from 'react';
import './signinandsignuppage.scss';
import SignIn from '../../components/sign-in/signin.component';
import SignUp from '../../components/sign-up/signup.component';


const SignInandSignUp = (props)=> {
    //console.log(props)
    if(props.clickCheck===true && props.clickCheckforSignUp===false){
        console.log("Sign in:",props)
        return(
            <div className="signin-signup">
                <div className="container">
                    <SignIn {...props}/> 
                    <div className="close">
                        <button className="close-button"  type="button" onClick={props.closePopup} >X</button>
                    </div>
                </div>
              
            </div>
        )
    }
    else if( props.clickCheck===true &&  props.clickCheckforSignUp===true ){
        console.log("Sign up:")
        return(
            <div className="signin-signup">
                <div className="container">
                    <SignUp {...props}/> 
                    <div className="close">
                        <button className="close-button"  type="button" onClick={props.closePopup} >X</button>
                    </div>
                </div>
              
            </div>
        ) 
    }
   
}


export default SignInandSignUp;