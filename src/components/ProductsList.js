import styled from "styled-components"
import Product from "./Product"

const StyledList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    background-color: #d0f4ef;
    /* align-self: center; */
`

const ProductsList = ({products, addItemToBasket}) => {

    const productListItems = products.map((product, index) => {
        return(
            <Product 
                key={index}
                product={product}
                addItemToBasket={addItemToBasket}

            />
        )
    })

    return(
        <StyledList>
            {productListItems}
        </StyledList>
    )
}

export default ProductsList