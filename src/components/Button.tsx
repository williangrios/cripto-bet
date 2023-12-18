'use client'
import React from 'react'
import { toast } from 'react-hot-toast'

interface ButtonProps {
    children: React.ReactNode
    onClick?: any
}

function Button({ children, onClick }: ButtonProps) {

    function connect() {
        toast.success('Em breve você poderá fazer suas apostas utilizando criptomoedas!! Aguarde...')
    }

    return (
        <button className='cursor-pointer bg-gradient-to-tr from-primary-strong to-secondary-strong px-6 py-3 font-bold rounded-md text-white' onClick={connect}>{children}</button>
    )
}

export default Button