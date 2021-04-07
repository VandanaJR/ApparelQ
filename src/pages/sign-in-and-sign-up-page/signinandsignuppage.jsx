import React from 'react';
import './signinandsignuppage.scss';
import SignIn from '../../components/sign-in/signin.component';
import SignUp from '../../components/sign-up/signup.component';
import {useDispatch, useSelector} from 'react-redux'
import {signInToggle,signUpToggle} from '../../state/ui-slice/signIn-Up.ui'
import useDisableBodyScroll from '../../components/body-scroll/bodyscroll.component'

const SignInandSignUp = ()=> {

    const dispatch = useDispatch()
    const signIn = useSelector(state =>state.rootReducer.signInUpPopup.signIn) 
    const signUp = useSelector(state =>state.rootReducer.signInUpPopup.signUp) 
    const signInUp = signIn || signUp
    useDisableBodyScroll(signInUp)

    if(signIn===true && signUp===false){
        return(
            <div className="signin-signup">
                <div className="container">
                    <SignIn closePopup={()=>dispatch(signInToggle())} signUpPopup={()=>dispatch(signUpToggle())} /> 
                    <div className="close">
                        <button className="close-button"  type="button" 
                        onClick={()=>dispatch(signInToggle())} 
                        >X</button>
                    </div>
                </div>
              
            </div>
        )
    }
    else if( signIn===true &&  signUp===true ){
        return(
            <div className="signin-signup">
                <div className="container">
                    <SignUp closePopup={()=>dispatch(signInToggle())} signUpPopup={()=>dispatch(signUpToggle())} /> 
                    <div className="close">
                        <button className="close-button"  type="button" 
                       onClick={()=>dispatch(signInToggle())} 
                        >X</button>
                    </div>
                </div>
              
            </div>
        ) 
    }
   
}


export default SignInandSignUp;