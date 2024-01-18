import { useEffect, useState } from "react"
import { useColorScheme } from "react-native"
import { theme, LightColorScheme, DarkColorScheme } from "../style/Theme"


 const useAppTheme = () =>{

    //  useColorScheme hook is to identify the theme of the default system
    const colorScheme = useColorScheme()

    console.log("app theme", colorScheme)

    const [appTheme, setTheme] = useState(theme)
    
    useEffect(() => {
        if(colorScheme === 'light'){
            console.log("ligh if")
            setTheme({...appTheme, color: LightColorScheme})
        }else if( colorScheme === 'dark'){
            const k = {...appTheme, color: DarkColorScheme}
            console.log("dark if", k)
            setTheme({...appTheme, color: DarkColorScheme})
        }
        else{
            console.log("else if")
            setTheme({...appTheme, color: LightColorScheme})
        }
    }, [colorScheme])

    return [appTheme]
}





const useDebounce = (time, callback, depAr) => {

    useEffect(() => {
        timeout = setTimeout(() => {
            callback()
        }, time)

        // to clear timout before creating new effect
        return () => clearTimeout(timeout) 
    }, depAr)

}

export {useAppTheme, useDebounce}