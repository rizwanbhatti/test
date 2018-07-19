import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';

import {Actions} from 'react-native-router-flux';



export default class noti extends Component {

    changeScreen(){
        console.log('done')
        Actions.notification()
    }
    render(){
    return(<ScrollView>
        <View>
            <View>
                <Image source={require('../images/dinner-1246287__340.jpg')} style={{ height: 250, width: '100%' }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>


                 <TouchableWithoutFeedback onPress={this.changeScreen.bind(this)}>

                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 5 }}>Food Break</Text>
                        <Text style={{ color: '#8492A6', fontSize: 15, }}>notifications</Text>
                    </View>
                
                    </TouchableWithoutFeedback>
                
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
                    <Text style={{
                        color: 'white', marginTop: 10, marginLeft: 120, fontSize: 20, fontWeight: 'bold',
                        backgroundColor: '#FFC107', padding: 10, paddingHorizontal: 20, borderRadius: 10, marginRight: 10
                    }}>3.4</Text>
                </View>

            </View>
            </View>
            </ScrollView>
            )
    }
}