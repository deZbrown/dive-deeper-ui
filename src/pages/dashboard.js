import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

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
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mt-8">
                        <div className="p-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 leading-tight mb-4">
                                To-Do List
                            </h3>
                            <div>
                                <input
                                    type="text"
                                    placeholder="New task..."
                                    className="border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600"
                                />
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                                    Add Task
                                </button>
                            </div>
                            <ul className="mt-6">
                                <li className="border-b border-gray-300 dark:border-gray-700 py-2">
                                    <span className="text-gray-800 dark:text-gray-200">Task 1</span>
                                    <button className="float-right bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                                        Delete
                                    </button>
                                </li>
                                <li className="border-b border-gray-300 dark:border-gray-700 py-2">
                                    <span className="text-gray-800 dark:text-gray-200">Task 2</span>
                                    <button className="float-right bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                                        Delete
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End of To-Do App Section */}
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard
