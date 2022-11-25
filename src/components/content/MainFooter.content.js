import styled from "styled-components";

import { home, list } from "../../assets/img/export";

function FooterContent() {
    return (
        <Screen>
            <Nav>
                <LeftButton>
                    <IconHome src={home} />
                </LeftButton>
                <Spacer />
                <RightButton>
                    <IconList src={list} />
                </RightButton>
            </Nav>
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

const Nav = styled.div`
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    position: fixed;
    bottom: 0;
    left: 0;

    z-index: 1;

    background-color: #faca82;
`;

const LeftButton = styled.div``;

const IconHome = styled.img``;

const Spacer = styled.div`
    width: 1px;
    height: 35px;
    background-color: #523015;
`;

const RightButton = styled.div``;

const IconList = styled.img``;

export default FooterContent;
