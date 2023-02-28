import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import { Home } from './Pages/Home'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { AddToCartButtonProvider } from './contexts/AddToCartButtonContext'


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AddToCartButtonProvider>
          <Router />
        </AddToCartButtonProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
