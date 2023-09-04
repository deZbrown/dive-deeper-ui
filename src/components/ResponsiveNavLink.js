import Link from 'next/link'

const ResponsiveNavLink = ({ active = false, children, ...props }) => (
    <Link
        {...props}
        className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${
            active
                ? 'border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 dark:border-indigo-600 dark:text-indigo-300 dark:bg-indigo-900 dark:focus:text-indigo-400 dark:focus:bg-indigo-800'
                : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 dark:border-transparent dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:text-gray-300 dark:focus:bg-gray-700 dark:focus:border-gray-600'
        }`}>
        {children}
    </Link>
)

export const ResponsiveNavButton = props => (
    <button
        className="block w-full pl-3 pr-4 py-2 border-l-4 text-left text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 dark:border-transparent dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:text-gray-300 dark:focus:bg-gray-700 dark:focus:border-gray-600"
        {...props}
    />
)

export default ResponsiveNavLink
