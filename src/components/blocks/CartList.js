import styled from "styled-components";

import { tresh } from "../../assets/img/export";

function CartList({ name, image, price, shortDescription, stockToReserve }) {
    return (
        <Screen>
            <Img src={image} />
            <Right>
                <Top>
                    <Title>{name}</Title>
                    <Desc>{shortDescription}</Desc>
                </Top>
                <Bottom>
                    <Price>R${price},00</Price>
                    <AmountBlock>
                        <IconTresh src={tresh} />
                        <Amount>{stockToReserve}</Amount>
                        <Counter>+</Counter>
                    </AmountBlock>
                </Bottom>
            </Right>
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;
    height: 75px;
    margin-bottom: 10px;

    display: flex;
    align-items: center;

    border-radius: 10px;
    background-color: rgba(250, 202, 130, 30%);
`;

const Img = styled.img`
    width: 75px;
    height: 75px;

    object-fit: cover;
    border-radius: 10px 0 0 10px;
`;

const Right = styled.div`
    width: 100%;
    height: 100%;
    padding: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Top = styled.div``;

const Title = styled.h2`
    margin-bottom: 3px;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.25ch;
`;

const Desc = styled.p`
    font-size: 10px;
`;

const Bottom = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Price = styled.h2`
    margin-top: 5px;
    font-size: 18px;
    font-weight: 400;
`;

const AmountBlock = styled.div`
    width: 100px;
    height: 25px;
    margin-right: 5px;
    padding: 0 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 5px;
    background-color: #f4d9b1;
    box-shadow: 0px 0px 2px 2px rgba(82, 48, 21, 0.3);
`;

const IconTresh = styled.img`
    height: 15px;
`;

const Amount = styled.h2`
    margin-top: 2px;
    font-size: 18px;
    font-weight: 500;
`;

const Counter = styled.h1`
    font-size: 25px;
    font-weight: 400;

    color: #ea3232;
`;

export default CartList;
