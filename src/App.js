import React from 'react';
import {Switch , Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page/homepage';
import ShopPage from './pages/shop-page/shoppage';
import Header from './components/header/header.component';
//import SignInandSignUp from './pages/sign-in-and-sign-up-page/signinandsignuppage';

function App() {
  return (
    <div>
      {/* <SignInandSignUp/> */}
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
