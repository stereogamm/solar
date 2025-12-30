import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router-provider/router'
import './styles/index.css'
import { MantineProvider } from '@mantine/core'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
 <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
)
