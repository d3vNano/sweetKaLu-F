import styled from "styled-components";
import { Link } from "react-router-dom";

import { cart } from "../../assets/img/export";

function CartFooter({ subtotal }) {
    return (
        <Screen>
            <Button>
                <Desc>
                    <Total>Total de pedidos</Total>
                    <Price>R${subtotal},00</Price>
                </Desc>
                <Link to="/checkout">
                    <Checkout>
                        <IconCart src={cart} />
                        <Title>COMPRAR</Title>
                    </Checkout>
                </Link>
            </Button>
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 0;
    left: 0;

    z-index: 1;
`;

const Button = styled.div`
    width: 100%;
    padding: 0 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #ea3232;
`;

const Desc = styled.div`
    width: 100%;
    height: 75px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Total = styled.p`
    font-size: 20px;
    font-weight: 500;
`;

const Price = styled.h1`
    font-size: 35px;
    color: #331a05;
`;
const Checkout = styled.div`
    width: 100%;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: center;
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

    color: #331a05;
`;

export default CartFooter;
