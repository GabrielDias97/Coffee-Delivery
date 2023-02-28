import { createContext, ReactNode } from 'react'
import { CheckoutCoffeeCard } from '../components/CheckoutCoffeeCard'

export const AddToCartButtonContext = createContext({} as AddToCartButtonType)

interface AddToCartButtonType {
    handleAddToCartButton: () => JSX.Element
}

interface AddToCartButtonProviderProps {
    children: ReactNode
}

export function handleAddToCartButton() {
    return <CheckoutCoffeeCard />
}

export function AddToCartButtonProvider({ children }: AddToCartButtonProviderProps) {
    return (
        <AddToCartButtonContext.Provider value={{ handleAddToCartButton }}>
            {children}
        </AddToCartButtonContext.Provider>
    )
}