import axios from "axios";
import swal from "sweetalert";

import styled from "styled-components";
import { cart } from "../../assets/img/export";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/user.context";

function ProductFooter({ amount, product }) {
    const navigate = useNavigate();
    const { loggedUser } = useContext(UserContext);
    const config = {
        headers: {
            Authorization: "Bearer " + loggedUser.token,
        },
    };

    function addToCart() {
        const body = {
            stockToReserve: Number(amount),
        };

        axios
            .put(
                `https://sweetkalu-back.onrender.com/cart/${product._id}`,
                body,
                config
            )
            .then((ans) => {
                const message = amount
                    ? "Produto adicionado no carrinho!"
                    : "Produto não incluído no carrinho";
                swal({
                    title: "Parabéns",
                    text: message,
                    button: false,
                    timer: 2500,
                });
                navigate("/home");
            })
            .catch((err) => {
                swal({
                    title: "Vish!",
                    text: err.response.data.message,
                    icon: "error",
                    button: true,
                });
            });
    }

    return (
        <Screen>
            <Button onClick={() => addToCart()}>
                <IconCart src={cart} />
                <Title>COMPRAR</Title>
            </Button>
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled.div`
    width: 100%;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 0;
    left: 0;

    z-index: 1;

    background-color: #ea3232;
    cursor: pointer;
`;

const IconCart = styled.img`
    width: 35px;
    margin-right: 50px;
    margin-bottom: 5px;
`;

const Title = styled.h2`
    font-size: 35px;
    font-weight: 500;
    letter-spacing: 1rem;
`;

export default ProductFooter;
