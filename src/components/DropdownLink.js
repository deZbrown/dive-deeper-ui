import Link from 'next/link'
import { Menu } from '@headlessui/react'

const DropdownLink = ({ children, ...props }) => (
    <Menu.Item>
        {({ active }) => (
            <Link
                {...props}
                className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
                    active ? 'bg-gray-100 dark:bg-gray-700' : ''
                } focus:outline-none transition duration-150 ease-in-out dark:text-gray-300`}>
                {children}
            </Link>
        )}
    </Menu.Item>
)

export const DropdownButton = ({ children, ...props }) => (
    <Menu.Item>
        {({ active }) => (
            <button
                className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
                    active ? 'bg-gray-100 dark:bg-gray-700' : ''
                } focus:outline-none transition duration-150 ease-in-out dark:text-gray-300`}>
                {children}
            </button>
        )}
    </Menu.Item>
)

export default DropdownLink
