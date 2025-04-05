import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { NavBar } from './components/general/NavBar'
import { NavBarSkeleton } from './components/general/NavBarSkeleton'
import EventoItem from './pages/EventoItem'
import Eventos from './pages/Eventos'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Submissoes from './pages/Submissoes'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { PublicRoutes } from './routes/Router'
import { Footer } from './components/general/Footer'

function App() {
  const router = createBrowserRouter([
    ...PublicRoutes,
    {
      path: "*",
      element: (
        <Navigate
          to={"/home"}
          replace
        />
      ),
    },
  ]);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 15000,
      },
    },
  });
  
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
