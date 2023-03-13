import Image from 'next/image'

export type ILogoBarImage = {
    src: string
    className: string
    alt?: string
    priority?: boolean
}

export type ILogoBar = {
    bgClassName: string
    className: string
    image: ILogoBarImage
}

const LogoBar = ({ className, image, bgClassName }: ILogoBar): JSX.Element => {
    return (
        <div className={bgClassName}>
            <div className="container mx-auto">
                <div className={className}>
                    <Image
                        className={image.className}
                        src={image.src}
                        alt={image.alt ?? 'logo'}
                        priority={image.priority}
                    ></Image>
                </div>
            </div>
        </div>
    )
}

export default LogoBar
