import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import ProductsContainer from './ProductsContainer';
import Basket from "../components/Basket";
import Home from "../components/Home";
import NavBar from "../components/NavBar";

const RouterContainer = () => {

    const [itemsInBasket, setItemsInBasket] = useState([]);
    const [basketTotal, setBasketTotal] = useState(0)

    useEffect(() => {
        updateBasketTotal();
    }, [itemsInBasket]);


    const updateBasketTotal = () => {
        
        const updatedTotal = itemsInBasket.reduce((total, item) => {
            return total += item.price
        }, 0)
        setBasketTotal(updatedTotal) 
    }

    const addItemToBasket = (product) => {
        console.log(`Added ${product.name} to basket.`)
        const updatedItems = [...itemsInBasket, product]
        setItemsInBasket(updatedItems)
        updateBasketTotal()
        

    }



    return(
        <Router>
                <NavBar/>
                <Routes>
                    <Route path="/products" element={<ProductsContainer 
                        itemsInBasket={itemsInBasket} 
                        addItemToBasket={addItemToBasket}
                        basketTotal={basketTotal}
                        updateBasketTotal={updateBasketTotal}
                        />}
                    />
                    <Route path="/basket" element={<Basket 
                        itemsInBasket={itemsInBasket}
                        basketTotal={basketTotal}
                        />}
                    />
                    <Route path="/" element={<Home/>}/>
                </Routes>

        </Router>
    )
}

export default RouterContainer