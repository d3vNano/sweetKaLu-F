import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.svg";
import button from "../../assets/img/entry-button.svg";

function SignInScreen() {
    return (
        <Screen>
            <Logo src={logo}></Logo>
            <Title>
                Seja <br />
                Bem-vinde
            </Title>
            <Form>
                <Input name="email" type="text" placeholder="Email" />
                <Input name="password" type="password" placeholder="Senha" />
                <Button>
                    <>
                        <h1>Entrar</h1>
                        <img src={button} alt="button" />
                    </>
                </Button>
            </Form>
            <Link to="/sign-up">
                <SignUp>
                    Ainda não tem uma conta? <strong>Cadastre-se</strong>
                </SignUp>
            </Link>
        </Screen>
    );
}

const Screen = styled.div`
    margin-left: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const Logo = styled.img`
    position: fixed;
    left: 0;
    top: 0;
`;

const Title = styled.h1`
    width: 100%;
    margin-top: 285px;
    margin-bottom: 20px;

    font-size: 35px;
    font-weight: 700;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 100%;
    height: 58px;

    margin-bottom: 15px;

    font-size: 20px;
    color: #591708;

    outline: none;
    background-color: transparent;

    border: none;
    border-bottom: 2px solid #f29494;

    ::placeholder {
        font-size: 15px;
        font-weight: 400;
        color: #f29494;
    }
`;

const Button = styled.button`
    width: 100%;
    margin-top: 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-right: 0;
    padding-left: 0;

    color: inherit;
    border: none;
    background-color: transparent;

    h1 {
        font-size: 30px;
    }
`;

const SignUp = styled.p`
    width: 100%;
    margin-top: 60px;
    color: #f29494;

    text-align: center;
    position: fixed;
    left: 0;

    strong {
        font-style: italic;
        text-decoration: underline;
    }
`;

export default SignInScreen;
