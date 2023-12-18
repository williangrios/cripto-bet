import Link from 'next/link'

interface FooterIconProps {
    text: string
    children: any
    link: string
}

export default function FooterIcon(props: FooterIconProps): JSX.Element {
    return (
        <Link
            href={props.link} target="_blank"
            className="text-gray-400 hover:text-secondary-medium hover:scale-110 transition-all ease-out"
        >
            {props.children}
            <span className="sr-only">{props.text}</span>
        </Link>
    )
}