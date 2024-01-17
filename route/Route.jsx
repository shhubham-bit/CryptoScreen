import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MarketTab from "../currencyChart/Market";
import RecentTab from "../currencyChart/Recent";
import HomeScreen from "../currencyChart/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { useAppTheme } from "../utils/CustomHooks";
import { createContext } from "react";
import { theme } from "../style/Theme";


const Stack = createNativeStackNavigator()
const Tab = createMaterialTopTabNavigator()

const ThemeContext = createContext()

function AppRoute(){

    const [appTheme] = useAppTheme()

    console.log("route app theme", appTheme)
    return(
        <ThemeContext.Provider value={[appTheme]}>
            <NavigationContainer >
                <Stack.Navigator option>
                    <Stack.Screen 
                    name="HomeScreen" 
                    component={HomeScreen}
                    options={{headerShown: false}}
                     />
                </Stack.Navigator>
            </NavigationContainer>  
        </ThemeContext.Provider>
        
    )
}

function TabNavigation(){
    return(
        <Tab.Navigator initialRouteName="Market">
            <Tab.Screen  name="Market" component={MarketTab} />
            <Tab.Screen name="Recent" component={RecentTab} />
        </Tab.Navigator>
    )
}


export {AppRoute, TabNavigation, ThemeContext}