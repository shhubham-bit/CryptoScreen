import { Text } from "react-native";


function PriceText({priceValue, priceStyle}){

    return(
        <>
            <Text style = {priceStyle}>
                ${priceValue}
            </Text>
        </>
    )
}

export {PriceText}