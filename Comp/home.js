import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableHighlight, Alert,TouchableWithoutFeedback ,TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Item, Input,  Drawer } from "native-base";
import {Actions} from 'react-native-router-flux';
import ControlPanel from './ControlPanel';







export default class FirstScreen extends Component {
constructor(props) {
        super()
        this.state = {
            show2ndImgs: false
        }
    }

    changeScreen(){
        console.log('done')
        Actions.food()
    }



    bookScreen(){
        console.log('done')
        Actions.book()
    }




    notificationScreen(){
    console.log('done')
    Actions.notification()

}

    static navigationOptions = {
        tabBarLabel: 'home',
        drawerIcon: ({ tintColor }) => {
            console.log("tintColor = " + tintColor);
            return (
                <MaterialIcons
                    name="card-membership"
                    size={24}
                    style={{ color: tintColor }}
                >
                </MaterialIcons>
            );
        }
    }
 
  openDrawer = () => {
    this.drawer._root.open()
  };
  closeDrawer = () => {
    this.drawer._root.close()
  };
    
    render() {

        return (
            <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<ControlPanel />}
        onClose={() => this.closeDrawer()}
        openDrawerOffset={0.3}
        panCloseMask={0.3}
      >
                <ScrollView><View style={
                    {
                        flex: 1,
                        // justifyContent: 'center',
                        // alignItems: 'center'
                    }
                }>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        borderBottomWidth: 1, borderBottomColor: 'gray', borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15, paddingBottom: 7
                    }}>

                        <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
                            
                            <TouchableOpacity  onPress = {this.openDrawer.bind(this)}>
                                <Image
                                    title="Open DrawNavigator" source={require('../images/menu-three-horizontal-lines-symbol.png')} style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10 }} />
                                {/* <Left>
                            <Button >
                                <Icon name='ios-menu' onPress={() => this.props.drawerOpen()} />
                            </Button>
                        </Left> */}
                            </TouchableOpacity>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 15 }}>
                        <TouchableWithoutFeedback onPress={this.bookScreen.bind(this)}>
                            <Image source={require('../images/bookmark.png')} style={{ width: 25, height: 25, marginTop: 15, marginLeft: 10 }} />
                          
                          </TouchableWithoutFeedback>

                            <TouchableOpacity onPress={this.notificationScreen.bind(this)}>
                            <Image source={require('../images/alarm.png')} style={{ width: 25, height: 25, marginTop: 15, marginLeft: 10 }} />
                       </TouchableOpacity>
                        </View>

                    </View>

                    <View>
                        <Text style={{ color: 'gray', fontSize: 10, fontWeight: 'bold', marginTop: 5, marginLeft: 35 }}>
                            YOUR LOCATION
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 0, }}>
                        <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
                            <Image source={require('../images/pin.png')} style={{ width: 25, height: 25, marginLeft: 10 }} />
                            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', marginTop: 5 }}>Central Karachi</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: '4%' }}>
                            <Text style={{ color: 'green', marginTop: 7,fontWeight:'900',fontSize:10 }}>CHANGE</Text>
                        </View>

                    </View>
                    <View style={{
                        borderWidth: 1, borderRadius: 12, width: '95%', marginLeft: 10, marginRight:10,height: 45,
                        marginTop: 5, padding: 0, backgroundColor: '#E0E9F3', borderColor: 'white'
                    }}>
                        <Item >
                            <Image source={require('../images/magnifying-glass.png')} style={{
                                width: 20, height: 20,
                                marginHorizontal: 12, marginBottom: 5
                            }} />
                            <Input placeholder='Search for restaurent ' style={{ paddingBottom: 15 }} />
                        </Item>
                    </View>

                    <View style={{
                        borderWidth: 1, width: '100%', height: 50,
                        marginTop: 8, padding: 0, backgroundColor: '#E0E9F3', borderColor: 'white'
                    }}>
                        <Text style={{
                            color: 'black', fontWeight: 'bold', marginLeft: 10, marginTop: 10, fontSize: 18, paddingBottom: 25
                        }}>Recommendations for you</Text>
                    </View>

                    {/* food break card start */}

                    <View>
                        <TouchableWithoutFeedback onPress={this.changeScreen.bind(this)}>
                        <View  style={{
                            flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, backgroundColor: '#EFF2F7',
                            padding: 5
                        }}>
                            <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
                                <Image source={require('../images/Food-Break.jpg')} style={{ borderWidth: 1, borderRadius: 40, width: 55, height: 55, marginLeft: 5 }} />
                                
                                <View style={{ marginLeft: 5, marginTop: 5 }}>
                                    <Text style={{ color: '#47525E', fontSize: 15, fontWeight: 'bold' }}>Food Break</Text>
                                    <Text style={{ color: '#8492A6', fontSize: 13, fontWeight: 'bold' }}>Bahadurabad</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginRight: 15 }}>
                                <View>
                                    <Image source={require('../images/visible.png')} style={{ width: 30, height: 17, marginTop: 5 }} />
                                    <Text style={{ color: '#47525E', fontSize: 12, marginLeft: 5, marginTop: 3 }}>2.5k</Text>
                                </View>
                            </View>
                        
                        </View>
                        </TouchableWithoutFeedback>
                        <View>

                            <Image source={require('../images/images.jpg')} style={{ width: '100%', height: 220 }} />
                        </View>
                        <View style={{ backgroundColor: '#EFF2F7' }}>
                            <Text style={{
                                color: '#47525E',paddingLeft: 10,paddingRight:10,
                                marginTop: 10, fontWeight: '400', fontFamily: 'Domine',
                            }}>Greyhound divisively hello coldly wonderfully
                                    margin ally far upon excluding.Greyhound divisiv ely hello coldly wo n derfully
                                marginally far upon excluding.fdhgf</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#EFF2F7' }}>
                            <View style={{ justifyContent: 'flex-start', flexDirection: 'row', padding: 10 }}>
                                <Image source={require('../images/wifi-connection-signal-symbol.png')} style={{ width: 15, height: 15, marginRight: 5 }} />
                                <Image source={require('../images/shop.png')} style={{ width: 15, height: 15, marginRight: 5 }} />
                                <Image source={require('../images/credit-cards.png')} style={{ width: 15, height: 15, marginRight: 5 }} />
                                <Image source={require('../images/taxi.png')} style={{ width: 15, height: 15, marginRight: 5 }} />

                            </View>

                            <View style={{ marginRight: 15, flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, marginTop: 5 }}>Likes</Text>
                                {
                                    this.state.show2ndImgs ?
                                        <TouchableHighlight onPress={() => this.show2ndImgs.bind(this)}>
                                            <Image source={require('../images/like.png')}
                                                style={{ width: 20, height: 20, marginTop: 5, marginLeft: 20 }} />
                                        </TouchableHighlight>
                                        :
                                        <TouchableHighlight >
                                            <Image source={require('../images/heart.png')} style={{ width: 20, height: 20, marginTop: 5, marginLeft: 5 }} />
                                        </TouchableHighlight>

                                }
                            </View>
                        </View>
                    </View>
                    {/* food break card end */}



                    {/* Pizza hut card start */}

                    <View>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, backgroundColor: '#EFF2F7',
                            padding: 10
                        }}>
                            <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
                                <Image source={require('../images/PH.jpg')} style={{ borderWidth: 1, borderRadius: 40, width: 55, height: 55, marginLeft: 5 }} />
                                <View style={{ marginLeft: 5, marginTop: 10 }}>
                                    <Text style={{ color: '#47525E', fontSize: 17, fontWeight: 'bold' }}>Pizza Hut</Text>
                                    <Text style={{ color: '#8492A6', fontSize: 15, fontWeight: 'bold' }}>Tariq Road</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginRight: 10 }}>
                                <View>
                                    <Image source={require('../images/visible.png')} style={{ width: 40, height: 25, marginTop: 10 }} />
                                    <Text style={{ color: '#47525E', fontSize: 10, marginLeft: 5 }}>2.5k</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Image source={require('../images/pizzahut.jpg')} style={{ width: '100%', height: 220 }} />
                        </View>
                        <View style={{ backgroundColor: '#EFF2F7' }}>
                            <Text style={{
                                color: '#47525E', fontSize: 18, marginLeft: 10,
                                marginRight: 5, marginTop: 16, fontFamily: 'Domine'
                            }}>Greyhound divisively hello coldly wonderfully
                                marginally far upon excluding.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#EFF2F7' }}>
                            <View style={{ justifyContent: 'flex-start', flexDirection: 'row', padding: 15 }}>
                                <Image source={require('../images/wifi-connection-signal-symbol.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
                                <Image source={require('../images/shop.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
                                <Image source={require('../images/credit-cards.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
                            </View>
                            <View style={{ padding: 10, flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, marginTop: 5 }}>Likes</Text>
                                <Image source={require('../images/heart.png')} style={{ width: 20, height: 20, marginTop: 5, marginLeft: 5 }} />
                            </View>
                        </View>
                    </View>

                    {/* pizza hut card end */}

                    {/* c card start */}

                    <View>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, backgroundColor: '#EFF2F7',
                            padding: 10
                        }}>
                            <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
                                <Image source={require('../images/Food-Break.jpg')} style={{ borderWidth: 1, borderRadius: 40, width: 55, height: 55, marginLeft: 5 }} />
                                <View style={{ marginLeft: 5, marginTop: 10 }}>
                                    <Text style={{ color: '#47525E', fontSize: 17, fontWeight: 'bold' }}>Food Break</Text>
                                    <Text style={{ color: '#8492A6', fontSize: 15, fontWeight: 'bold' }}>Bahadurabad</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginRight: 10 }}>
                                <View>
                                    <Image source={require('../images/visible.png')} style={{ width: 40, height: 25, marginTop: 10 }} />
                                    <Text style={{ color: '#47525E', fontSize: 15, marginLeft: 5 }}>2.5k</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Image source={require('../images/images.jpg')} style={{ width: '100%', height: 220 }} />
                        </View>
                        <View style={{ backgroundColor: '#EFF2F7' }}>
                            <Text style={{
                                color: '#47525E', fontSize: 18, marginLeft: 10,
                                marginRight: 5, marginTop: 16, fontFamily: 'Domine'
                            }}>Greyhound divisively hello coldly wonderfully
                                marginally far upon excluding.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#EFF2F7' }}>
                            <View style={{ justifyContent: 'flex-start', flexDirection: 'row', padding: 15 }}>
                                <Image source={require('../images/wifi-connection-signal-symbol.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
                                <Image source={require('../images/shop.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
                                <Image source={require('../images/credit-cards.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
                            </View>
                            <View style={{ padding: 10, flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, marginTop: 5 }}>Likes</Text>
                                <Image source={require('../images/heart.png')} style={{ width: 25, height: 25, marginTop: 5, marginLeft: 5 }} />
                            </View>
                        </View>
                    </View>

                    {/* c card end */}



                </View>
                </ScrollView>
                </Drawer>

        )
    }
}