import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/header'
import { Home } from './pages/Home'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
