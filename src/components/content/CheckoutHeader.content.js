import axios from "axios";
import styled from "styled-components";
import swal from "sweetalert";
import { useContext } from "react";
import UserContext from "../contexts/user.context";
import { Link, useNavigate } from "react-router-dom";

import { back2, clean } from "../../assets/img/export";

function CheckoutHeader() {
    const { loggedUser } = useContext(UserContext);
    const navigate = useNavigate();
    const config = {
        headers: {
            Authorization: "Bearer " + loggedUser.token,
        },
    };

    function cleanCart() {
        axios
            .delete("https://sweetkalu-back.onrender.com/cart", config)
            .then((ans) => {
                swal("Pedido cancelado!");
                setInterval(navigate("/home"), 3000);
            })
            .catch((err) => {
                swal({
                    title: "Vish!",
                    text: err.response.data.message,
                    icon: "error",
                    button: true,
                });
                navigate("/home");
            });
    }

    return (
        <Screen>
            <Menu>
                <Link to="/cart">
                    <IconSearch src={back2} />
                </Link>
                <Title>CHECKOUT</Title>
                <IconClean onClick={() => cleanCart()} src={clean} />
            </Menu>
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;

    background-color: #f9e9d2;
`;

const Menu = styled.div`
    width: 100%;
    height: 50px;
    padding: 0 20px 0 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const IconSearch = styled.img`
    width: 30px;
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: 400;
`;

const IconClean = styled.img`
    width: 30px;
    cursor: pointer;
`;

export default CheckoutHeader;
