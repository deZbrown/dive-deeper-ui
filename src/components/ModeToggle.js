import * as React from 'react'
import { useTheme } from 'next-themes'

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => {
                if (theme === 'dark') setTheme('light')
                else if (theme === 'light') setTheme('system')
                else setTheme('dark')
            }}>
            Toggle Theme
        </button>
    );
}
