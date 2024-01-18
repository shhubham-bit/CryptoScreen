import { StyleSheet, View } from "react-native";
import CurrencyGraph from "./CurrencyCoinGraph";
import BalanceDetail from "./BalanceDetail";
import { useContext, useEffect, useState } from "react";
import { getBarData } from "./mockData";
import { ThemeContext } from "../route/Route";




function CurrenetBalance(){

    console.log("Balance(price + graph) section  called")
    const [theme] = useContext(ThemeContext)
    const [graphData, setGraphData] = useState([])
    
    useEffect(() => {
        setGraphData(getBarData)
    }, [])

    return(
        <View style = {style.mainContainer}>
            <View style = {style.container}>
                <BalanceDetail />
                <CurrencyGraph dataList = {graphData}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 8,
        backgroundColor: '#F5F5F5',
    },
    container: { 
        flex: 1, 
        backgroundColor: 'white',
        borderColor: 'black', 
        borderWidth: '2',  
        borderRadius: 15,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        marginHorizontal: 16,
        marginVertical: 12,
        paddingVertical: 8,
        paddingHorizontal: 2,
    }
})

export default CurrenetBalance