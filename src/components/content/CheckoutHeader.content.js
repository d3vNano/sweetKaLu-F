import styled from "styled-components";
import { back2, clean } from "../../assets/img/export";

function CheckoutHeader() {
    return (
        <Screen>
            <Menu>
                <IconSearch src={back2} />
                <Title>CHECKOUT</Title>
                <IconMenu src={clean} />
            </Menu>
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;

    background-color: #f9e9d2;
`;

const Menu = styled.div`
    width: 100%;
    height: 50px;
    padding: 0 20px 0 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const IconSearch = styled.img`
    width: 30px;
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: 400;
`;

const IconMenu = styled.img`
    width: 30px;
`;

export default CheckoutHeader;
