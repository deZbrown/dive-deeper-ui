import Link from 'next/link'

const NavLink = ({ active = false, children, ...props }) => (
    <Link
        {...props}
        className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${
            active
                ? 'border-indigo-400 text-gray-900 focus:border-indigo-700 dark:border-indigo-600 dark:text-gray-300'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600 dark:focus:text-gray-300 dark:focus:border-gray-600'
        }`}>
        {children}
    </Link>
)

export default NavLink
