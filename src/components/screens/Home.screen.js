import styled from "styled-components";

import MainHeader from "../content/MainHeader.content";
import MainContent from "../content/MainContent.content";
import MainFooter from "../content/MainFooter.content";
import CartCheck from "../blocks/CartCheck";

function HomeScreen() {
    return (
        <Screen>
            <MainHeader />
            {false ? <CartCheck /> : <></>}
            <MainContent />
            <MainFooter />
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default HomeScreen;
