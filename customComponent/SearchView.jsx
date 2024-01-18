import { StyleSheet, TextInput, View } from "react-native"
import { useDebounce } from "../utils/CustomHooks"
import { useContext, useState, memo } from "react"
import { ThemeContext } from "../route/Route"

const SearchView = memo(({ serachQuery, callback}) => {

    console.log("Search View rerender")

    const [theme] = useContext(ThemeContext)
    

    const onTextChangeCallback = (value)=> {
        callback(value)
    }

    return(
        <View>
            <TextInput 
                style = {style(theme).searchStyle}
                placeholder="Serach crypto currency"
                value={serachQuery}
                onChangeText={(value) => onTextChangeCallback(value)}
             >
            </TextInput>
        </View>
    )
});

const style = (appTheme) => StyleSheet.create({
    searchStyle: {
        height: 50,
        color: appTheme.color.onPrimary,
        borderColor: appTheme.color.borderStroke,
        margin: appTheme.space.l,
        borderWidth: appTheme.space.borderWidth,
        borderRadius: appTheme.shape.l,
        paddingHorizontal: appTheme.space.xl
    }
})

export {SearchView}