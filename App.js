/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import {DrawerNavigator,DrawerItems} from 'react-navigation';

import React, { Component } from 'react';
 import Router from './Comp/Router';
import CameraComp from './Comp/Camera';
import LoggedOut from './Comp/logged';
import Test from './Comp/test';

  

  

  export default class App extends Component {

    render() {
      return (
//<LoggedOut/>
       // <CameraComp/>
         <Router />
       // <Test/>
      )
    }
  }





