import React from 'react'
import {Switch , Route } from 'react-router-dom'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import HomePage from './pages/home-page/homepage'
import ShopPage from './pages/shop-page/shoppage'
import CheckOutPage from './pages/checkout-page/checkoutpage'
import Header from './components/header/header.component'
import {auth,createUserProfileDocument}  from './firebase/firebase.utils'


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
          setCurrentUser({
            id:snapShot.id ,
            ...snapShot.data()
          })
          
        })
      }
      else{
        setCurrentUser(user)
      }
      //Firestore DB uploader
      //addCollectionandDocs("collections",collectionsToAdd) // import from firestore.utils
      
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
    return (
      <div>
        <Header currentUser={this.props.currentUser}/>
       
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/checkout' component={CheckOutPage}/>
        <Route path='/' component={ShopPage}/>

        </Switch>
        
      </div>
    );
  }
  
}

const mapStateToProps = state => ({
  currentUser:state.rootReducer.user,
  collectionsToAdd: state.rootReducer.shopData.collections
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
