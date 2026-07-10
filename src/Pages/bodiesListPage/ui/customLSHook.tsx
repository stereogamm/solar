
import { useState, useEffect } from "react"

export const useLocalStorageHook = (key : string, initialValue : string) => {
    const [value, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item? JSON.parse(item) : initialValue
        } catch(error) {
            console.error(error)
            return initialValue
        }
    })

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch(error) {
            console.error(error)
        }
    }, [key, value])
    
    return [value, setValue]
}






































// import { useState, useEffect } from 'react'

// export const useCustomLSH = (key:string, initialValue: string) => {
//     const [name, setName] = useState(() => {
//         try{
//          const valueName = window.localStorage.getItem(key)
//         return valueName? JSON.parse(valueName) : initialValue
//         } catch(error) {
//             console.error(error)
//             return initialValue
//         }
//     })


//     useEffect(() => {
//         try{
//             window.localStorage.setItem(key, JSON.stringify(name))
//         } catch(error) {
//             console.error(error)
//         }
       
//     }, [key, name])

//     return [name, setName]
// }