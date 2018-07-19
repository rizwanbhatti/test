import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import Facebook from 'react-native-vector-icons'
import { SocialIcon } from 'react-native-elements';
import GoogleLogin from './test';
import { Actions } from 'react-native-router-flux';



export default class LoggedOut extends Component {
    changeScreen() {
        console.log('done')
        Actions.firstscreen()
    }


    render() {
        return (
            <ScrollView>
                <View style={styles.wrapper} >

                    <View style={styles.welcomeWrapper} >
                        <Image
                            source={require('../images/zlogo.png')}
                            style={styles.logo}
                        />
                        <Text style={styles.welcometext}>
                            WelCome To App
                         </Text>
                        <View style={styles.button}>
                            <View   >
                                <TouchableOpacity >

                                    <SocialIcon
                                        title='Countine with Facebook'
                                        button
                                        type='facebook'
                                    />
                                </TouchableOpacity>
                            </View>

                            <View>
                            <GoogleLogin/>
                            </View>

                            <View>
                                <TouchableOpacity >
                                <SocialIcon
                            title='Countine with Twitter'
                            button
                            type='twitter'
                        />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View >
                            <TouchableOpacity onPress={this.changeScreen.bind(this)} >
                                <Text style={{
                                    marginVertical: 15,
                                    fontSize: 18,
                                    marginTop: 60,
                                    color: '#b80000',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    textDecorationLine: 'underline',
                                }}>Create an Account</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 60, }}>
                            <Text style={{ marginLeft: 20, textAlign: 'center', fontSize: 16, marginRight: 25 }}>
                                By continuing you agree to our
						 </Text>
                            <Text style={{ textDecorationLine: 'underline', textAlign: 'center', fontSize: 16, marginBottom: 5 }}>
                                Terms and Conditions & Privacy Policy
						 </Text>
                        </View>

                      
                    </View>



                </View>
            </ScrollView>
        )
    }
}



const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',

    },
    welcomeWrapper: {
        flex: 1,
        display: 'flex',
        marginTop: 30,
        padding: 20,
    },



    logo: {
        width: 50,
        height: 50,
        marginTop: 30,
        marginBottom: 40,

    },
    welcometext: {
        fontSize: 30,
        color: '#DB4437',
        fontWeight: '300',
        marginBottom: 40,

    },

    button: {

    },
    buttonText: {
        fontSize: 20,
        width: '100%',
        textAlign: 'center',
        color: '#fff'




    },
    facebookButton: {
        display: 'flex',
        padding: 15,
        borderRadius: 40,
        borderColor: '#3B5998',
        borderWidth: 1,
        backgroundColor: '#3B5998',



    },
    googleButton: {
        display: 'flex',
        padding: 15,
        borderRadius: 40,
        borderColor: '#DB4437',
        borderWidth: 1,
        backgroundColor: '#DB4437',
        marginTop: 5,

    },
    twitterbutton: {
        display: 'flex',
        padding: 15,
        borderRadius: 40,
        borderColor: '#1DA1F2',
        borderWidth: 1,
        backgroundColor: '#1DA1F2',
        marginTop: 5,

    },



})
