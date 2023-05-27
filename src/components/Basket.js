import styled from "styled-components"
import BasketItem from "./BasketItem"
import { Link } from "react-router-dom";

const BasketInfo = styled.ul`
    text-align: center;
`

const BasketList = styled.ul`
    list-style: none;
    text-align: center;
    align-self: center;
`


const Basket = ({itemsInBasket, basketTotal, removeItemFromBasket}) => {
    
    const sortedItems = [...itemsInBasket].sort((item1, item2) => {
        const nameA = item1.name.toUpperCase();
        const nameB = item2.name.toUpperCase();
    
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    const basketListItems = sortedItems.map((item, index) => {
        return(
            <BasketItem 
                key={index}
                id={item.id}
                item={item}
                itemsInBasket={itemsInBasket}
                removeItemFromBasket={removeItemFromBasket}

            />
        )
    }) 

    return(
        <BasketInfo>
        <BasketList>
            {basketListItems}
        </BasketList>
        <p>Total: <b>£{basketTotal}</b></p>
        <Link to="/checkout">Go to checkout?</Link>
        </BasketInfo>
    )
}

export default Basket