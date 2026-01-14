
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router-provider/router'
import { MantineProvider } from '@mantine/core'
import "@mantine/core/styles.css"
import "./global.css"
import { theme } from './styles/theme'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
 <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>
)
