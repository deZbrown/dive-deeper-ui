import React from 'react'
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined'

const AboutUs = () => {
    return (
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 flex items-center">
                    <LibraryBooksOutlinedIcon fontSize="large" />

                    <div className="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white">
                        About Us
                    </div>
                </div>

                <div className="ml-12">
                    <div className="text-gray-600 dark:text-gray-400 text-md mb-5 pr-8">
                        "Dive Deeper" is inspired by the renowned productivity
                        methodology from the book "Getting Things Done." Our app
                        helps you streamline your tasks, declutter your mind,
                        and focus on what truly matters. Dive into a world where
                        tasks become achievable actions and where your goals are
                        always within reach. Dive Deeper. Get things done.
                        Simplified.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
