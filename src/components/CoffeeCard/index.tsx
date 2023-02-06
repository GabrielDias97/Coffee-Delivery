import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'
import { BuyArea, Coffees } from './styles'

interface CoffeeCardProps {
    name: string
    imgSrc: string
    tag1: string
    tag2?: string
    tag3?: string
    price: string // Consertar para colocar número
    description: string
}

export function CoffeeCard({name, imgSrc, tag1, tag2, tag3, price, description }: CoffeeCardProps) {

    function tagsRenderization() {
        if(!tag2 && !tag3) {
            return <p className='tag'>{tag1}</p>
        } if (!tag3) {
            return (
            <>
                <p className='tag'>{tag1}</p>
                <p className='tag'>{tag2}</p>
            </>
            )
        } else {
            return (
            <>
                <p className='tag'>{tag1}</p>
                <p className='tag'>{tag2}</p>
                <p className='tag'>{tag3}</p>
            </>
            )
        }
    }

    return (
            <Coffees>
                <div className="coffeesCards">
                    <figure>
                        <img src={imgSrc} alt={`Imagem de um café ${name}`}  />
                    </figure>
                    <div className='tagDiv'>
                        {tagsRenderization()}
                    </div>
                    <h3>{name}</h3>
                    <figcaption>
                        <p>{description}</p>
                    </figcaption>
                    <BuyArea>
                        <div className="price">
                            <span className="local-currency">R$</span>
                            <span className="cost">{price}</span>
                        </div>
                        <div className="quantitySelector">
                            <Plus size={14} color="#8047F8" weight="fill" />
                            <input type="number" name="quantity" id="express-quantity" defaultValue={0} />
                            <Minus size={14} color="#8047F8" weight="fill" />
                        </div>
                        <button className='cartAddButton'><ShoppingCartSimple size={22} color="#FFF" weight="fill" /></button>
                    </BuyArea>
                </div>
            </Coffees>
    )
}