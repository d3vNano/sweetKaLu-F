import styled from "styled-components";

import ProductHeader from "../content/ProductHeader.content";
import ProductContent from "../content/ProductContent.content";
import ProductFooter from "../content/ProductFooter.content";

function ProductScreen() {
    return (
        <Screen>
            <ProductHeader />
            <ProductContent />
            <ProductFooter />
        </Screen>
    );
}

const Screen = styled.div``;

export default ProductScreen;
