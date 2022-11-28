import styled from "styled-components";
import { Link } from "react-router-dom";

function Products({
    category,
    description,
    image,
    name,
    price,
    shortDescription,
    stock,
    type,
    id,
}) {
    return (
        <Screen>
            <Link to={`/product/${id}`}>
                <Product>
                    <Left>
                        <Img src={image} />
                    </Left>
                    <Right>
                        <Top>
                            <Title>{name}</Title>
                            <Price>R${price}</Price>
                        </Top>
                        <Desc>{shortDescription}</Desc>
                    </Right>
                </Product>
            </Link>
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

const Product = styled.div`
    width: 100%;
    height: 150px;

    margin-bottom: 15px;
    display: flex;
`;

const Left = styled.div`
    width: 150px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 20px 0 0 20px;
`;

const Img = styled.img`
    width: 150px;
    height: 100%;

    object-fit: cover;

    border-radius: 20px 0 0 20px;
`;

const Right = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;

    position: relative;

    background-color: #7d461f;
    border-radius: 0 20px 20px 0;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Price = styled.h2`
    font-size: 40px;
    font-weight: 500;
    color: #331a05;
`;

const Title = styled.h2`
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 22px;
    color: #f9e9d2;
`;

const Desc = styled.p`
    width: 100%;
    height: 100%;
    font-size: 18px;
    color: #f9e9d2;

    text-overflow: ellipsis;
`;

export default Products;
