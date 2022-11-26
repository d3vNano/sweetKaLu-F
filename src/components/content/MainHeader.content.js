import styled from "styled-components";
import { Link } from "react-router-dom";

import { search, menu, bubble } from "../../assets/img/export";

function HeaderContent() {
    return (
        <Screen>
            <Menu>
                <Button>
                    <IconBack src={search} />
                    <IconBubble src={bubble} />
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
`;

const Menu = styled.div`
    width: 100%;
    height: 50px;
    margin-top: 10px;
    padding: 0 20px 0 20px;

    display: flex;
    align-items: center;
    justify-content: end;

    position: fixed;
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

export default HeaderContent;
