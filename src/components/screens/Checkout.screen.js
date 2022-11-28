import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/user.context";

import CheckoutHeader from "../content/CheckoutHeader.content";
import CheckoutContent from "../content/CheckoutContent.content";

function CheckoutScreen() {
    const { loggedUser } = useContext(UserContext);
    const [order, setOrder] = useState();

    const config = {
        headers: {
            Authorization: "Bearer " + loggedUser.token,
        },
    };

    useEffect(() => {
        axios
            .get("https://sweetkalu-back.onrender.com/checkout", config)
            .then((ans) => {
                setOrder(ans.data);
                console.log(ans.data);
            });
    }, []);

    if (!order) {
        return;
    }

    return (
        <Screen>
            <CheckoutHeader />
            <CheckoutContent
                orderId={order._id}
                deliveryFee={order.deliveryFee}
                subtotalPrice={order.subtotalPrice}
                totalPrice={order.totalPrice}
            />
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #f9e9d2;
`;

export default CheckoutScreen;
