import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'
import { useState, createContext, useContext } from 'react'
import { BuyArea, Coffees } from './styles'
import { useForm } from 'react-hook-form'
import { AddToCartButtonContext } from '../../contexts/AddToCartButtonContext'

interface CoffeeCardProps {
    key: number
    name: string
    imgSrc: string
    tag1: string
    tag2?: string
    tag3?: string
    price: string // Consertar para colocar número
    description: string
}

export function CoffeeCard({name, imgSrc, tag1, tag2, tag3, price, description }: CoffeeCardProps) {
    const { handleAddToCartButton } = useContext(AddToCartButtonContext)

    const { register, handleSubmit, watch, setValue, getValues } = useForm()

    let quantity = watch('quantity')

    const handleMoreOneButton = () => {
        const quantityCurrentValue = getValues('quantity')
        if (quantityCurrentValue < 99) {
            setValue('quantity', parseInt(quantityCurrentValue + 1))
        }
    }

    const handleLessOneOneButton = () => {
        const quantityCurrentValue = getValues('quantity')
        if (quantityCurrentValue > 0) {
            setValue('quantity', parseInt(quantityCurrentValue) - 1)
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
                            <input 
                                type="number" 
                                id="express-quantity"
                                defaultValue={0}
                                  
                                {...register('quantity', {  
                                    maxLength: 2,
                                    max: 99,
                                    min: 0,
                                    
                                })}  
                            />
                            <Minus size={14} color="#8047F8" weight="fill" onClick={handleLessOneOneButton} />
                        </div>
                        <button className='cartAddButton' onClick={handleAddToCartButton}><ShoppingCartSimple size={22} color="#FFF" weight="fill" /></button>
                    </BuyArea>
                </div>
            </Coffees>
    )
}