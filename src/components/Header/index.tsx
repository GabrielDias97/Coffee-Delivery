import { MapPin, ShoppingCart } from 'phosphor-react'
import LogoCoffeDelivery  from '../../assets/Coffe-Delivery-logo.svg'
import { HeaderContainer, LocalizationInfo, ShoppingInfo, ShoppingCartDiv } from './styles'

export function Header() {
    return (
        <HeaderContainer>
            <div><img src={LogoCoffeDelivery} alt="Coffe Delivery logo" /></div>
            <ShoppingInfo>
                <LocalizationInfo>
                    <MapPin size={22} color="#5e60ce" weight="fill" />
                    <span>Palhoça, SC</span>
                </LocalizationInfo>
                <ShoppingCartDiv>
                    <ShoppingCart size={22} color="#c47f02" weight="fill" />
                </ShoppingCartDiv>
            </ShoppingInfo>
        </HeaderContainer>
    )
}