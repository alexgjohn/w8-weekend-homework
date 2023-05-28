import styled from "styled-components"
import {Link} from "react-router-dom"
import { FaHome } from 'react-icons/fa';
import { TbBuildingCircus } from "react-icons/tb";

const StyledNavBar = styled.ul`
    list-style: none;
    text-align: center;
`

const NavBar = () => {

    const HomeIcon = () => {
        return <FaHome/>
    }

    const CircusIcon = () => {
        return <TbBuildingCircus/>
    }


    return(
        <StyledNavBar id="nav-bar">
            <li>
                <Link to="/">Home <HomeIcon/></Link>
            </li>
            <li>
                <Link to="/products">Products <CircusIcon/></Link>
            </li>
        </StyledNavBar>
    )
}

export default NavBar