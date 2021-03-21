import React from 'react';
import './signin.component.scss';
import FormInput from '../form-input/forminput.component';
import CustomButton from '../custom-button/custombutton.componet';

class SignIn extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit = (event)=>{
        event.preventDefault()
        this.setState({email:'',password:''})
    }
    handleChange= (event)=>{
        const {name,value}= event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className="popup">
                <div className="shop-div">
                <div className="shop-img">
                    <h5>Login</h5>
                    <p>Get access to your Orders and Wishlist</p>
                </div>
                </div>
                
                <div className="sign-in">
                    <form onSubmit={this.handleSubmit}>
                        <FormInput type="email" name="email" label='Email' value={this.state.email} required handleChange={this.handleChange}/>
                        
                        <FormInput type="password" name="password" label='Password' value={this.state.password} required handleChange={this.handleChange}/>
                        <div className="btn-div">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton type="submit">SIGN IN WITH GOOGLE</CustomButton>
                        </div>
                       
                    </form>
                    <div className="sign-up-text">
                        <button className ="sign-up-text-btn">New to <b><span style={{color:"#206e55"}}>ApparelQ</span></b> ? Create an account</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default SignIn;
