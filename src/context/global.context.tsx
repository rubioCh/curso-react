import React, { createContext, ReactNode, useState } from "react";

interface GlobalContextType {
  value: number,
  setValue: React.Dispatch<React.SetStateAction<number>>
}

export const EmptyGlobalState: GlobalContextType = {value: 0}
export const GlobalContext = createContext<GlobalContextType>(EmptyGlobalState)

interface GlobalProps {
  children: ReactNode
}
 export const GlobalProvider = ({children}: GlobalProps) => {
  const [globalValue, setGlobalValue] = useState<GlobalContextType>(EmptyGlobalState)
    return (
      <>
      <GlobalContext.Provider value={{globalValue, setGlobalValue}}>
        {children}
      </GlobalContext.Provider>
      </>
    )
 }