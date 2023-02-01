import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'

export function CofeeCards() {
    return (
        <div className="cofeeContainer">
            <div className="expresso-tradicional">
                <figure className="coffee-intro">
                    <img src='Coffees/Expresso.png' alt="imagem de um café expresso tradicional" />
                    <p>Tradicional</p>
                    <h3>Expresso Tradicional</h3>
                    <figcaption>
                        <p>O tradicional café feito com água quente e grãos moídos</p>
                    </figcaption>
                </figure>
                <div className="buy">
                    <div className="price">
                        <span className="local-currency">R$</span>
                        <span className="cost">9,90</span>
                    </div>
                    <div className="quantitySelector">
                        <Plus size={14} color="#8047F8" weight="fill" />
                        <input type="number" name="quantity" id="express-quantity" />
                        <Minus size={14} color="#8047F8" weight="fill" />
                    </div>
                    <button className='cartAddButton'><ShoppingCartSimple size={32} color="#000" weight="fill" /></button>
                </div>
            </div>

            <div className="expresso-americano">
                <figure className="coffee-intro">
                    <img src='Coffees/Americano.png' alt="imagem de um café expresso americano" />
                    <p>Tradicional</p>
                    <h3>Expresso Americano</h3>
                    <figcaption>
                        <p>Expresso diluído, menos intenso que o tradicional</p>
                    </figcaption>
                </figure>
                <div className="buy">
                    <div className="price">
                        <span className="local-currency">R$</span>
                        <span className="cost">9,90</span>
                    </div>
                    <div className="quantitySelector">
                        <Plus size={14} color="#8047F8" weight="fill" />
                        <input type="number" name="quantity" id="american-quantity" />
                        <Minus size={14} color="#8047F8" weight="fill" />
                    </div>
                    <button className='cartAddButton'><ShoppingCartSimple size={32} color="#000" weight="fill" /></button>
                </div>
            </div>

            <div className="expresso-cremoso">
                <figure className="coffee-intro">
                    <img src='Coffees/Expresso-Cremoso.png' alt="imagem de um café expresso cremoso" />
                    <p>Tradicional</p>
                    <h3>Expresso Cremoso</h3>
                    <figcaption>
                        <p>Café expresso tradicional com espuma cremosa</p>
                    </figcaption>
                </figure>
                <div className="buy">
                    <div className="price">
                        <span className="local-currency">R$</span>
                        <span className="cost">9,90</span>
                    </div>
                    <div className="quantitySelector">
                        <Plus size={14} color="#8047F8" weight="fill" />
                        <input type="number" name="quantity" id="creamExpress-quantity" />
                        <Minus size={14} color="#8047F8" weight="fill" />
                    </div>
                    <button className='cartAddButton'><ShoppingCartSimple size={32} color="#000" weight="fill" /></button>
                </div>
            </div>

            <div className="expresso-gelado">
                <figure className="coffee-intro">
                    <img src='Coffees/Café-Gelado.png' alt="imagem de um café expresso gelado" />
                    <p>Tradicional</p> 
                    <p>Gelado</p>
                    <h3>Expresso Gelado</h3>
                    <figcaption>
                        <p>Bebida preparada com café expresso e cubos de gelo</p>
                    </figcaption>
                </figure>
                <div className="buy">
                    <div className="price">
                        <span className="local-currency">R$</span>
                        <span className="cost">9,90</span>
                    </div>
                    <div className="quantitySelector">
                        <Plus size={14} color="#8047F8" weight="fill" />
                        <input type="number" name="quantity" id="iceExpress-quantity" />
                        <Minus size={14} color="#8047F8" weight="fill" />
                    </div>
                    <button className='cartAddButton'><ShoppingCartSimple size={32} color="#000" weight="fill" /></button>
                </div>
            </div>
        </div>
    )
}