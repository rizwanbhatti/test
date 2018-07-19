import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableWithoutFeedback, StatusBar,TouchableHighlight} from 'react-native';
import CameraComp from './Camera';
import {Actions} from 'react-native-router-flux';
import { Button } from 'native-base';



export default class bookmark extends Component {
    constructor(props){
        super(props);    
    }
    state={
        cameraOpen:false }


    changeScreen(){
        console.log('done')
        Actions.book()
    }
    render(){
        if(!this.state.cameraOpen){

            return(<ScrollView>
        <View>
        <StatusBar
     backgroundColor="blue"
     barStyle="light-content"
     />
            <View>
                <Image source={require('../images/dinner-1246287__340.jpg')} style={{ height: 250, width: '100%' }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>


                 <TouchableHighlight onPress={this.changeScreen.bind(this)}>

                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 5 }}>Food Break</Text>
                        <Text style={{ color: '#8492A6', fontSize: 15, }}>bookmark</Text>
                    </View>
                
                    </TouchableHighlight>
                
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
                    <Text style={{
                        color: 'white', marginTop: 10, marginLeft: 120, fontSize: 20, fontWeight: 'bold',
                        backgroundColor: '#FFC107', padding: 10, paddingHorizontal: 20, borderRadius: 10, marginRight: 10
                    }}>3.4</Text>
                </View>
                        <TouchableHighlight onPress={this.setState({
                            cameraOpen:true
                        })}
                        >
                        <Text>
                        Open Camera
                        </Text>
                       </TouchableHighlight>
            </View>
            </View>
            </ScrollView>
            )
        }
        else{
            return(

                <CameraComp/>
            )
        }
        }
    }