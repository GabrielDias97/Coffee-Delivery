import { Header } from "../../components/Header";
import { AdressFormDiv, AdressInputs, CheckoutContainer, CheckoutLeftDiv, CheckoutRightDiv, LeftBox, PaymentDiv } from "./styles";
import { useForm } from 'react-hook-form'
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

export function Checkout() {
    const { register, handleSubmit } = useForm()

    return (
        <CheckoutContainer>
            <Header />
            <CheckoutLeftDiv>
                <h3>Complete seu pedido</h3>
                <LeftBox>
                    <AdressFormDiv>
                        <div className="adressFormIntro">
                            <h4><MapPinLine size={22} color="#C47F17" weight="light" />Endereço de entrega</h4>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                        <AdressInputs>
                            <div className="cepDiv">
                                <input type="number" placeholder="CEP" />
                            </div>
                            <div className="streetDiv">
                                <input type="text" placeholder="Rua" />
                            </div>
                            <div className="numberDiv">
                                <input type="number" placeholder="Número" id="number" />
                                <input type="text" placeholder="Complemento" id="complement" />
                                <span id="optional">Opcional</span>
                            </div>
                            <div className="neighborhoodDiv">
                                <input type="text" placeholder="Bairro" id="neighborhood" />
                                <input type="text" placeholder="Cidade" id="city" />
                                <input type="text" placeholder="UF" id="UF" />
                            </div>
                        </AdressInputs>
                    </AdressFormDiv>
                    <PaymentDiv>
                        <div className="paymentIntro">
                            <h4><CurrencyDollar size={22} color="#8047F8" weight="light" /> Pagamento</h4>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                        <div className="method">
                            <button><CreditCard size={16} color="#8047F8" weight="light" /> Cartão de crédito</button>
                            <button><Bank size={16} color="#8047F8" weight="light" /> Cartão de débito</button>
                            <button><Money size={16} color="#8047F8" weight="light" /> Dinheiro</button>
                        </div>
                    </PaymentDiv>
                </LeftBox>
            </CheckoutLeftDiv>
            <CheckoutRightDiv>

            </CheckoutRightDiv>
        </CheckoutContainer>
    )
}