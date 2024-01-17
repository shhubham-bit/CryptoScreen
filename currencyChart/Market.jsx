import { Text, View } from "react-native"
import { SearchView } from "../customComponent/SearchView"
import { useCallback, useContext, useEffect, useState, useTransition } from "react"
import { CurencyContext } from "./HomeScreen"
import CurrencyList from "./CurrencyListing"
import getMockCurrencyData from "./mockData"
import { useDebounce } from "../utils/CustomHooks"
import Divider from "../customComponent/Divider"


function MarketTab(){

    const [currencyList, setCurrencyList] = useState()
    const [emptyList, setEmptyList] = useState(false)
    const [search, setSearch] = useState("")

    const [_, setCurrency] =  useContext(CurencyContext)

    console.log('market')
    useEffect(() => {
        console.log('effect1')
        setCurrencyList(getMockCurrencyData())
    }, [emptyList])

    useDebounce(700, () => {
        console.log('effect2')
        filterData(search)
    }, 
    [search])

    const onSearchCallback = useCallback((value) => {
        setSearch(value) 
        console.log("end 2")
    }, [])

    const filterData = (value)=> {
        console.log('filter run')
        const list = getMockCurrencyData()
        let filterList = [...list]
        if(value.length == 0){
            
        }else{
            filterList = list.filter(item => 
                item.currency.toLowerCase().trim()
                .includes(search.toLowerCase().trim())     
            )
        }
        setCurrencyList(filterList)
    }

    const currencyItemClick = useCallback((index) => {
        console.log("market index", index,)
        setCurrency(currencyList[index].price)
    }, [])

    

    

    return(
        <View style = {{backgroundColor: 'white'}}>
            <SearchView 
                searchQuery = {search} 
                callback = {onSearchCallback}/>
            <View style = {{flex: 0, 
                flexDirection: 'row',
                justifyContent: 'space-between', 
                paddingHorizontal: 20, 
                alignItems: 'flex-start',
                paddingVertical: 10,
                marginEnd: 20
                }}>
                <Text>Market</Text>
                <Text>Price</Text>
                <Text>Change</Text>
                <Text>Market Cap</Text>
            </View>
            <Divider />
            <CurrencyList 
                currencies = {currencyList} 
                cardCallback = {currencyItemClick}/>
        </View>
    )
    
}

export default (MarketTab)