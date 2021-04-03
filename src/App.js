import React from 'react';
import {Switch , Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page/homepage';
import ShopPageForHats from './pages/shop-page-hats/shoppagehats';
import ShopPageForSneakers from './pages/shop-page-sneakers/shoppagesneakers';
import ShopPageForJackets from './pages/shop-page-jackets/shoppagejackets'
import ShopPageForMen from './pages/shop-page-men/shoppagemen'
import ShopPageForWomen from './pages/shop-page-women/shoppagewomen'
import Header from './components/header/header.component';
import {auth,createUserProfileDocument}  from './firebase/firebase.utils';

//STORE IMPORTS
import {setCurrentUser} from './state/user-slice/user'
import {connect} from 'react-redux'



class App extends React.Component {

  unsubscribeFromAuth = null;
  
  componentDidMount(){
    const {setCurrentUser} =this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user=>{
    //console.log("User CHange:",user)
      
      if(user){
        const userRef= await createUserProfileDocument(user)
        userRef.onSnapshot( snapShot => {
          //console.log("snapShot:",snapShot.data())
          setCurrentUser({
            id:snapShot.id ,
            ...snapShot.data()
          })
          
        })
      }
      else{
        setCurrentUser(user)
      }
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
    console.log("From store:",this.props.currentUser)
    return (
      <div>
        <Header currentUser={this.props.currentUser}/>
       
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop/hats' component={ShopPageForHats}/>
        <Route exact path='/shop/sneakers' component={ShopPageForSneakers}/>
        <Route exact path='/shop/jackets' component={ShopPageForJackets}/>
        <Route exact path='/shop/womens' component={ShopPageForWomen}/>
        <Route exact path='/shop/mens' component={ShopPageForMen}/>
        </Switch>
        
      </div>
    );
  }
  
}

const mapStateToProps = state => ({
  currentUser:state.rootReducer.user
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
