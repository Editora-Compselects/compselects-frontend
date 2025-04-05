import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { PublicRoutes } from './routes/Router'

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
