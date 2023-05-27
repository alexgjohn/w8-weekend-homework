import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import ProductsContainer from './ProductsContainer';
import Basket from "../components/Basket";
import Home from "../components/Home";
import Checkout from "../components/Checkout";
import NavBar from "../components/NavBar";
import ThankYou from "../components/ThankYou";


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
        product.id = Date.now()
        const updatedItems = [...itemsInBasket, product]
        setItemsInBasket(updatedItems)
        updateBasketTotal()
        
    }

    const applyDiscount = () => {
        const discountedTotal = (basketTotal * 0.8)
        setBasketTotal(discountedTotal)
    }


//think i need to refactor the below to take in an id, which means each product/item needs an id.
    const removeItemFromBasket = (id) => {
        const updatedItems = itemsInBasket.filter((item) => {
            return String(item.id) !== String(id)
        })
        setItemsInBasket(updatedItems)
        updateBasketTotal()

    }

    const clearBasket = () => {
        const emptyBasket = []
        setItemsInBasket(emptyBasket)
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
                    
                        />}
                    />
                    <Route path="/basket" element={<Basket 
                        itemsInBasket={itemsInBasket}
                        basketTotal={basketTotal}
                        removeItemFromBasket={removeItemFromBasket}
                        />}
                    />
                    <Route path="/" element={<Home/>}/>
                    <Route path="/checkout" element={<Checkout 
                        clearBasket={clearBasket}
                        basketTotal={basketTotal}
                        applyDiscount={applyDiscount}
                        />}
                    />
                    <Route path="/thank-you" element={<ThankYou/>}/>
                </Routes>

        </Router>
    )
}

export default RouterContainer