import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.tsx'


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        
      </Route>
    )
  )


createRoot(document.getElementById('root')!).render(
  <StrictMode>
<RouterProvider router={router} >
  <App/>
</RouterProvider>
  </StrictMode>,
)
