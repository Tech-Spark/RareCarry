import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import HeaderSect from './components/header';
import BannerSect from './components/banner';
import HomeScreen from './screens/homeScreen';
import AccessoresScreen from './screens/accessoresScreen';
import FooterComp from './components/footer';
import ProductDtScreen from './screens/productDtScreen';
import CartScreen from './screens/cartScreen';
import RegisterScreen from './screens/registerScreen';
import SigninScreen from './screens/signinScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import KidsScreen from './screens/kidsScreen';
import WomenScreen from './screens/womenScreen';
import ManScreen from './screens/manScreen';
import SaleScreen from './screens/saleScreen';
import ToyesScreen from './screens/toyesScreen';
import GadgetsScreen from './screens/gadgetsScreen';
import CosmeticScreen from './screens/cosmeticScreen';
import ShippingScreen from './screens/shippingScreen';
import PaymentScreen from './screens/paymentScreen';
import OrderDtScreen from './screens/orderDtScreen';
import PlaceorderScreen from './screens/PlaceorderScreen';
import NewsScreen from './screens/newsScreen';
import OrderHistoryScreen from './screens/orderHistoryScreen';
import ProfileScreen from './screens/profileScreen';
import PrivateRoute from './components/privateRoute';
import AdminRoute from './components/AdminRoute';
import ProductCreationScreen from './screens/productCreationScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import EmailActivateScreen from './screens/emailActivateScreen';
import SearchRespScreen from './screens/SearchRespScreen';
import HelpContactScreen from './screens/HelpContactScreen';
import DeliveryReturnScreen from './screens/DeliveryReturnScreen';
import AllAboutScreen from './screens/AllAboutScreen';
import SignoutScreen from './screens/SignoutScreen';
import EverydayScreen from './screens/EverydayScreen';

function App() {
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <div className='header'>
          <HeaderSect/>
        </div>
        <div className='Main'>
          <Route path='/news' component={NewsScreen}/>
          <Route path='/accessories' component={AccessoresScreen}/>
          <Route path='/cosmetics' component={CosmeticScreen}/>
          <Route path='/everyday' component={EverydayScreen}/>
          <Route path='/gadgets' component={GadgetsScreen}/>
          <Route path='/toyes' component={ToyesScreen}/>
          <Route path='/sales' component={SaleScreen}/>
          <Route path='/man' component={ManScreen}/>
          <Route path='/signout' component={SignoutScreen}/>
          <Route path='/all-about' component={AllAboutScreen}/>
          <Route path='/delivery-return' component={DeliveryReturnScreen}/>
          <Route path='/help-contact' component={HelpContactScreen}/>
          <Route path='/women' component={WomenScreen}/>
          <Route path='/kids' component={KidsScreen}/>
          <Route path='/auth/activate/:token' component={EmailActivateScreen}/>
          <Route path='/reset-password/:token' component={ResetPasswordScreen}/>
          <Route path='/signin' component={SigninScreen}/>
          <Route path='/search-back' component={SearchRespScreen}/>
          {/* <Route path='/verify-email' component={VerifyMsgScreen}/> */}
          <Route path='/forgot' component={ForgotPasswordScreen}/>
          <Route path='/reset/:id' component={ResetPasswordScreen}/>
          <Route path='/register' component={RegisterScreen}/>
          <Route path='/shipping' component={ShippingScreen}/>
          <Route path='/payment' component={PaymentScreen}/>
          <Route path='/placeorder' component={PlaceorderScreen}/>
          <Route path='/cart/:id?' component={CartScreen}/>
          <Route path='/product/:id' component={ProductDtScreen}/>
          <Route path='/order/:id' component={OrderDtScreen}/>
          <Route path='/orderhistory' component={OrderHistoryScreen}/>
          <PrivateRoute path='/profile' component={ProfileScreen}/>
          <AdminRoute path='/products' component={ProductCreationScreen}/>
          <Route path='/' exact={true} component={BannerSect}/>
          <Route path='/' exact={true} component={HomeScreen}/>
        </div>
        <div className='footer'>
          <FooterComp/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
