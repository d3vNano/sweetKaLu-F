import styled from "styled-components";

import MainHeader from "../content/MainHeader.content";
import MainContent from "../content/MainContent.content";
import MainFooter from "../content/MainFooter.content";

function ProductsScreen() {
    return (
        <Screen>
            <MainHeader />
            <MainContent />
            <MainFooter />
        </Screen>
    );
}

const Screen = styled.div``;

export default ProductsScreen;
