import styled from "styled-components";

import Header from "../content/Header.content";
import Main from "../content/Main.content";
import Footer from "../content/Footer.content";

function ProductsScreen() {
    return (
        <Screen>
            <Header />
            <Main />
            <Footer />
        </Screen>
    );
}

const Screen = styled.div``;

export default ProductsScreen;
