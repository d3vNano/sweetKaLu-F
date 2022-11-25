import styled from "styled-components";

import CheckoutHeader from "../content/CheckoutHeader.content";
import CheckoutContent from "../content/CheckoutContent.content";
import CheckoutFooter from "../content/CheckoutFooter.content";

function CheckoutScreen() {
    return (
        <Screen>
            <CheckoutHeader />
            <CheckoutContent />
            <CheckoutFooter />
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #f9e9d2;
`;

export default CheckoutScreen;
