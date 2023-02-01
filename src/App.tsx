import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { Home } from './Pages/Home'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />

      <GlobalStyle />
    </ThemeProvider>
  )
}
