import { render } from "@testing-library/react";

import Footer from './Footer'

describe('Footer', () => {
    it('exists', () => {
        expect(typeof Footer).toBe('function')
    })
    it('has class Footer', () => {
        const ui = render(<Footer />)
        expect(ui.getByTestId('Footer')).toHaveClass('Footer')
    })
    it('has the copyright notice', () => {
        const ui = render(<Footer />)
        expect(ui.getByTestId('Footer')).toHaveTextContent('© 2021 XYZ Corporation, all rights reserved')
    })
})