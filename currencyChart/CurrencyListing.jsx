import {FlatList} from "react-native";
import {  memo, useCallback, useState } from "react";

import CurrencyCard from "./CurrencyCard";
import Divider from "../customComponent/Divider";

function CurrencyList({currencies, cardCallback}){

    console.log("currency list render")
    const [update, setUpdate] = useState()

    function getTimeStamp(){
        return new Date().getTime(); 
    }
    const itemClickCallback = useCallback((index) => {
        cardCallback(index)
        currencies[index] = {...currencies[index], marketCap: getTimeStamp()}
        setUpdate(index)
        console.log('index click', index)
    }, [])

    return(
        <FlatList 
            data={currencies}
            renderItem={(data) => <CurrencyCard 
                currency = {data.item} 
                index = {data.index} itemCallback={itemClickCallback}/>}
            keyExtractor={(data) => data.id}
            extraData={update}
            ItemSeparatorComponent={<Divider/>}
            />
    )
}

export default memo(CurrencyList)