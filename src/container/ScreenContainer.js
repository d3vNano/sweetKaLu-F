import React from "react";
import styled from "styled-components";

function ScreenContainer({ children }) {
  return <Screen>{children}</Screen>;
}

const Screen = styled.div`
  min-height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default ScreenContainer;
