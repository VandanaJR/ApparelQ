import React from 'react';
import {Switch , Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page/homepage';
import ShopPage from './pages/shop-page/shoppage';
import Header from './components/header/header.component';
import {auth,createUserProfileDocument}  from './firebase/firebase.utils';
//import {createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user=>{
      if(user){
        const userRef= await createUserProfileDocument(user)
        userRef.onSnapshot( snapShot => {
          this.setState({
            currentUser:{
              id:snapShot.id ,
              ...snapShot.data()
            }
            
          },()=>{console.log(this.state)})
        })
      }
      else{
        this.setState({currentUser:user})
      }
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} {...this.state}/>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        </Switch>
        
      </div>
    );
  }
  
}

export default App;
