import 'tailwindcss/tailwind.css'
import { ThemeProvider } from '../components/ThemeProvider.js'
import { Toaster } from '@/components/ui/toaster'

function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
            <Toaster />
        </ThemeProvider>
    )
}

export default App
