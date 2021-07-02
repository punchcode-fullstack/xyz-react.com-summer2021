import type {CartItemType} from '../../components/CartItem.types'
import calculateCart from './calculateCart'

function checkout(cartItems: CartItemType[], data: any){
    // should raise an error
    if(cartItems.length === 0) return

    const subtotal = calculateCart(cartItems)
    const shippingAddress = `${data.street1}\n${data.street2}\n${data.city}, ${data.state} ${data.zipcode}`
    const notification = `${data.name} has been charged ${subtotal} for items delivered to \n\n${shippingAddress}\n\n Notifications will be sent to ${data.email}`
    alert(notification)

}
export {checkout}
export default checkout