import React from 'react';
import './custombutton.styles.scss';

const CustomButton = ({children,...otherProps})=>{
    return(
        <button className="custom-button" >
            {children}
        </button>
    )
}

export default CustomButton;