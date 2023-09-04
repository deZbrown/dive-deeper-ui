import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import ToDo from '@/components/ToDo'

const Dashboard = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }>
            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            <div className="py-12 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            You're logged in!
                        </div>
                    </div>

                    {/* To-Do App Section */}
                    <ToDo />
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard
