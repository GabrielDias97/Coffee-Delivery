import { Minus, Plus, Trash } from "phosphor-react";
import { BorderAtBottom, CardContainer } from "./styles";


export function CheckoutCoffeeCard() {
    return (
        <>
        <CardContainer>
            <div className="imgDiv">
                <img src="/Coffees/Expresso.png" alt="Imagem de um café expresso tradicional" />
            </div>
            <div className="coffeeInfoDiv">
                <h4>Expresso Tradicional</h4>
                <div className="midDiv">
                    <div className="quantityDiv">
                        <Plus size={14} color="#8047F8" weight="fill" />
                        <input type="number" name="quantity" defaultValue={1} />
                        <Minus size={14} color="#8047F8" weight="fill" />
                    </div>
                    <div className="removeDiv">
                        <Trash size={16} color="#8047F8" weight="light" />
                        <span>Remover</span>
                    </div>
                </div>
            </div>
            <div className="price">
                <span className="local-currency">R$</span>
                <span className="cost">9,90</span>
            </div>
        </CardContainer>
        <BorderAtBottom></BorderAtBottom>
        </>
        
    )
}