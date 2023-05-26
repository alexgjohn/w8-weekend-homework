import React, { useState } from 'react';
import styled from "styled-components"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ProductsList from "../components/ProductsList"
import Basket from '../components/Basket';
import Home from '../components/Home';

const BrowseHeader = styled.h1`
    text-align: center;
`

const ProductsContainer = ({addItemToBasket, itemsInBasket, basketTotal}) => {


    const products = [
        {
            name: "Juggling Balls",
            description: "All the balls you need for a really good time.",
            price: 10,
            imageUrl: "https://media.istockphoto.com/id/123205415/photo/juggling-balls.jpg?s=2048x2048&w=is&k=20&c=tPYzTMoVyxQFpFVARBaV_y8ZcU1FeaNiWpxAENboaCM="
        },
        {
            name: "Clown Outfit",
            description: "Dress the part when you want to tickle or terrify.",
            price: 30,
            imageUrl: "https://media.istockphoto.com/id/490581587/photo/male-clown-talking-on-a-vintage-telephone.jpg?s=2048x2048&w=is&k=20&c=zqC_HYBgUTr4r1AZI2xz6-zGZvLql1b9m6QclB8GJkM="
        },
        {
            name: "Unicycle",
            description: "One wheel is enough. Don't get greedy.",
            price: 50,
            imageUrl: "https://media.istockphoto.com/id/1308435748/photo/full-length-profile-shot-of-a-corpulent-mature-man-riding-a-mono-cycle-and-spreading-arms-i.jpg?s=2048x2048&w=is&k=20&c=PJPMtTHbiy2gnXV7uESlY9pfHHfx7Z2rZKG_oIAqDkw="
        },
        {
            name: "Tiny Car",
            description: "Army of clown not included.",
            price: 1500,
            imageUrl: "https://thumbs.dreamstime.com/b/2012-fiesta-bowl-parade-oversize-car-clowns-28471004.jpg"
        }
        
    ]


    return(
        <>
        

            <main>
                <BrowseHeader>Browse our items</BrowseHeader>
                {itemsInBasket.length ? 
                    <>
                        <footer>
                            <p>You have {itemsInBasket.length} items in the basket.</p>
                            <p>Shopping total: £{basketTotal}</p>
                        </footer>
                        
                        <Link to="/basket">View basket?</Link>
                    </>
                    : null
                }
                <ProductsList products={products} addItemToBasket={addItemToBasket}/>
                
            </main>
        </>
    )
}

export default ProductsContainer