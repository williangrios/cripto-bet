'use client'
import React, { useEffect, useState } from 'react'
import Container from './Container'
import Button from './Button'
import { useTheme } from 'next-themes'
import { BsSun } from 'react-icons/bs'
import { FiMoon } from 'react-icons/fi'
import Logo from './Logo'

function Header() {
    const { theme, setTheme } = useTheme()
    return (
        <Container>
            <div className="flex justify-between items-center h-[90px]">
                <Logo />
                <div className="flex items-center justify-center gap-4">
                    {theme === 'dark' ? (
                        <BsSun size={25} cursor='pointer' onClick={() => setTheme('light')} />) : (
                        <FiMoon size={25} cursor='pointer' onClick={() => setTheme('dark')} />
                    )}
                    <Button>Conectar wallet</Button>
                </div>
            </div>
        </Container>
    )
}

export default Header