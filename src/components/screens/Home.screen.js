import axios from "axios";
import styled from "styled-components";
import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/user.context";

import MainHeader from "../content/MainHeader.content";
import MainContent from "../content/MainContent.content";
import MainFooter from "../content/MainFooter.content";
import CartCheck from "../blocks/CartCheck";

function HomeScreen() {
    const { loggedUser } = useContext(UserContext);

    const [isOpenCart, setIsOpenCart] = useState(false);
    const [cart, setCart] = useState({});

    const config = {
        headers: {
            Authorization: "Bearer " + loggedUser.token,
        },
    };

    useEffect(() => {
        axios
            .get("https://sweetkalu-back.onrender.com/cart", config)
            .then((ans) => {
                setIsOpenCart(ans.data.products.length > 0);
                setCart(ans.data);
            });
    }, []);

    return (
        <Screen>
            <MainHeader />
            {isOpenCart ? (
                <Link to="/cart">
                    <CartCheck cart={cart} />
                </Link>
            ) : (
                <></>
            )}
            <MainContent />
            <MainFooter />
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default HomeScreen;
