import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import CircusShopContainer from './CircusShopContainer';
import Basket from "../components/Basket";
import Home from "../components/Home";
import NavBar from "../components/NavBar";

const RouterContainer = () => {

    return(
        <Router>
                <NavBar/>
                <Routes>
                    <Route path="/products" element={<CircusShopContainer/>}/>
                    {/* <Route path="/basket" element={<Basket itemsInBasket={itemsInBasket}/>}/> */}
                    <Route path="/" element={<Home/>}/>
                </Routes>

        </Router>
    )
}

export default RouterContainer