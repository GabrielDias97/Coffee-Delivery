import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Header } from "../../components/Header";
import { LeftDiv, RightDiv, SuccessContainer } from "./styles";

export function Success() {
    return (
        <SuccessContainer>
            <Header />
            <LeftDiv>
                <div className="successIntro">
                    <h2>Uhu! Pedido confirmado</h2>
                    <p>Agora é só aguardar que o café logo chegará até você</p>
                </div>
                <div className="successInfo">
                    <div className="deliveryAdress">
                        <div className="mapIcon"><MapPin size={16} color="#ffffff" weight="fill" /></div>
                        <div className="textContent">
                            <p>Entrega em <span>Rua João Daniel Martinelli, 102</span></p>
                            <p>Farrapos - Porto Alegre, RS</p>
                        </div>
                    </div>
                    <div className="estimatedTime">
                        <div className="timerIcon"><Timer size={16} color="#ffffff" weight="fill" /></div>
                        <p>Previsão de entrega</p>
                        <span>20 - 30 min</span>
                    </div>
                    <div className="paymentInfo">
                        <div className="moneyIcon"><CurrencyDollar size={16} color="#ffffff" weight="fill" /></div>
                        <p>Pagamento na entrega</p>
                        <span>Cartão de Crédito</span>
                    </div>
                </div>
            </LeftDiv>
            <RightDiv>

            </RightDiv>
        </SuccessContainer>
    )
}