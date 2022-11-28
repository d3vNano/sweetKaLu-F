import axios from "axios";
import swal from "sweetalert";
import styled from "styled-components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import SyncLoader from "react-spinners/SyncLoader";
import UserContext from "../contexts/user.context";

function CheckoutContent({ orderId, deliveryFee, subtotalPrice, totalPrice }) {
    const { loggedUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [address, setAddress] = useState({
        address: "",
        number: "",
        city: "",
        postalCode: "",
    });

    const [disabled, setDisabled] = useState(false);

    function clearInputs() {
        setAddress({
            address: "",
            number: "",
            city: "",
            postalCode: "",
        });
    }

    const config = {
        headers: {
            Authorization: "Bearer " + loggedUser.token,
        },
    };

    function getConfirm() {
        axios
            .get(
                `https://sweetkalu-back.onrender.com/confirm/${orderId}`,
                config
            )
            .then((ans) => {
                console.log(ans.data);
                const order = `Pedido nº:${ans.data.orderNo}\nPronto para entrega em:\n${ans.data.deliveryAddress.address}, ${ans.data.deliveryAddress.number} - ${ans.data.deliveryAddress.city} - ${ans.data.deliveryAddress.postalCode}\n\nObrigado pela compra ${ans.data.username};`;
                swal(order);
                navigate("/home");
            });
    }

    function submitForm(e) {
        e.preventDefault();

        setDisabled(true);
        console.log(address);
        axios
            .post(
                `https://sweetkalu-back.onrender.com/checkout/${orderId}`,
                { address },
                config
            )
            .then((ans) => {
                //enviar whats
                //enviar email
                //mostrar a confirmação do pedido
                getConfirm();
            })
            .catch((err) => {
                console.log(err.response.data.message);
                clearInputs();
                setDisabled(false);
            });
    }
    return (
        <Screen>
            <Title>RESUMO DE VALORES</Title>
            <Block>
                <Top>
                    <SubTotal>Subtotal</SubTotal>
                    <SubTotal>R${subtotalPrice},00</SubTotal>
                </Top>
                <Mid>
                    <Delivery>Taxa de entrega</Delivery>
                    <Delivery>R${deliveryFee},00</Delivery>
                </Mid>
                <Bottom>
                    <Total>Total</Total>
                    <Total>R${totalPrice},00</Total>
                </Bottom>
            </Block>
            {/*             <Card>
                <CardTitle>SWEET CARD</CardTitle>
                <CardForm>
                    <CardInput
                        name="cardNumber"
                        type="number"
                        placeholder="1111 2222 3333 4444"
                    />
                    <Div>
                        <CardInput
                            name="validity"
                            type="text"
                            placeholder="00/00"
                        />
                        <Spacer />
                        <CardInput
                            name="code"
                            type="number"
                            placeholder="CVC"
                        />
                    </Div>
                </CardForm>
            </Card> */}
            <Adress>
                <AdressForm onSubmit={submitForm}>
                    <AdressInput
                        name="address"
                        type="text"
                        placeholder="Endereço"
                        value={address.address}
                        onChange={(e) =>
                            setAddress({ ...address, address: e.target.value })
                        }
                        disabled={disabled}
                        required
                    />
                    <Div>
                        <AdressInput
                            name="addressNumber"
                            type="text"
                            placeholder="Número"
                            value={address.number}
                            onChange={(e) =>
                                setAddress({
                                    ...address,
                                    number: e.target.value,
                                })
                            }
                            disabled={disabled}
                            required
                        />
                        <Spacer />
                        <AdressInput
                            name="addressCountry"
                            type="text"
                            placeholder="Cidade/ES"
                            value={address.city}
                            onChange={(e) =>
                                setAddress({ ...address, city: e.target.value })
                            }
                            disabled={disabled}
                            required
                        />
                    </Div>
                    <CepInput
                        name="addressPostalCode"
                        type="text"
                        placeholder="CEP"
                        value={address.postalCode}
                        onChange={(e) =>
                            setAddress({
                                ...address,
                                postalCode: e.target.value,
                            })
                        }
                        disabled={disabled}
                        required
                    />
                    <Button>
                        {disabled ? (
                            <SyncLoader color="#331A05" />
                        ) : (
                            "FINALIZAR PEDIDO"
                        )}
                    </Button>
                </AdressForm>
            </Adress>
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;
    height: 100%;
    padding: 25px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h2`
    font-size: 40px;
    font-weight: 400;
`;

const Block = styled.div`
    width: 100%;
    margin: 25px 0;

    display: flex;
    flex-direction: column;
    align-items: space-between;
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const SubTotal = styled.h1`
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 500;
`;

const Mid = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Delivery = styled.p`
    margin-bottom: 15px;
    font-size: 15px;
    font-weight: 400;
`;

const Bottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Total = styled.h1`
    font-size: 25px;
    font-weight: 900;
`;

const Card = styled.div`
    width: 100%;
    padding: 10px;
    padding-bottom: 15px;

    border-radius: 10px;
    background-image: linear-gradient(to bottom right, #ea3232, #523015);
`;

const CardTitle = styled.h2`
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 500;

    color: rgba(244, 244, 244, 0.9);
`;

const CardForm = styled.form`
    width: 100%;
    height: 100%;
`;

const CardInput = styled.input`
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    padding-left: 10px;

    outline: none;
    border: none;
    background-color: rgba(0, 0, 0, 0.2);

    font-size: 20px;
    text-align: center;
    color: rgba(244, 244, 244, 0.75);

    ::placeholder {
        text-align: center;

        font-size: 20px;
        letter-spacing: 0.4rem;
        color: rgba(244, 244, 244, 0.75);
    }
`;

const Div = styled.div`
    display: flex;
`;

const Spacer = styled.div`
    width: 50px;
`;

const Adress = styled.div`
    width: 100%;
    margin-top: 30px;
`;

const AdressForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AdressInput = styled.input`
    width: 100%;
    height: 40px;

    margin-bottom: 15px;

    font-size: 15px;
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

const CepInput = styled.input`
    width: 50%;
    height: 40px;

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
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 0;
    left: 0;

    z-index: 1;

    font-family: "Bebas Neue", cursive;
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 0.25rem;
    color: #331a05;

    border: none;
    background-color: #ea3232;
    cursor: pointer;
`;

export default CheckoutContent;
