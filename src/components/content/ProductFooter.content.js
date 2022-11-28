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
                console.log(ans);
                swal({
                    title: "Parabéns",
                    text: "Produto adicionado no carrinho!",
                    button: false,
                    timer: 2500,
                });
                navigate("/home");
            })
            .catch((err) => {
                console.log(err);
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
