import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { FeatureList, RightDiv, IntroDiv, IntroHeaders, LeftDiv } from "./styles";

export function Intro() {
    return (
        <IntroDiv>
                <LeftDiv>
                <IntroHeaders>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </IntroHeaders>
                <FeatureList>
                    <div id="featureListLeftDiv">
                        <div id="simplePurchase">
                            <span id="shoppingCartFeaturesIcon"><ShoppingCart size={16} color="#ffffff" weight="fill" /></span>
                            Compra simples e segura
                        </div>
                        <div id="fastDelivery">
                            <span id="timerFeaturesIcon"><Timer size={16} color="#ffffff" weight="fill" /></span>
                            Entrega rápida e rastreada
                        </div>
                    </div>

                    <div id="featureListRightDiv">
                        <div id="packing">
                            <span id="packageFeaturesIcon"><Package size={16} color="#ffffff" weight="fill" /></span>
                            Embalagem mantém o café intacto
                        </div>

                        <div id="freshCoffee">
                            <span id="coffeeFeaturesIcon"><Coffee size={16} color="#ffffff" weight="fill" /></span>
                            O café chega fresquinho até você
                        </div>
                    </div>
                </FeatureList>
                </LeftDiv>
                <RightDiv>
                    <img src="/CoffeeIntro.png" alt="" />
                </RightDiv>
        </IntroDiv>
    )
}