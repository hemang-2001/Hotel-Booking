import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' 
import { ClerkProvider } from '@clerk/clerk-react'
import AppErrorState from './components/AppErrorState'
import ErrorBoundary from './components/ErrorBoundary'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const root = createRoot(document.getElementById('root'))

if (!PUBLISHABLE_KEY) {
  root.render(
    <AppErrorState
      title="Missing Clerk configuration"
      message="Add VITE_CLERK_PUBLISHABLE_KEY to your .env file to run the app."
    />
  )
} else {
  root.render(
    <ErrorBoundary>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ClerkProvider>
    </ErrorBoundary>
  )
}
