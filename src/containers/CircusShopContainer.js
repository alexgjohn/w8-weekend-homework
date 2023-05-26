import React, { useState } from 'react';
import styled from "styled-components"
import ProductsList from "../components/ProductsList"

const BrowseHeader = styled.h1`
    text-align: center;
`

const CircusShopContainer = () => {


    //need to declare state for the items in basket
    const [itemsInBasket, setItemsInBasket] = useState([]);


    //need functions for adding items to basket
    // const addFavouriteCountry = (newCountry) => {
    //     if (!favouriteCountries.includes(newCountry)) {

    //         console.log(`${newCountry.name.common} was added to favourites.`)

    //         const updatedFavourites = [...favouriteCountries, newCountry]
            
    //         setFavouriteCountries(updatedFavourites)
    //     }
        
        
    // }

    const addItemToBasket = (product) => {
        console.log(`Added ${product.name} to basket.`)
        const updatedItems = [...itemsInBasket, product]
        setItemsInBasket(updatedItems)
    }

    const products = [
        {
            name: "Juggling Balls",
            description: "",
            price: 10,
            imageUrl: "https://media.istockphoto.com/id/123205415/photo/juggling-balls.jpg?s=2048x2048&w=is&k=20&c=tPYzTMoVyxQFpFVARBaV_y8ZcU1FeaNiWpxAENboaCM="
        },
        {
            name: "Clown Outfit",
            description: "",
            price: 30,
            imageUrl: "https://media.istockphoto.com/id/490581587/photo/male-clown-talking-on-a-vintage-telephone.jpg?s=2048x2048&w=is&k=20&c=zqC_HYBgUTr4r1AZI2xz6-zGZvLql1b9m6QclB8GJkM="
        },
        {
            name: "Unicycle",
            description: "",
            price: 50,
            imageUrl: "https://media.istockphoto.com/id/1308435748/photo/full-length-profile-shot-of-a-corpulent-mature-man-riding-a-mono-cycle-and-spreading-arms-i.jpg?s=2048x2048&w=is&k=20&c=PJPMtTHbiy2gnXV7uESlY9pfHHfx7Z2rZKG_oIAqDkw="
        },
        {
            name: "Tiny Car",
            description: "",
            price: 1500,
            imageUrl: "https://thumbs.dreamstime.com/b/2012-fiesta-bowl-parade-oversize-car-clowns-28471004.jpg"
        }
        
    ]


    return(
        <>
            <BrowseHeader>Browse our items</BrowseHeader>
            <ProductsList products={products} addItemToBasket={addItemToBasket}/>
        </>
    )
}

export default CircusShopContainer