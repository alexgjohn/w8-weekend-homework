import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import Discount from "./Discount"

const CheckoutContent = styled.div`
    text-align: center;
`

const BuyButton = styled.button`
    text-align: center;
    font-weight: bold;
`

const Checkout = ({basketTotal, clearBasket, applyDiscount}) => {
    

    const navigate = useNavigate()

    const handleOnClick = () => {
        clearBasket()
        navigate("/thank-you")
    }

    return(
        <CheckoutContent>
            <p>You owe us <b>£{basketTotal}</b></p>
            <p><BuyButton onClick={handleOnClick}>Complete transaction</BuyButton></p>
            <hr></hr>
            <Discount applyDiscount={applyDiscount}/>
            <Link to="/basket">Back to basket</Link>

        </CheckoutContent>
    )
}

export default Checkout

//could refactor to include a 'thanks for shopping!' page
//and an error page, while we're at it.