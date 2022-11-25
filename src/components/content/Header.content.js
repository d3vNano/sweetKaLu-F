import styled from "styled-components";
import { Link } from "react-router-dom";

import { search, menu } from "../../assets/img/export";

function HeaderContent() {
    return (
        <Screen>
            <Menu>
                <IconSearch src={search} />
                <IconMenu src={menu} />
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

    position: absolute;
    top: 0;
    right: 0;

    z-index: 5;
`;

const IconSearch = styled.img`
    width: 30px;
`;

const IconMenu = styled.img`
    width: 30px;
    margin-left: 20px;
`;

export default HeaderContent;
