import React, { createContext } from 'react'
import { useState } from 'react'


export const Themeprovider=createContext();



const Themecontext = ({children}) => {
const [darkmode, setdarkmode] = useState(false)


  return (

    <Themeprovider.Provider value={{darkmode,setdarkmode}}>
        {children}
        


    </Themeprovider.Provider>
   
  )
}

export default Themecontext
