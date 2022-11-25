import styled from "styled-components";
import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import UserContext from "../contexts/user.context";

import { logo, button } from "../../assets/img/export";

function SignInScreen() {
    const navigate = useNavigate();

    const { setLoggedUser } = useContext(UserContext);
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [disabled, setDisabled] = useState(false);

    function clearInputs() {
        setUser({
            email: "",
            password: "",
        });
    }

    function submitForm(e) {
        e.preventDefault();

        setDisabled(true);

        axios
            .post("https://sweetkalu-back.onrender.com/sign-in", user)
            .then((ans) => {
                window.localStorage.setItem("user", JSON.stringify(ans.data));
                setLoggedUser(ans.data);
                alert("Bem vindo" + ans.data.username);
                navigate("/home");
            })
            .catch((err) => {
                console.log(err);
                alert("Email ou senha incorretos! Tente novamente.");
                clearInputs();
                setDisabled(false);
            });
    }

    return (
        <Screen>
            <Logo src={logo}></Logo>
            <Margin>
                <Title>
                    Seja <br />
                    Bem-vinde
                </Title>
                <Form onSubmit={submitForm}>
                    <Input
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={user.email}
                        onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                        }
                        disabled={disabled}
                        required
                    />
                    <Input
                        name="password"
                        type="password"
                        placeholder="Senha"
                        value={user.password}
                        onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                        }
                        disabled={disabled}
                        required
                    />
                    <Button disabled={disabled}>
                        {!disabled ? (
                            <Static>
                                Entrar
                                <Click>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                    <img src={button} alt="button" />
                                </Click>
                            </Static>
                        ) : (
                            <OnClick>
                                Entrando
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
                <Link to="/sign-up">
                    <SignUp>
                        Ainda não tem uma conta? <strong>Cadastre-se!</strong>
                    </SignUp>
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
    margin-top: 20px;
    margin-bottom: 20px;

    font-size: 35px;
    font-weight: 700;
    line-height: 40px;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 100%;
    height: 58px;

    margin-bottom: 25px;

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

const SignUp = styled.p`
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

export default SignInScreen;
