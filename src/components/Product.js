import styled from "styled-components"


const StyledItem = styled.li`
    padding: 40px;
    text-align: center;
`

const ProductImage = styled.img`
    height: 200px;
    width: 220px;
`

const Product = ({product, addItemToBasket}) => {

    return(
        <StyledItem>
            <ProductImage src={product.imageUrl}/>
            <p><b>{product.name}</b></p>
            <p>£{product.price}</p>
            <button>Add to basket</button>
        </StyledItem>
    )
}

export default Product