import React from 'react';
import {Scene,Stack,Router} from 'react-native-router-flux'; 
import FirstScreen from './home';
import foodbreak from './foodbreak';
import Logo from './Logo';
import bookmark from './bookmark';
import noti from './notification';
import LoggedOut from'./logged';
const Routers =()=>{
return(

    <Router >
    <Stack key="root" hideNavBar>
    <Scene key="logo" initial component={LoggedOut} hideNavBar/>
    <Scene key="firstscreen"component={FirstScreen}hideNavBar/>
    <Scene key="food" component={foodbreak}/>
    <Scene key="book" component={bookmark}/>
    <Scene key="notification" component={noti}/>
    </Stack>
    </Router>
)
}
export default Routers;