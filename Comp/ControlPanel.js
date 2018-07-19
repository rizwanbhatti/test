import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';


class ControlPanel extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor : '#ffffff'
      }} >

        <View style={styles.imageStye}>
          <Image
            style={{
              position: 'relative',
              right: 15
            }}
          />

        </View>
        <View style = {{
          flexDirection : 'column',
          paddingLeft : '7%',
          paddingTop : '12%'
        }}>
     

      <TouchableOpacity  style = {styles.ControlPanelItems}>
        <Text style = {{
        }}> All Shops  </Text>
      </TouchableOpacity>


       <TouchableOpacity style = {styles.ControlPanelItems}
      onPress = {
        ()=>{this.props.signOut()}
      }
      >
        <Text style = {{
          // fontS
        }}> Sign Out  </Text>
      </TouchableOpacity>
      </View>


      </View>
    )
  }
}
function mapStateToProp(state) {
  // console.log(state, 'state')
  return ({

  })
}
function mapDispatchToProp(dispatch) {
  return ({
    signOut: () => {
      dispatch(LogOutAction())
  },
  })
}
const styles = StyleSheet.create({
  imageStye: {
    flex: .4,
    alignItems: 'center',   
    justifyContent: 'center',
    height: 250,
    backgroundColor: '#b71c1c',
  },
  ControlPanelItems : {
    flexDirection : 'row',
    alignItems : 'center',
    marginTop : 5
  }
})

export default (ControlPanel)