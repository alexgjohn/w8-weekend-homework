import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const StyledBasketItem = styled.li`
    display: flex;
    justify-content: center;
    align-content: center;
`

const RemoveButton = styled.button`
    margin-left: 50px;
    margin-bottom: 5px;
`

const RightArrow = () => {
    return <BsFillArrowRightSquareFill/>
}

const BasketItem = ({item, id, itemsInBasket, removeItemFromBasket}) => {

    const navigate = useNavigate()

    const handleOnClick = (event) => {
        removeItemFromBasket(event.target.value)
        if (!itemsInBasket) {
            navigate("/")
        }
    }

    return(
        <StyledBasketItem>
            <p>{item.name}: £{item.price} </p>
            <RemoveButton value={id} onClick={handleOnClick}>Remove from basket</RemoveButton>
        </StyledBasketItem>
    )
}

export default BasketItem