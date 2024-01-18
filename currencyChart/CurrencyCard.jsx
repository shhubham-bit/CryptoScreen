import { useContext, memo } from "react"
import { ThemeContext } from "../route/Route"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { LabelWithIcon } from "../customComponent/LabelIcon"
import { PriceText } from "../customComponent/PriceText"


function CurrencyCard({currency, index ,itemCallback}){

    console.log("card item render", index)
    const [theme] = useContext(ThemeContext)

    return(
        <View >
            <TouchableOpacity 
                style = {style(theme).currencyCardStyle}
                onPress={() => itemCallback(index)}
            >
                <LabelWithIcon 
                        icon={currency.icon}
                        label={currency.currency}
                        iconStyle={style(theme).iconStyle}
                        labelStyle={style(theme).labelStyle}
                        />
                <View style = {{flex: 1, justifyContent: 'space-evenly', flexDirection: 'row'}}>
                    <PriceText 
                        priceValue={currency.price.toFixed(2)}
                        priceStyle={style(theme).labelStyle}
                    />
                        <Text style = {style(theme).labelStyle}>{currency.change}</Text>
                        <Text style = {style(theme).labelStyle}>{currency.marketCap}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const style =(appTheme) => StyleSheet.create({
    iconStyle: {
        backgroundColor: 'pink',
        height: 20,
        width: 20,
        margin: 5,
    },
    labelStyle: {
        ...appTheme.typoGraphy.paragraph,
        color: appTheme.color.onPrimary,
        textAlign: 'left',
    },
    currencyCardStyle: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10
    }
}
)

export default memo(CurrencyCard)