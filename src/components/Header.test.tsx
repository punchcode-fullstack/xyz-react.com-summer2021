import { render } from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom'

import Header from './Header'

function renderUi(){
    return render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    )
}
describe('Header', () => {
    it('exists', () => {
        expect(typeof Header).toBe('function')
    })
    it('has class Header', () => {
        const ui = renderUi()
        expect(ui.getByTestId("Header")).toHaveClass('Header')
    })
    it('has a link to the shop/home page', () => {
        const ui = renderUi()
        expect(ui.getByText('XYZ Corporation').closest('a')).toHaveAttribute('href', '/')
    })
    it('has a link to the cart', () => {
        const ui = renderUi()
        expect(ui.getByText('Cart').closest('a')).toHaveAttribute('href', '/cart')
    })
})