import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import logo from '../assets/logo.svg'
import theme from './theme'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App
