import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/user.context";

import { back2, clean } from "../../assets/img/export";

import CartHeader from "../content/CartHeader.content";
import CartContent from "../content/CartContent.content";
import CartFooter from "../content/CartFooter.content";

function CartScreen() {
    const { loggedUser } = useContext(UserContext);
    const [cart, setCart] = useState();

    const config = {
        headers: {
            Authorization: "Bearer " + loggedUser.token,
        },
    };

    useEffect(() => {
        axios
            .get("https://sweetkalu-back.onrender.com/cart", config)
            .then((ans) => {
                setCart(ans.data);
            });
    }, []);

    if (!cart) {
        return;
    }

    return (
        <Screen>
            <CartHeader />
            <CartContent products={cart.products} />
            <CartFooter subtotal={cart.subtotalPrice} />
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #f9e9d2;
`;

export default CartScreen;
