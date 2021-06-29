import { render } from "@testing-library/react";

import CartItem from './CartItem'


describe('CartItem', () => {
    it('exists', () => {
        expect(typeof CartItem).toBe('function')
    })
    it('has class CartItem', () => {
        const ui = render(<CartItem />)
        expect(ui.getByTestId('CartItem')).toHaveClass('CartItem')
    })
})