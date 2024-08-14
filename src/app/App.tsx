import { queryClient } from '../shared/api/query-client.ts'
import { QueryClientProvider } from '@tanstack/react-query'
import { RepositoriesPage } from '../pages'
import { ReactElement } from 'react'
import './style.scss'

function App(): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <RepositoriesPage />
    </QueryClientProvider>
  )
}

export default App
