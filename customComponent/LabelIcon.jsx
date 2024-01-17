import { Image, Text, View } from "react-native";


function LabelWithIcon({icon, label, iconStyle, labelStyle}){

    return(
        <View style = {{flexDirection: 'row',alignItems: 'center', }}>
            <Image style = {iconStyle}
                source={{
                    uri: icon,
                  }}
                >
            </Image>
            <Text style = {labelStyle}>
                {label}
            </Text>
        </View>
    )
}

export {LabelWithIcon}