import styled from "styled-components";

import { cart } from "../../assets/img/export";

function ProductFooter() {
    return (
        <Screen>
            <Button>
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
