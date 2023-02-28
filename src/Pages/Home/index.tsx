import { createContext } from 'react'
import { CoffeeCard } from "../../components/CoffeeCard";
import { Header } from "../../components/Header";
import { Intro } from "./Intro";
import { CoffeesCardContainer, CoffeesContainer, HomeContainer } from './styles'


export function Home() {

    return (
        <HomeContainer>
            <Header />
            <Intro />
            <div className="ourCoffees"><h2>Nossos cafés</h2></div>
            <CoffeesContainer>
                <CoffeesCardContainer>
                    <CoffeeCard
                        key={1} 
                        name='Expresso Tradicional'
                        imgSrc='/Coffees/Expresso.png'
                        tag1='tradicional' 
                        tag2=''
                        tag3=''
                        description='O tradicional café feito com água quente e grãos moídos'
                        price = '10,00' 
                    
                    />
                    <CoffeeCard
                        key={2} 
                        name='Expresso Americano'
                        imgSrc='/Coffees/Americano.png'
                        tag1='tradicional' 
                        tag2=''
                        tag3=''
                        description='Expresso diluído, menos intenso que o tradicional'
                        price = '12,00' 
                    
                    />

                    <CoffeeCard
                        key={3} 
                        name='Expresso Cremoso'
                        imgSrc='/Coffees/Expresso-Cremoso.png'
                        tag1='tradicional' 
                        tag2=''
                        tag3=''
                        description='Café expresso tradicional com espuma cremosa'
                        price = '13,00' 
                    
                    />

                    <CoffeeCard
                        key={4} 
                        name='Expresso Gelado'
                        imgSrc='/Coffees/Café-Gelado.png'
                        tag1='tradicional' 
                        tag2='gelado'
                        tag3=''
                        description='Bebida preparada com café expresso e cubos de gelo'
                        price = '11,00' 
                    
                    />

                    <CoffeeCard
                        key={5} 
                        name='Café com leite'
                        imgSrc='/Coffees/Café-com-leite.png'
                        tag1='tradicional' 
                        tag2='com leite'
                        tag3=''
                        description='Meio a meio de expresso tradicional com leite vaporizado'
                        price = '10,00' 
                    
                    />

                    <CoffeeCard
                        key={6} 
                        name='Latte'
                        imgSrc='/Coffees/Latte.png'
                        tag1='tradicional' 
                        tag2='com leite'
                        tag3=''
                        description='Uma dose de café expresso com o dobro de leite e espuma cremosa'
                        price = '12,00' 
                    
                    />

                    <CoffeeCard
                        key={7} 
                        name='Capuccino'
                        imgSrc='/Coffees/Capuccino.png'
                        tag1='tradicional' 
                        tag2='com leite'
                        tag3=''
                        description='Bebida com canela feita de doses iguais de café, leite e espuma'
                        price = '12,00' 
                    
                    />

                    <CoffeeCard
                        key={8} 
                        name='Macchiato'
                        imgSrc='/Coffees/Macchiato.png'
                        tag1='tradicional' 
                        tag2='com leite'
                        tag3=''
                        description='Café expresso misturado com um pouco de leite quente e espuma'
                        price = '11,00' 
                    
                    />

                    <CoffeeCard
                        key={9} 
                        name='Mocaccino'
                        imgSrc='/Coffees/Mocaccino.png'
                        tag1='tradicional' 
                        tag2='com leite'
                        tag3=''
                        description='Café expresso com calda de chocolate, pouco leite e espuma'
                        price = '14,00' 
                    
                    />

                    <CoffeeCard
                        key={10} 
                        name='Chocolate Quente'
                        imgSrc='/Coffees/Chocolate-Quente.png'
                        tag1='especial' 
                        tag2='com leite'
                        tag3=''
                        description='Bebida feita com chocolate dissolvido no leite quente e café'
                        price = '11,00' 
                    
                    />

                    <CoffeeCard
                        key={11} 
                        name='Cubano'
                        imgSrc='/Coffees/Expresso.png'
                        tag1='especial' 
                        tag2='alcoólico'
                        tag3='gelado'
                        description='Drink gelado de café expresso com rum, creme de leite e hortelã'
                        price = '15,00' 
                    
                    />

                    <CoffeeCard
                        key={12} 
                        name='Havaiano'
                        imgSrc='/Coffees/Havaiano.png'
                        tag1='especial' 
                        tag2=''
                        tag3=''
                        description='Bebida adocicada preparada com café e leite de coco'
                        price = '15,00' 
                    
                    />

                    <CoffeeCard
                        key={13}
                        name='Árabe'
                        imgSrc='/Coffees/Árabe.png'
                        tag1='especial' 
                        tag2=''
                        tag3=''
                        description='Bebida preparada com grãos de café árabe e especiarias'
                        price = '16,00' 
                    
                    />

                    <CoffeeCard
                        key={14} 
                        name='Irlandês'
                        imgSrc='/Coffees/Irlandês.png'
                        tag1='tradicional' 
                        tag2=''
                        tag3=''
                        description='Bebida a base de café, uísque irlandês, açúcar e chantilly'
                        price = '17,00' 
                    
                    />
                </CoffeesCardContainer>
            </CoffeesContainer>
        </HomeContainer>
    )
}