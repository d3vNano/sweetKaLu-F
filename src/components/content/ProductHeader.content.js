import styled from "styled-components";
import { Link } from "react-router-dom";

import { back, menu, bubble } from "../../assets/img/export";

function ProductHeader() {
    return (
        <Screen>
            <Menu>
                <Button>
                    <Link to="/home">
                        <IconBack src={back} />
                        <IconBubble src={bubble} />
                    </Link>
                </Button>
                <Button>
                    <IconMenu src={menu} />
                    <IconBubble src={bubble} />
                </Button>
            </Menu>
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Menu = styled.div`
    width: 100%;
    height: 50px;
    margin-top: 10px;
    padding: 0 20px 0 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    top: 0;
    right: 0;

    z-index: 5;
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
`;

const IconBack = styled.img`
    width: 30px;

    position: absolute;
`;

const IconMenu = styled.img`
    width: 30px;

    position: absolute;
`;

const IconBubble = styled.img``;

export default ProductHeader;
