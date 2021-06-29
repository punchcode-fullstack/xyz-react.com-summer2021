import { render } from "@testing-library/react";

import Cart from './Cart'


describe('Cart', () => {
    it('exists', () => {
        expect(typeof Cart).toBe('function')
    })
    it('has class Cart', () => {
        const ui = render(<Cart />)
        expect(ui.getByTestId('Cart')).toHaveClass('Cart')
    })
})