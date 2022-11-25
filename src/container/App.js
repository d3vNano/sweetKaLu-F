import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../components/contexts/user.context";

import ResetStyles from "../assets/css/reset.styles";
import GlobalStyles from "../assets/css/global.styles";

import SignInScreen from "../components/screens/SignIn.screen";
import SignUpScreen from "../components/screens/SignUp.screen";
import HomeScreen from "../components/screens/Home.screen";
import ProductScreen from "../components/screens/Product.screen";
import CartScreen from "../components/screens/Cart.screen";
import CheckoutScreen from "../components/screens/Checkout.screen";

function App() {
    const [loggedUser, setLoggedUser] = useState(
        JSON.parse(window.localStorage.getItem("user")) || {}
    );

    return (
        <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
            <ResetStyles />
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInScreen />} />
                    <Route path="/sign-up" element={<SignUpScreen />} />
                    <Route path="/home" element={<HomeScreen />} />
                    <Route path="/product/:id" element={<ProductScreen />} />
                    <Route path="/cart" element={<CartScreen />} />
                    <Route path="/checkout" element={<CheckoutScreen />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
