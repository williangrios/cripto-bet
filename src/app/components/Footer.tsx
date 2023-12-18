import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import FooterIcon from './FooterIcon'
import Logo from './Logo'
import siteConfig from '../../../config/site'

function Footer() {
    return (
        <Container>
            <div className="flex flex-col items-center py-10 space-y-4">
                <Logo />
                <div className="flex space-x-10 flex-row py-10">
                    <FooterIcon
                        text="Facebbook"
                        link={siteConfig.socialLinks.facebook}
                    ><FaFacebookF className='w-8 h-8' /></FooterIcon>
                    <FooterIcon
                        text="Instagram"
                        link={siteConfig.socialLinks.instagram}
                    ><FaInstagram className='w-8 h-8' /></FooterIcon>
                    <FooterIcon
                        text="X"
                        link={siteConfig.socialLinks.x}
                    ><FaTwitter className='w-8 h-8' /></FooterIcon>
                    <FooterIcon
                        text="Youtube"
                        link={siteConfig.socialLinks.youtube}
                    ><FaYoutube className='w-8 h-8' /></FooterIcon>
                </div>
                <p>© 2023 Criptobet™ é uma marca registrada. {new Date().getFullYear()}</p>
                <p>Desenlvolvido por <Link className='underline hover:text-red-500' target='_blank' href='https://wrsolucoesdigitais.com.br/'>wrsolucoesdigitais.com.br</Link></p>
            </div>
        </Container>
    )
}

export default Footer