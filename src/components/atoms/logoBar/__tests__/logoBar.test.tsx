import { render, screen } from '@testing-library/react'
import LogoBar from '@/components/atoms/logoBar/logoBar'
import dgLogo from '@/assets/dgLogo.svg'

describe('Unit:Atom logoBar', () => {
    // optional attributes included
    const mockImageOptionalAttr = {
        src: dgLogo,
        className: 'ml-[12%] w-auto h-auto',
        alt: 'test',
        priority: true,
    }
    const mockComponentOptionalAttr = (
        <LogoBar
            className="mb-24 flex w-screen flex-col justify-center"
            image={mockImageOptionalAttr}
        />
    )

    // only mandatory attributes
    const mockImageMandatoryAttr = {
        src: dgLogo,
        className: 'ml-[12%] w-auto h-auto',
    }
    const mockComponentMandatoryAttr = (
        <LogoBar
            className="mb-24 flex w-screen flex-col justify-center"
            image={mockImageMandatoryAttr}
        />
    )

    it('renders an image with optional attr', () => {
        render(mockComponentOptionalAttr)
        const image = screen.getByRole('img', {
            name: /test/i,
        })

        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute('alt', 'test')
        expect(image).toHaveClass('ml-[12%] w-auto h-auto')
    })

    it('checks against snapshot with optional attr', () => {
        const view = render(mockComponentOptionalAttr)
        expect(view).toMatchSnapshot()
    })

    it('renders an image with mandatory attr', () => {
        render(mockComponentMandatoryAttr)
        const image = screen.getByRole('img', {
            name: /logo/i,
        })

        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute('alt', 'logo')
        expect(image).toHaveClass('ml-[12%] w-auto h-auto')
    })

    it('checks against snapshot with mandatory attr', () => {
        const view = render(mockComponentMandatoryAttr)
        expect(view).toMatchSnapshot()
    })
})
