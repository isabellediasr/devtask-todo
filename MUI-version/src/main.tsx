import { ThemeProvider } from '@mui/material'
import theme from './theme.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
      path: "/",
      element: <App/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme = {theme}>
      <RouterProvider router = {router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
)
