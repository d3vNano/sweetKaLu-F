import styled from "styled-components";

import CartList from "../blocks/CartList";

function CartContent() {
    return (
        <Screen>
            <CartList />
            <CartList />
            <CartList />
            <CartList />
            <CartList />
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 175px;
    margin-bottom: 180px;
    margin: 350px 15px 180px 15px;
    padding: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 20px;
    background-color: #f2dec1;
`;

export default CartContent;
