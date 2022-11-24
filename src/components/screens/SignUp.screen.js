import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.svg";
import button from "../../assets/img/entry-button.svg";

function SignUpScreen() {
    return (
        <Screen>
            <Logo src={logo}></Logo>
            <Margin>
                <Title>Cadastre-se</Title>
                <Form>
                    <Input name="name" type="text" placeholder="Nome" />
                    <Input name="email" type="text" placeholder="Email" />
                    <Input name="phone" type="number" placeholder="Telefone" />
                    <Input
                        name="password"
                        type="password"
                        placeholder="Senha"
                    />
                    <Input
                        name="passwordConfirm"
                        type="password"
                        placeholder="Confimar senha"
                    />
                    <Button>
                        <>
                            <h1>Cadastrar</h1>
                            <img src={button} alt="button" />
                        </>
                    </Button>
                </Form>
                <Link to="/">
                    <SignIn>
                        Já possui uma conta? <strong>Conecte-se!</strong>
                    </SignIn>
                </Link>
            </Margin>
        </Screen>
    );
}

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const Margin = styled.div`
    width: 100%;
    padding-left: 50px;
`;

const Logo = styled.img`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    width: 100%;

    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
`;

const Form = styled.form`
    width: 100%;
    height: 100%;
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;

    z-index: 1;
`;

const Input = styled.input`
    width: 100%;
    height: 58px;

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
    margin-top: 15px;

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

const SignIn = styled.p`
    width: 100%;
    margin-bottom: 15px;

    color: #f29494;

    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;

    strong {
        font-style: italic;
        text-decoration: underline;
    }
`;

export default SignUpScreen;
