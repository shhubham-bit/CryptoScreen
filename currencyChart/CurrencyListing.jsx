import {FlatList} from "react-native";
import {  memo, useCallback, useState, useTransition } from "react";

import CurrencyCard from "./CurrencyCard";
import Divider from "../customComponent/Divider";

function CurrencyList({currencies, cardCallback}){

    console.log("Currency List Render")
    const [update, setUpdate] = useState()
    const [isPending, startTransition] = useTransition()

    function getTimeStamp(){
        return new Date().getTime(); 
    }

    const itemClickCallback = useCallback((index) => {
        
        
        console.log(`Crad item click index: ${index} and list length ${currencies.length} ..........`)
        cardCallback(index)
        currencies[index] = {...currencies[index], marketCap: getTimeStamp()}
        setUpdate(currencies[index])
        if(!isPending){
            startTransition( () => {
                for(let i= 1; i<1e5; i++){
                    console.log(i)
                }
            })
        }
        
        
        
    }, [currencies])

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

export default CurrencyList