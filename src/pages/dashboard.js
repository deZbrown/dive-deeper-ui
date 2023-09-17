import { useEffect } from 'react'
import { useToast } from '@/components/ui/use-toast'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import ToDo from '@/components/ToDo'

const Dashboard = () => {
    const { toast } = useToast()

    useEffect(() => {
        toast({
            className:
                'bottom-0 right-0 flex fixed md:max-w-[420px] md:bottom-4 md:right-4',
            title: 'Welcome!',
            description: "You're logged in!",
        })
    }, [])

    return (
        <AppLayout
            header={
                <h2
                    className="
                        font-semibold
                        text-xl
                        text-gray-800
                        dark:text-gray-200
                        leading-tight
                        ">
                    Dive Depper - Dashboard
                </h2>
            }>
            <Head>
                <title>Dive Depper - Dashboard</title>
            </Head>

            <div className="dark:bg-gray-900">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* To-Do App Section */}
                    <ToDo />
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard
