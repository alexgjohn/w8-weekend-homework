import styled from "styled-components"


const StyledItem = styled.li`
    padding: 40px;
    text-align: center;
    margin: 2px;
    background-color: #d0f4ef;
`

const ProductImage = styled.img`
    height: 200px;
    width: 220px;
`

const Product = ({product, addItemToBasket, updateBasketTotal}) => {

    const handleClick = () => {
        console.log(`${product.name} got clicked!`)
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