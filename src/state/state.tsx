import React, { createContext, useState } from 'react'

interface GlobalContextUI {
  darkMode: string;
  handleDarkMode: () => void;
}

interface GlobalContextProviderUI {
  children: React.ReactNode;
}

export const GlobalContext = createContext<GlobalContextUI>({
  darkMode: 'off',
  handleDarkMode: () => {}
})

export const GlobalContextProvider = (props: GlobalContextProviderUI) => {
  const [darkMode, setDarkMode] = useState('off')

  const handleDarkMode = () => {
    setDarkMode(darkMode === 'off' ? 'on' : 'off')

    document.body.classList.toggle('dark-mode')
  }

  return (
    <GlobalContext.Provider value={{ darkMode, handleDarkMode }}>
      {props.children}
    </GlobalContext.Provider>
  )
}
