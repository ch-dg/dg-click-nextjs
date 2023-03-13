import { render, screen } from '@testing-library/react'
import dgLogo from '@/assets/dgLogo.svg'
import Header from '@/components/molecules/header/header'

describe('Unit:Molecule header', () => {
    const mockPrimaryLogoBar = {
        image: {
            src: dgLogo,
            className: 'ml-[12%] w-auto h-auto',
            alt: 'primary',
        },
        className: 'ml-[12%] w-auto h-auto',
        bgClassName: '',
        container: false,
    }
    const mockSecondaryLogoBar = {
        image: {
            src: dgLogo,
            className: 'ml-[12%] w-auto h-auto',
            alt: 'secondary',
        },
        className: 'ml-[12%] w-auto h-auto',
        bgClassName: '',
        container: false,
    }
    const mockComponent = (
        <Header
            className="mb-24 flex w-screen flex-col justify-center"
            primaryLogoBar={mockPrimaryLogoBar}
            secondaryLogoBar={mockSecondaryLogoBar}
        />
    )

    it('renders LogoBars', () => {
        render(mockComponent)
        const primaryImage = screen.getByRole('img', {
            name: /primary/i,
        })
        const secondaryImage = screen.getByRole('img', {
            name: /secondary/i,
        })

        expect(primaryImage).toBeInTheDocument()
        expect(primaryImage).toHaveAttribute('alt', 'primary')
        expect(primaryImage).toHaveClass('ml-[12%] w-auto h-auto')

        expect(secondaryImage).toBeInTheDocument()
        expect(secondaryImage).toHaveAttribute('alt', 'secondary')
        expect(secondaryImage).toHaveClass('ml-[12%] w-auto h-auto')
    })

    it('checks against snapshot', () => {
        const view = render(mockComponent)
        expect(view).toMatchSnapshot()
    })
})
