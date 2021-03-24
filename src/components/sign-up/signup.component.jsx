import React from 'react';
import './signup.styles.scss';
import FormInput from '../form-input/forminput.component';
import CustomButton from '../custom-button/custombutton.componet';
import {auth,createUserProfileDocument}  from '../../firebase/firebase.utils';


class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit = async (event)=>{
        event.preventDefault()
        const {displayName,email,password,confirmPassword}=this.state
        if(password !== confirmPassword){
            alert("Passwords don't match")
            return
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password,)
            console.log(user)
            await createUserProfileDocument(user,{displayName})
            this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''},()=>{
                this.props.closePopup()
            })
            
        }
        catch(error){
            console.error(error)
        }
       
    }
    handleChange= (event)=>{
        const {name,value}= event.target;
        this.setState({[name]:value})
    }

    render(){
        //console.log(this.props.currentUser)
        const {displayName,email,password,confirmPassword}=this.state
        return(
            
            <div className="popup">
                <div className="shop-div">
                <div className="shop-img">
                    <h5>Looks like you're new here</h5>
                    <p>Sign up with your email and get started</p>
                </div>
                </div>
                
                <div className="sign-in">
                    <form onSubmit={this.handleSubmit}> 
                        <FormInput type="text" name="displayName" label='Name' value={displayName}  handleChange={this.handleChange} required/>
                        <FormInput type="email" name="email" label='Email' value={email}  handleChange={this.handleChange} required/>
                        
                        <FormInput type="password" name="password" label='Password' value={password}  handleChange={this.handleChange} required/>
                        <FormInput type="password" name="confirmPassword" label='Confirm Password' value={confirmPassword}  handleChange={this.handleChange} required/>
                        <div className="btn-div">
                        <CustomButton type="submit">SIGN UP</CustomButton>
                        </div>
                       
                    </form>
                    <div className="sign-up-text">
                        <button className ="sign-up-text-btn" onClick={this.props.signUpPopup}>Existing user? <b><span style={{color:"#206e55"}}>Login</span></b> </button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default SignUp;
