import React from 'react'

function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col max-w-6xl m-auto px-4 text-text-light dark:text-text-dark'>
            {children}
        </div>
    )
}

export default Container