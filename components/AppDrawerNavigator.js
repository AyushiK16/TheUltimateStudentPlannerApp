import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSidebar from './CustomSidebar'
import { TabNavigator } from './TabNavigator';
import Settings from '../screens/Settings'
import MyDonation from '../screens/MyDonation'
import Notifications from '../screens/Notifications'
import {Icon} from 'react-native-elements'
import LogoutScreen from '../screens/LogoutScreen';
import CalculatorScreen from '../screens/CaclulatorScreen';
import BreakPage from '../screens/BreakPage';

export const AppDrawerNavigator = createDrawerNavigator({
    Home : {screen : TabNavigator},
    Settings : {screen : Settings,
        navigationOptions : {
            drawerLabel : 'Settings'
        }
},

    CalculatorScreen: {screen : CalculatorScreen,
        navigationOptions: {
            drawerLabel : 'Marks Caclulator'
    }},

    BreakPage: {screen : BreakPage,
        navigationOptions: {
            drawerLabel: 'Take A Break'
        }},


    LogoutScreen: {screen : LogoutScreen,
        navigationOptions: {
            drawerLabel : 'Logout'
        }},

    
    
    
   // MyDonation : {screen : MyDonation},
   // Notifications : {screen : Notifications}
},
{ contentComponent : CustomSidebar},
{ initialRouteName : "Home" }
)