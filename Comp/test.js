import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableHighlight, Alert,TouchableWithoutFeedback ,TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Input,Avatar } from 'react-native-elements';
import { SocialIcon } from 'react-native-elements';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';







export default class GoogleLogin extends Component {

    constructor(props) {
        super(props);
    }
    loginWithGoogle() {
      let that = this;
      GoogleSignin.configure({
          iosClientId: '781554659331-chde550j1hkdr937bsvfiot4esrtm3om.apps.googleusercontent.com', // only for iOS
      })
          .then(() => {
              let thatIs = that;
              GoogleSignin.signIn()
                  .then((accessTokenData) => {
                      console.log(accessTokenData, 'signin++++++++++++');
                      AsyncStorage.setItem('user', accessTokenData)
                      const credential = firebase.auth.GoogleAuthProvider.credential(accessTokenData);
                      thatIs.props.authWithFBorGoogless(credential);
                      GoogleSignin.signOut()
                          .then(() => {
                              console.log('gfdaskhfdsagsdfajgkjads')
                          })
                          .catch(err => {
                              /*
                                something
                              */
                          })
                          .done()
                  })
                  .catch((err) => {
                      alert('Login fail with error: ' + error.message);
                      console.log('WRONG SIGNIN----------', err);
                  })
              // .done();
          });
  }

    render() {

        return (
          <View>
 <TouchableOpacity  onPress = {this.loginWithGoogle.bind(this)}   >
                                <SocialIcon
                            title='Countine with Google'
                            button
                            type='google'
                        />
                                
                                   
                                </TouchableOpacity>
          </View>
    
        )
    }
}