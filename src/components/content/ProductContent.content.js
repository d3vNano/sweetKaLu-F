import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/user.context";

import { cart3, star, star2 } from "../../assets/img/export";

function ProductContent() {
    return (
        <Screen>
            <Banner src="https://static01.nyt.com/images/2020/07/10/well/10well-newsletter/10well-newsletter-superJumbo.jpg" />
            <Content>
                <IconCart src={cart3} />
                <Title>TITULO DO PRODUTO</Title>
                <Category>Categoria</Category>
                <Div>
                    <Rank>
                        <IconStar src={star} />
                        <IconStar src={star} />
                        <IconStar src={star} />
                        <IconStar src={star} />
                        <IconStar2 src={star2} />
                    </Rank>
                    <Stock>Em estoque: 10</Stock>
                </Div>
                <Div>
                    <Price>
                        <p>R$</p>10,00
                    </Price>
                    <AmountButton>
                        <Counter>-</Counter>
                        <Amount>0</Amount>
                        <Counter>+</Counter>
                    </AmountButton>
                </Div>
                <Desc>
                    Lorem Ipsum é simplesmente uma simulação de texto da
                    indústria tipográfica e de impressos, e vem sendo utilizado
                    desde o século XVI, quando um impressor desconhecido pegou
                    uma bandeja de tipos e os embaralhou...
                </Desc>
            </Content>
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Banner = styled.img`
    width: 100%;
    height: 400px;

    object-fit: cover;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 0;

    background-color: #523015;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 250px;
    margin-bottom: 40px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    z-index: 1;

    border-radius: 30px 30px 0 0;

    background-color: #f9e9d2;
`;

const IconCart = styled.img`
    position: absolute;
    top: -35px;
    right: 50px;
`;

const Title = styled.h2`
    width: 100%;
    margin-top: 15px;

    font-size: 40px;
    font-weight: 500;
    letter-spacing: 0.25rem;
    color: #ea3232;
`;

const Category = styled.p`
    width: 100%;
    margin-top: 5px;
    font-size: 15px;
    letter-spacing: 0.1rem;
`;

const Div = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Rank = styled.div``;

const IconStar = styled.img`
    margin-right: 5px;
`;

const IconStar2 = styled.img``;

const Stock = styled.p`
    margin-right: 5px;
    font-size: 18px;
    font-weight: 500;
`;

const Price = styled.h2`
    width: 100%;

    display: flex;
    align-items: flex-end;

    font-size: 50px;
    font-weight: 500;
    letter-spacing: 0.25rem;

    p {
        margin-bottom: 7.5px;
        font-size: 20px;
    }
`;

const AmountButton = styled.div`
    padding: 5px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(242, 148, 148, 50%);
    border-radius: 22px;
`;

const Counter = styled.div`
    width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 50px;
    font-weight: 300;

    border-radius: 20px;
    background-color: #f9e9d2;
`;

const Amount = styled.h2`
    margin: 8px 8px 1px 8px;
    font-size: 50px;
    font-weight: 400;
`;

const Desc = styled.p`
    margin-top: 20px;
    font-size: 18px;
    line-height: 1.5rem;
`;

export default ProductContent;
