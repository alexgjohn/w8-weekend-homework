import styled from "styled-components"

const Logo = styled.h1`
    background-color: palevioletred;
    color: blue;
    font-size: 3.5em;
    text-align: center;
`

const Header = () => {

    return(
        <Logo>Big Top Circus Shop</Logo>
    )
}

export default Header