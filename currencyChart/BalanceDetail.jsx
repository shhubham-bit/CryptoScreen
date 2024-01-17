import { useContext, memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CurencyContext } from "./HomeScreen";
import { ThemeContext } from "../route/Route";
import { PriceText } from "../customComponent/PriceText";


function BalanceDetail(){

    const [theme] = useContext(ThemeContext)
    const [price,_] = useContext(CurencyContext)

    return(
        <View style = {style(theme).viewStyle}>
            <Text >Currenct Balance</Text>
            <PriceText 
                priceStyle={style(theme).priceStyle}
                priceValue={price.toFixed(2)}
                />
            <Text style = {style(theme).infoStyle}>
                Last Update yesterday
            </Text>
        </View>
    )

}

const style = (appTheme) => StyleSheet.create({
    viewStyle: {
        padding: 8
    },
    priceStyle: {
        ...appTheme.typoGraphy.h1,
        color: appTheme.color.onPrimary,
        marginTop: 10,
        marginBottom: 5
    },
    infoStyle: {
        ...appTheme.typoGraphy.small,
        color: appTheme.color.grey,
    },
    labelStyle:{
        ...appTheme.typoGraphy.h6,
        color: appTheme.color.onPrimary, 
    }

    
})

export default BalanceDetail