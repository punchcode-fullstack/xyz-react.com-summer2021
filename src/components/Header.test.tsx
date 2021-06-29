import { render } from "@testing-library/react";
import Header from './Header'

describe('Header', () => {
    it('exists', () => {
        expect(typeof Header).toBe('function')
    })
    it('has class Header', () => {
        const ui = render(<Header />)
        expect(ui.getByTestId("Header")).toHaveClass('Header')
    })
})