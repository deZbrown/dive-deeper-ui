import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import Footer from '@/components/Layouts/Footer'
import Register from '@/components/Register'
import Logo from '@/components/Logo'
import AboutUs from '@/components/AboutUs'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Deep Dive</title>
            </Head>

            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <Register user={user} />

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 mt-4">
                    <Logo />

                    <AboutUs />

                    <Footer />
                </div>
            </div>
        </>
    )
}
