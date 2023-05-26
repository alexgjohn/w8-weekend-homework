import styled from "styled-components"

const BasketItem = ({item, index, removeItemFromBasket}) => {


    const handleOnClick = (event) => {
        removeItemFromBasket(event.target.value)
    }

    return(
        <li>
            <p>{item.name}: £{item.price}</p>
            <button value={index} onClick={handleOnClick}>Remove from basket</button>
        </li>
    )
}

export default BasketItem