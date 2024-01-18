import { View, useColorScheme } from "react-native";
import CurrenetBalance from "./CurrentBalance";
import { TabNavigation, ThemeContext } from "../route/Route";
import { ThemeProvider } from "@react-navigation/native";
import { createContext, useContext, useState } from "react";
import Header from "./Header";
import { SafeAreaView } from "react-native-safe-area-context";

const CurencyContext = createContext()

function HomeScreen(){

    console.log("Home Screen called ........")
    const [theme] = useContext(ThemeContext)
    const [selectedCurrency, setCurrency] = useState(123)

    return(
        <CurencyContext.Provider value={[selectedCurrency, setCurrency]} >
            <SafeAreaView style = {{flex: 1, backgroundColor: 'white'}}>
                <View  style = {style.container}>
                    <Header />
                    <CurrenetBalance/>
                    <TabNavigation />
                </View>
            </SafeAreaView>
        </CurencyContext.Provider>
    )
}

const style = {
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
}



export default HomeScreen
export {CurencyContext}