import { MapPin, ShoppingCart } from 'phosphor-react'
import LogoCoffeDelivery  from '../../assets/Coffe-Delivery-logo.svg'
import { HeaderContainer, LocalizationInfo, ShoppingInfo, ShoppingCartDiv } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
    return (
        <HeaderContainer>
            <NavLink to={'/'}>
                <div><img src={LogoCoffeDelivery} alt="Coffe Delivery logo" /></div>
            </NavLink>
            <ShoppingInfo>
                <LocalizationInfo>
                    <MapPin size={22} color="#5e60ce" weight="fill" />
                    <span>Palhoça, SC</span>
                </LocalizationInfo>
                <ShoppingCartDiv>
                    <NavLink to={'/checkout'}>
                        <ShoppingCart size={22} color="#c47f02" weight="fill" />
                    </NavLink>
                </ShoppingCartDiv>
            </ShoppingInfo>
        </HeaderContainer>
    )
}