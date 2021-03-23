import React from 'react';
import './custombutton.styles.scss';

const CustomButton = ({children,...otherProps})=>{
    return(
        <button className={`${otherProps.isGoogleSignIn?'google-sign-in':''} custom-button`} onClick= {otherProps.handleClick}>
            {children}
        </button>
    )
}

export default CustomButton;