import styled from "styled-components";

function CheckoutContent() {
    return (
        <Screen>
            <Title>RESUMO DE VALORES</Title>
            <Block>
                <Top>
                    <SubTotal>Subtotal</SubTotal>
                    <SubTotal>R$40,00</SubTotal>
                </Top>
                <Mid>
                    <Delivery>Taxa de entrega</Delivery>
                    <Delivery>R$10,00</Delivery>
                </Mid>
                <Bottom>
                    <Total>Total</Total>
                    <Total>R$50,00</Total>
                </Bottom>
            </Block>
            <Card>
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
            </Card>
            <Adress>
                <AdressForm>
                    <AdressInput
                        name="adress"
                        type="text"
                        placeholder="Endereço"
                    />
                    <Div>
                        <AdressInput
                            name="adressNumber"
                            type="text"
                            placeholder="Número"
                        />
                        <Spacer />
                        <AdressInput
                            name="adressCountry"
                            type="text"
                            placeholder="Cidade/ES"
                        />
                    </Div>
                    <CepInput
                        name="adressPostalCode"
                        type="text"
                        placeholder="CEP"
                    />
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

export default CheckoutContent;
