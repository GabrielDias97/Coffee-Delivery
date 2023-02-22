import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
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

    const [quantityInputValue, setQuantityInputValue] = useState(0)

    const handleQuantityChange = (e:React.ChangeEvent<HTMLInputElement>) : void => {
        const inputValue = parseInt(e.target.value)
        setQuantityInputValue(inputValue)
    }

    const handleMoreOneButton = () => {
        if (quantityInputValue <= 99) {
            setQuantityInputValue(quantityInputValue + 1)
        }
    }

    const handleLessOneOneButton = () => {
        if(quantityInputValue > 0) {
            setQuantityInputValue(quantityInputValue - 1)
        }
    }

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
                            <Plus size={14} color="#8047F8" weight="fill" onClick={handleMoreOneButton} />
                            <input type="number" name="quantity" id="express-quantity" value={quantityInputValue} max='99' min={0} onChange={handleQuantityChange}  />
                            <Minus size={14} color="#8047F8" weight="fill" onClick={handleLessOneOneButton} />
                        </div>
                        <button className='cartAddButton'><ShoppingCartSimple size={22} color="#FFF" weight="fill" /></button>
                    </BuyArea>
                </div>
            </Coffees>
    )
}