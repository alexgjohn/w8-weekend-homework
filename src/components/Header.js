import styled from "styled-components"
import { Link } from "react-router-dom"

const Logo = styled.h1`
    background-color: palevioletred;
    color: blue;
    font-family: fantasy;
    font-size: 3.5em;
    text-align: center;
`

const Header = () => {

    return(
        <Logo id="logo">Big Top Circus Shop</Logo>
    )
}

export default Header