import React from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/forminput.component';
import CustomButton from '../custom-button/custombutton.componet';
import { auth,signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit = async (event)=>{
        event.preventDefault()
        const{email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:'',password:''},()=>{
                
                this.props.closePopup()
            })
            
        }
        catch(error){
            alert(error)
        }
        
    }
    handleChange= (event)=>{
        const {name,value}= event.target;
        this.setState({[name]:value})
    }

    render(){
        //console.log(this.props)
        const googleSignIn = signInWithGoogle;
        
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
                        <FormInput type="email" name="email" label='Email' value={this.state.email}  handleChange={this.handleChange} required/>
                        
                        <FormInput type="password" name="password" label='Password' value={this.state.password}  handleChange={this.handleChange} required/>
                        <div className="btn-div">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton handleClick = {()=>{
                            googleSignIn()
                            //console.log("togp",this.props)
                            this.props.closePopup()
                        }}  isGoogleSignIn >SIGN IN WITH GOOGLE</CustomButton>
                        </div>
                       
                    </form>
                    <div className="sign-up-text">
                        <button className ="sign-up-text-btn" onClick={this.props.signUpPopup}>New to <b><span style={{color:"#206e55"}}>ApparelQ</span></b> ? Create an account</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default SignIn;
