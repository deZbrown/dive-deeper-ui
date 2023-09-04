import React from 'react'
import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })
    const { theme, setTheme } = useTheme() // <-- Use this instead of local state

    const toggleDarkMode = () => {
        if (theme === 'dark') setTheme('light')
        else if (theme === 'light') setTheme('system')
        else setTheme('dark')
    }

    return (
        <div
            className={`min-h-screen ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
            }`}>
            <Navigation user={user} className="bg-white dark:bg-gray-800" />

            {/* Dark Mode Toggle */}
            <div className="absolute top-4 right-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme('light')}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme('dark')}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme('system')}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Page Heading */}
            <header className="bg-white dark:bg-gray-800 shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header>

            {/* Page Content */}
            <main className="text-black dark:text-white">{children}</main>
        </div>
    );
}

export default AppLayout
