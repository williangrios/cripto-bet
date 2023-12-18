import React from 'react'
import Container from './Container'
import Button from './Button'

function Header() {
    return (
        <Container>
            <div className="flex justify-between items-center h-[90px]">
                <div className="text-4xl font-bold">
                    <span className='text-secondary-medium'>Cripto</span>
                    <span className='text-primary-medium'>Bet</span>
                </div>
                <Button>Conectar wallet</Button>
            </div>
        </Container>
    )
}

export default Header