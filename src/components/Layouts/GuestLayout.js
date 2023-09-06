import Head from 'next/head'

const GuestLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Deep Dive</title>
            </Head>

            <div className="font-sans text-gray-900 dark:text-gray-100 antialiased">
                {children}
            </div>
        </div>
    )
}

export default GuestLayout
