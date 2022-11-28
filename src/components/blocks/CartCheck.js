import styled from "styled-components";

import { cart2 } from "../../assets/img/export";

function CartCheck({ cart }) {
    return (
        <Screen>
            <Title>Ver carrinho</Title>
            <Check>
                <CartAmount>
                    <Amount>{cart.totalItens}</Amount>
                    <IconCart src={cart2} />
                </CartAmount>
                <Total>R$ {cart.subtotalPrice},00</Total>
            </Check>
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;
    height: 60px;
    margin-bottom: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 20px;
    left: 0;

    z-index: 2;

    color: #f9e9d2;
`;

const Check = styled.div`
    width: 100%;
    height: 100%;
    margin: 10px;
    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;

    border-radius: 20px;
    background-color: #ea3232;
`;

const IconCart = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CartAmount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Amount = styled.p`
    margin-left: 4px;
    position: absolute;
    z-index: 2;
    top: 19px;

    font-size: 15px;
    font-weight: bold;
    letter-spacing: -1.5px;
    color: #ea3232;
`;

const Title = styled.p`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    z-index: 2;

    font-size: 18px;
`;

const Total = styled.h1`
    font-size: 18px;
`;

export default CartCheck;
