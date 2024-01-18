import { memo, useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../route/Route";



function CurrencyGraph({dataList}){

    const [theme] = useContext(ThemeContext)
    console.log("Crypto Graph Called.........")

    const ShowBar = ({height, color})=> {
        return(
        <View
            style = {barStyle(height, color).bar}>
        </View>
        )

    }

    return(
        <View style = {style.mainContainer}>
            <ScrollView 
                horizontal = {true}
                style = {{flex: 1, flexDirection: 'row'}}
                contentContainerStyle = {{justifyContent: 'flex-start', alignItems: 'flex-end'}}
                showsHorizontalScrollIndicator = {false}
                showsVerticalScrollIndicator = {false}
                alwaysBounceHorizontal = {false}
                alwaysBounceVertical = {false}
                
                >
            {
                dataList.map((item) => {
                     return <ShowBar 
                        height={18*item.value}
                        color={item.color}
                    />
                })
            }
            </ScrollView>           
            
        </View>
        )
}

const style = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-end'
    },
})

const barStyle= (height, color)=> StyleSheet.create({
    bar: {
            height: height, 
            width: 20, 
            backgroundColor: color, 
            marginHorizontal: 7,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10
        }
})

export default memo(CurrencyGraph)