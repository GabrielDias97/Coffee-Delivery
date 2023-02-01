import { MapPin, ShoppingCart } from 'phosphor-react'
import LogoCoffeDelivery  from '../../assets/Coffe-Delivery-logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
    return (
        <HeaderContainer>
            <div className='Logo'><img src={LogoCoffeDelivery} alt="Coffe Delivery logo" /></div>
            <div className='Localization'>
                <MapPin size={22} color="#5e60ce" weight="fill" />
                <span className='city/state'>Palhoça, SC</span>
            </div>
            <div className="shopping-cart">
                <ShoppingCart size={22} color="#c47f02" weight="fill" />
            </div>
        </HeaderContainer>
    )
}