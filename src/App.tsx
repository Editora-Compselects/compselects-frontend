import './App.css'
import { NavBar } from './components/general/NavBar'
import { NavBarSkeleton } from './components/general/NavBarSkeleton'
import EventoItem from './pages/EventoItem'
import Eventos from './pages/Eventos'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Submissoes from './pages/Submissoes'

function App() {
  return (
    <div className='overflow-x-hidden'>
      <NavBarSkeleton/>
      {/*<Home/>
      <Sobre/>
      <Publicacoes/>
      <PublicacaoItem/>
      <Autores/>*/}
      <Submissoes/>{/*
      <Eventos/>
      <EventoItem/>
      <Blog/>
      <BlogPost/>
      <Contato/>
      */}
    </div>
  )
}

export default App
