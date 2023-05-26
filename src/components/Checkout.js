import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"

const Checkout = ({basketTotal, clearBasket}) => {

    const navigate = useNavigate()

    const handleOnClick = () => {
        clearBasket()
        navigate("/")
    }

    return(
        <>
            <p>You owe us <b>£{basketTotal}</b></p>
            <button onClick={handleOnClick}>Buy stuff</button>
            <Link to="/basket">Back to basket</Link>

        </>
    )
}

export default Checkout

//could refactor to include a 'thanks for shopping!' page
//and an error page, while we're at it.