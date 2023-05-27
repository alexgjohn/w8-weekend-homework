import styled from "styled-components"


const StyledItem = styled.li`
    padding: 40px;
    text-align: center;
    margin: 2px;
    background-color: #31a8f2;
    border-radius: 5%;
`

const ProductImage = styled.img`
    height: 200px;
    width: 220px;
`

const Product = ({product, addItemToBasket}) => {

    const handleClick = () => {
        addItemToBasket(product)
    }

    return(
        <StyledItem>
            <ProductImage src={product.imageUrl}/>
            <p><b>{product.name}</b></p>
            <blockquote><i>"{product.description}"</i></blockquote>
            <p>£{product.price}</p>
            <button onClick={handleClick}>Add to basket</button>
        </StyledItem>
    )
}

export default Product