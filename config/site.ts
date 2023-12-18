export interface SiteConfig {
    siteName: string
    siteUrl: string
    description: string
    socialLinks: {
        x: string
        youtube: string
        instagram: string
        facebook: string
    }
}

const siteConfig: SiteConfig = {
    siteName: 'CriptoBet',
    siteUrl: 'https://criptobet.com.br',
    description: 'Site de apostas utilizando criptomoedas',
    socialLinks: {
        x: 'https://x.com',
        youtube: 'https://youtube.com',
        instagram: 'https://instagram.com',
        facebook: 'https://facebook.com',
    }
}

export default siteConfig