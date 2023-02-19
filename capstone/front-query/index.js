import { createRoot } from 'react-dom/client'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './app' 

const queryClient = new QueryClient()

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)