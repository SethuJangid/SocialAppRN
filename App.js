
import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ProfileScreen from "./Screens/Profiles/ProfileScreen";
import SearchFriend from "./Screens/SearchFriend";
import SettingScreen from "./Screens/SettingScreen";
import Search from "./Screens/Search";
import Trends from "./Screens/Search/Trends";
import TrendCard from "./Screens/Search/TrendCard";
import EditProfileScreen from "./Screens/Profiles/EditProfileScreen";
import UploadPostScreen from "./Screens/UploadPostScreen";
import AccountSetting from "./Screens/AccountSetting";
import DemoScreen from "./Screens/DemoScreen";
import HomeScreen from "./Screens/HomeScreen";
import DetailsScreen from "./Screens/DetailsScreen";
import RequestForFriend from "./Screens/RequestForFriend";
import SplashScreen from "./Screens/SplashScreen";
import ForgotPassword from "./Screens/ForgotPassword";
import AboutScreen from "./Screens/AboutScreen";
import TramsConditionScreen from "./Screens/Trams&ConditionScreen";
import PrivacyPolicy from "./Screens/PrivacyPolicy";
import Notification from "./Screens/Notification";
import DrawerNavigationUI from "./Screens/Navigate";
import * as ImagePicker from "expo-image-picker";
import ResetPassword from "./Screens/ResetPassword";
import Tweet from "./Screens/Tweet";
import SearchFriendPost from './Screens/SearchFriendPost';
const Stack = createStackNavigator();

import BottomBAR from './Screens/Components/components/BottomBAR'


const Auth = () => {
    // Stack Navigator for Login and Sign up Screen
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen
                name="DemoScreen"
                component={DemoScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                {/* SplashScreen which will come once for 5 Seconds */}
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    // Hiding header for Splash Screen
                    options={{headerShown: false}}
                />
                {/* Auth Navigator which includer Login Signup will come once */}
                <Stack.Screen
                    name="Auth"
                    component={Auth}
                    options={{headerShown: false}}
                />

                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="DemoScreen"
                    component={DemoScreen}
                    options={{headerShown: false}}
                />

                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="RegisterScreen"
                    component={RegisterScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="ProfileScreen"
                    component={ProfileScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="SearchFriend"
                    component={SearchFriend}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="SettingScreen"
                    component={SettingScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Search"
                    component={Search}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Trends"
                    component={Trends}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="TrendCard"
                    component={TrendCard}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="EditProfileScreen"
                    component={EditProfileScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="UploadPostScreen"
                    component={UploadPostScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="AccountSetting"
                    component={AccountSetting}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="DetailsScreen"
                    component={DetailsScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="RequestForFriend"
                    component={RequestForFriend}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="AboutScreen"
                    component={AboutScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="TramsConditionScreen"
                    component={TramsConditionScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="PrivacyPolicy"
                    component={PrivacyPolicy}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Notification"
                    component={Notification}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="DrawerNavigationUI"
                    component={DrawerNavigationUI}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="ResetPassword"
                    component={ResetPassword}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Tweet"
                    component={Tweet}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="SearchFriendPost"
                    component={SearchFriendPost}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BottomBAR"
                    component={BottomBAR}
                    options={{ headerShown: false }}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;