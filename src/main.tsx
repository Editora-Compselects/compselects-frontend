import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { NavBar } from './components/general/NavBar.tsx'
import { Provider } from './components/ui/provider.tsx'
import { Theme } from '@chakra-ui/react'
import { Footer } from './components/general/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
		<Provider>
      <Theme colorPalette={"blue.800"}>
        <NavBar/>
        <App />
        <Footer/>
      </Theme>
    </Provider>
  </StrictMode>,
)
