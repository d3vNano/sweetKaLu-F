import styled from "styled-components";

function ChekoutFooter() {
    return (
        <Screen>
            <Button>
                <Title>FINALIZAR PEDIDO</Title>
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
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #ea3232;
`;

const Title = styled.h2`
    font-size: 35px;
    font-weight: 500;
    letter-spacing: 0.4rem;
`;

export default ChekoutFooter;
