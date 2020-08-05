import React, { createContext, useState } from 'react'

const UsertContext = createContext()

export const UserProvider = ({ children }: any ) => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <UsertContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </UsertContext.Provider>
  )
}

