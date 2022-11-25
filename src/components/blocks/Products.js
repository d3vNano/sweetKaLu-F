import styled from "styled-components";

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
        </Screen>
    );
}

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Product = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 15px;
    display: flex;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 20px 0 0 20px;
`;

const Img = styled.img`
    width: 150px;
    height: 150px;

    object-fit: cover;

    border-radius: 20px 0 0 20px;
`;

const Right = styled.div`
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
    font-size: 18px;
    color: #f9e9d2;
`;

export default Products;
