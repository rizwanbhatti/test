import React, { Component } from 'react';
import {
	StyleSheet,
	Text, TouchableOpacity,
	View,
	Image,TouchableWithoutFeedback,StatusBar
} from 'react-native';
import {Actions} from 'react-native-router-flux';





export default class Logo extends Component {


	changeScreen(){
        console.log('done')
        Actions.firstscreen()
    }

	render() {
		return (
			<View style={styles.container}>
			<StatusBar
     backgroundColor="red"
     barStyle="default"
   />
				<View>
					<Image style={{ width: 100, height: 100, marginTop: 100 }}
						source={require('../images/zlogo.png')} />
				</View>
				<View  style={{flexDirection:'row' }} >
				<TouchableOpacity style={{
					flexDirection: 'row', marginTop: 50,justifyContent:'space-between',alignItems:'center'
					, borderColor: '#4267b2',borderRadius:10, borderWidth: 1, padding: 10,backgroundColor:'#4267b2'
					
				}}>
					<Image style={{ width: 30, height: 30,marginRight:30}}
						source={require('../images/facebook.png')} />
					<Text style={{ fontSize: 25,   color: '#d9e3f0', }}>Login in With Facebook</Text>
				</TouchableOpacity>
				</View>
				
 


<View style={{flexDirection:'row' }} >
				<TouchableOpacity style={{
					flexDirection: 'row', marginTop: 20,justifyContent:'space-between',alignItems:'center'
					, borderColor: 'black', borderWidth: 1, padding: 10,
				}}>
					<Image style={{ width: 30, height: 30,marginRight:30}}
						source={require('../images/facebook.png')} />
					<Text style={{ fontSize: 20,  fontWeight: 'bold', color: '#b80000', }}>Login in With Facebook</Text>
				</TouchableOpacity>
				</View>

				<View style={{flexDirection:'row' }} >
				<TouchableOpacity style={{
					flexDirection: 'row', marginTop: 20,justifyContent:'space-between',alignItems:'center'
					, borderColor: 'black', borderWidth: 1, padding: 10,
				}}>
					<Image style={{ width: 30, height: 30,marginRight:30}}
						source={require('../images/facebook.png')} />
					<Text style={{ fontSize: 20,  fontWeight: 'bold', color: '#b80000', }}>Login in With Facebook</Text>
				</TouchableOpacity>
				</View>



			{/* {<TouchableOpacity style={{
				flexDirection: 'row', marginTop: 20
				, borderColor: 'black', borderWidth: 1, padding: 10, paddingHorizontal: 60
			}}>
				<Image style={{ width: 30, height: 30, }}
					source={require('../images/facebook.png')} />
				<Text style={{ fontSize: 20, marginLeft: 10, fontWeight: 'bold', color: '#b80000', }}>Login in With Twitter</Text>
			</TouchableOpacity>

				<TouchableOpacity style={{
				flexDirection: 'row', marginTop: 20
				, borderColor: 'black', borderWidth: 1, padding: 10, paddingHorizontal: 63
			}}>
				<Image style={{ width: 30, height: 30, }}
					source={require('../images/facebook.png')} />
				<Text style={{ fontSize: 20, marginLeft: 10, fontWeight: 'bold', color: '#b80000', }}>Login in With Google</Text>
			</TouchableOpacity> */}

<View>
<TouchableOpacity onPress={this.changeScreen.bind(this)}>
				<Text style={styles.logoText}>Create an Account</Text>
				</TouchableOpacity>
	</View>
				<View style={{marginTop:60}}>
					<Text style={{marginLeft:20,}}>
						By continuing you agree to our
						 </Text>
						 <Text style={{textDecorationLine: 'underline'}}>
							 Terms and Conditions & Privacy Policy
						 </Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: 'flex-start',
		alignItems: 'center', backgroundColor: '#fff'


	},
	logoText: {
		marginVertical: 15,
		fontSize: 18,
		marginTop: 60,
		color: '#b80000',
		fontWeight:'bold',
		textDecorationLine: 'underline',

	}
});