import styled from "styled-components";

import CartHeader from "../content/CartHeader.content";
import CartContent from "../content/CartContent.content";
import CartFooter from "../content/CartFooter.content";

function CartScreen() {
    return (
        <Screen>
            <CartHeader />
            <CartContent />
            <CartFooter />
        </Screen>
    );
}

export default CartScreen;
