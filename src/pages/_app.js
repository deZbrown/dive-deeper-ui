import 'tailwindcss/tailwind.css'
import { ThemeProvider } from '../components/ThemeProvider.js'

function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default App
