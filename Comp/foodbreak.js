import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity,StatusBar,Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Item, Input, Header, Container, Left, Right, Button, Icon, Drawer, SideBar } from "native-base";
import App from '../App'
import Routers from'./Router'
import {Actions} from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';


export default class foodBreak extends Component {
    constructor(props) {
        super()
        this.state = {
            show2ndImgs: false
        }
    }

    changeScreen(){
        console.log('done')
        Actions.book()
    }


    Image(){
        console.log('image')
    
        var options = {
      title: 'Select Avatar',
      customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    
    ImagePicker.launchCamera(options, (response)  => {
      console.log('Response = ', response);
    });
        // ImagePicker.launchImageLibrary(options, (response)  => {
        //     console.log('Response = ', response);
        // });
    }
    Images(){
        console.log('image')
    
        var options = {
      title: 'Select Avatar',
      customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    
        ImagePicker.launchImageLibrary(options, (response)  => {
            console.log('Response = ', response);
        });
    }



    render() {
        return (<ScrollView>
            <View>
                <View>
                <StatusBar
    
     barStyle="default"
     translucent= {true}
   />
                    <Image source={require('../images/dinner-1246287__340.jpg')} style={{ height: 250, width: '100%' }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>


                     <TouchableWithoutFeedback onPress={this.changeScreen.bind(this)}>

                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 5 }}>Food Break</Text>
                            <Text style={{ color: '#8492A6', fontSize: 15, }}>Bahadurabad,Karachi</Text>
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

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginRight: 10, marginLeft: 15, fontSize: 17, color: '#00A6FF', }}>Open now</Text>
                    <Text style={{ fontSize: 17, color: '#969FAA' }}>10AM to 12PM</Text>
                </View>
                <View style={{
                    borderBottomWidth: 1, borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
                    borderColor: '#CB202D', padding: 5
                }}>
                    <Text style={{ color: '#969FAA', fontSize: 15, marginLeft: 10 }}>Restaurent</Text>
                </View>
                <View>
                    <Text style={{ color: '#1F2D3D',marginLeft:10,fontSize:18,marginTop:5,fontWeight:'300' }}>Rate this place</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../images/star.png')} style={{width:20,height:20,marginLeft:15}}/>
                    <Image source={require('../images/star.png')} style={{width:20,height:20,marginLeft:10}}/>
                    <Image source={require('../images/star.png')} style={{width:20,height:20,marginLeft:10}}/>
                    <Image source={require('../images/star.png')} style={{width:20,height:20,marginLeft:10}}/>
                    <Image source={require('../images/star.png')} style={{width:20,height:20,marginLeft:10}}/>
                </View>
                <View>
                    <Text style={{color:'#000000',fontSize:17,marginTop:8,marginLeft:5}}> Menu</Text>
                    <Image  source={require('../images/menu-foodbreak.jpg')} style={{width:70,height:90,margin:10}}/>
                </View>
                <View>
                <View  style = {{
                    justifyContent : 'center',
                    alignItems : 'center'
                }}>
                <Text>Image Picker</Text>
                <TouchableOpacity
                
                onPress = {this.Image.bind(this)}
                >
                   <Text>Cameraz</Text> 
                   
                </TouchableOpacity>
                 <TouchableOpacity
                
                onPress = {this.Images.bind(this)}
                >
                   <Text>Gallery</Text> 
                   
                </TouchableOpacity>
            </View>
           
                    <Text style={{color:'#000000',fontSize:17,marginTop:8,marginLeft:5}}> Photo</Text>
                    <Image  source={require('../images/menu-foodbreak.jpg')} style={{width:70,height:90,margin:10}}/>
                </View>
             
                    <View>
                    <Text style={{marginLeft:10,fontSize:20,color:'black',fontWeight:'400'}}>Detail</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:5, justifyContent: 'space-between' }}> 
                        <View style={{marginLeft:10,justifyContent:'flex-start'}}>
                            <Text style={{fontSize:18}}>CALL</Text>
                            <Text style={{fontSize:18,color:'green'}}>0332-4114933</Text>
                        </View>               
                        <View style={{justifyContent:'flex-end'}}>
                            <Image source={require('../images/auricular-phone-symbol-in-a-circle.png')} style={{width:40,height:40,marginRight:10}}/>
                        </View>    
                        
</View>                 
<View style={{flexDirection:'row',marginTop:5, justifyContent: 'space-between' }}> 
                        <View style={{marginLeft:10,justifyContent:'flex-start',width:300}}>
                            <Text style={{fontSize:18, fontWeight:'400'}}>ADDRESS</Text>
                            <Text style={{fontSize:15,color:'#8492A6'}}>Address Bhadurabad , charminar Chorangi karachi</Text>
                        </View>               
                        <View style={{justifyContent:'flex-end'}}>
                            <Image source={require('../images/auricular-phone-symbol-in-a-circle.png')} style={{width:40,height:40,marginRight:10}}/>
                        </View>    
                        
</View>           
    <View style={{marginTop:10,marginLeft:10}}>
        <Text style={{color:'#B8977E',fontSize:18}}>
            TOP DISHES PEOPLE ORDER
        </Text>
        <Text style={{color:'#8492A6',fontSize:15}}>
        Singapuri Rice, Shawarma        </Text>
    </View>
    <View style={{marginTop:10,marginLeft:10}}>
        <Text style={{color:'#B8977E',fontSize:18}}>
           Type
        </Text>
        <Text style={{color:'#8492A6',fontSize:15}}>
        Restaurent        </Text>
    </View>
    <View>
    <Text style={{color:'#8492A6',fontSize:18,marginLeft:10,marginTop:5}}>
           More Info
        </Text>
    </View>
    <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
        <View style={{marginLeft:10,justifyContent:'flex-start'}}>
            <Text style={{fontSize:15}}>Break Fast</Text>
            <Text style={{fontSize:15}}>Outdoor Eating</Text>
        </View>
        <View style={{marginRight:140,justifyContent:'flex-end', marginBottom:5}}>
            <Text style={{fontSize:15}}>Veagan Option</Text>
            <Text style={{fontSize:15}}>Wifi</Text>
        </View>
        </View>
        <View style={{borderTopWidth: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10,
                    borderColor: '#CB202D',}}>
                    <Text style={{marginTop:5,marginLeft:10,fontSize:15}}>RECENT REVIEWS</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
<View style={{justifyContent:'flex-start',flexDirection:'row'}}>
    <Image source={require('../images/images.jpg')} style={{width:55,height:55,borderRadius:30,marginLeft:10}}/>
    <Text style={{fontSize:18, marginLeft:5,marginTop:20,fontWeight:'500'}}>Rizwan</Text>
</View>
<View style={{justifyContent:'flex-end', }}>
    <Text style={{fontSize:12,color:'green',borderWidth:1,borderRadius:20,marginBottom:10,borderColor:'green', padding:5,
    paddingHorizontal:10,marginRight:10,fontWeight:'500'}}>FOLLOW</Text>
</View>
            </View>
            <View style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
                <Text style={{marginTop:10,fontWeight:'500'}}>RATED</Text>
                <Text style={{fontSize:16,color:'green',borderWidth:1,borderRadius:10,marginBottom:10,borderColor:'green',
    paddingHorizontal:5,fontWeight:'500',padding:5,marginLeft:5}}>4.5</Text>
            </View>
            <View style={{width:'100%',marginLeft:10,marginRight:10}}>
                <Text style={{fontSize:16,color:'#8492A6'}}>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusant doloremque laudantium, totam rem aperiam</Text>
            </View>
            </View>
        </ScrollView>
        )
    }
}