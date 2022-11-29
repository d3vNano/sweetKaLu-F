import axios from "axios";
import styled from "styled-components";
import swal from "sweetalert";
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
            })
            .catch((err) => {
                swal({
                    title: "Vish!",
                    text: err.response.data.message,
                    icon: "error",
                    button: true,
                });
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
            <MainContent isOpenCart={isOpenCart} />
            <MainFooter />
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default HomeScreen;
