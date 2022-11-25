import styled from "styled-components";
import { back2, clean } from "../../assets/img/export";

import CartHeader from "../content/CartHeader.content";
import CartContent from "../content/CartContent.content";
import CartFooter from "../content/CartFooter.content";

function CartScreen() {
    return (
        <Screen>
            <CartHeader />
            <CartContent />
            <CartFooter />
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

export default CartScreen;
