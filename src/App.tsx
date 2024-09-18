import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import './App.css'
import '@mantine/core/styles.css';
import Routes from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
function App() {
  const queryClient = new QueryClient();

  return (
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <ColorSchemeScript />
        <Toaster />
        <Routes />
      </QueryClientProvider>
    </MantineProvider>
  )
}

export default App
