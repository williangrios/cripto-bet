'use client'
import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute='class'>
            {children}
        </ThemeProvider>
    )
}