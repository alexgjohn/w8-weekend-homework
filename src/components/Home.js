import styled from "styled-components"

const HomeText = styled.div`
    text-align: center;
`

const Home = () => {
    return(
        <HomeText>
            <h1>Welcome!</h1>
            <h2>This is your one-stop shop for all your circus needs.</h2>
            <img src="https://images.photowall.com/products/71184/night-at-the-circus.jpg?h=699&q=85"/>
        
        </HomeText>
    )
}

export default Home