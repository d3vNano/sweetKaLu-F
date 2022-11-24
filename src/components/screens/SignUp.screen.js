import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

import logo from "../../assets/img/logo.svg";
import button from "../../assets/img/button.svg";

function SignUpScreen() {
    const navigate = useNavigate();

    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        passwordConfirm: "",
    });

    const [disabled, setDisabled] = useState(false);

    function clearInputs() {
        setNewUser({
            name: "",
            email: "",
            phone: "",
            password: "",
            passwordConfirm: "",
        });
    }

    function submitForm(e) {
        e.preventDefault();

        setDisabled(true);

        axios
            .post("https://sweetkalu-back.onrender.com/sign-up", newUser)
            .then((ans) => {
                alert("Cadastro concluído! Agora faça o login.");
                navigate("/");
            })
            .catch((err) => {
                alert("Fala no cadastro! Tente novamente");
                clearInputs();
                setDisabled(false);
            });
    }

    return (
        <Screen>
            <Logo src={logo}></Logo>
            <Margin>
                <Title>Cadastre-se</Title>
                <Form onSubmit={submitForm}>
                    <Input
                        name="name"
                        type="text"
                        placeholder="Nome"
                        value={newUser.name}
                        onChange={(e) =>
                            setNewUser({ ...newUser, name: e.target.value })
                        }
                        disabled={disabled}
                        required
                    />
                    <Input
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={newUser.email}
                        onChange={(e) =>
                            setNewUser({ ...newUser, email: e.target.value })
                        }
                        disabled={disabled}
                        required
                    />
                    <Input
                        name="phone"
                        type="number"
                        placeholder="Telefone"
                        value={newUser.phone}
                        onChange={(e) =>
                            setNewUser({ ...newUser, phone: e.target.value })
                        }
                        disabled={disabled}
                        required
                    />
                    <Input
                        name="password"
                        type="password"
                        placeholder="Senha"
                        value={newUser.password}
                        onChange={(e) =>
                            setNewUser({ ...newUser, password: e.target.value })
                        }
                        disabled={disabled}
                        required
                    />
                    <Input
                        name="passwordConfirm"
                        type="password"
                        placeholder="Confimar senha"
                        value={newUser.passwordConfirm}
                        onChange={(e) =>
                            setNewUser({
                                ...newUser,
                                passwordConfirm: e.target.value,
                            })
                        }
                        disabled={disabled}
                        required
                    />
                    <Button disabled={disabled}>
                        {!disabled ? (
                            <Static>
                                Cadastrar
                                <Click>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                    <img src={button} alt="button" />
                                </Click>
                            </Static>
                        ) : (
                            <OnClick>
                                Cadastrando
                                <Click>
                                    <Loader>
                                        <SyncLoader color="#F9E9D2" />
                                    </Loader>
                                    <img src={button} alt="button" />
                                </Click>
                            </OnClick>
                        )}
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

    padding-right: 0;
    padding-left: 0;

    color: inherit;
    border: none;
    background-color: transparent;

    font-size: 30px;
`;

const Static = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const OnClick = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Click = styled.div`
    position: relative;

    ion-icon {
        font-size: 40px;
        color: #f9e9d2;

        position: absolute;
        left: 55px;
        top: 25px;
    }
`;

const Loader = styled.div`
    font-size: 40px;

    position: absolute;
    left: 45px;
    top: 18px;
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
