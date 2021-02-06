import { View, TouchableOpacity } from 'react-native';
import { Container, Text } from 'native-base'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen'
import FooterTabs from '../navigation/FooterTabs'
import Register from '../screens/Register'
import GPDetails from '../screens/GPDetails'
import MakerDetails from '../screens/MakerDetails'
import Hello from '../components/Hello';
import MakerFooterTabs from './MakerFooterTabs';

const AppNavigator = createStackNavigator({
    Home: { screen: LoginScreen,
      navigationOptions: ({ navigation }) => ({
        title: `Khamang`,
        headerTitleStyle:{
          fontWeight:'bold',
          textAlign:'center',
          flexGrow:1,
          color:'white'
        },
        headerLeft:null,
        headerStyle: {
          backgroundColor:'#3F51B5',
          height:70
        },
        header:null
      }),
    },
    FootTab:{screen:FooterTabs,
    navigationOptions:({navigation}) => ({
      title:'Khamang',
      headerTitleStyle:{
        fontWeight:'bold',
        textAlign:'center',
        flexGrow:1,
        color:'white'
      },
      alignItems:'center',
      headerStyle: {
        backgroundColor:'#3F51B5',
        height:70
      },
      header:null
    })},
    MFootTab:{screen:MakerFooterTabs,
      navigationOptions:({navigation}) =>({
        title:'Khamang',
        headerTitleStyle:{
        fontWeight:'bold',
        textAlign:'center',
        flexGrow:1,
        color:'white'
      },
      alignItems:'center',
      headerStyle: {
        backgroundColor:'#3F51B5',
        height:70
      },
        header:null})},
    Register:{screen:Register,
      navigationOptions:({navigation}) =>({
        header:null
      })},
    MakerDe:{screen:MakerDetails},
    FPDetails:{screen:GPDetails}
  },
  {
    initialRouteName:"Home"
  });
  
  export default AppContainer=createAppContainer(AppNavigator);