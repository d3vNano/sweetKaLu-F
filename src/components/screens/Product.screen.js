import axios from "axios";
import styled from "styled-components";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/user.context";

import ProductHeader from "../content/ProductHeader.content";
import ProductContent from "../content/ProductContent.content";
import ProductFooter from "../content/ProductFooter.content";

function ProductScreen() {
    const { id } = useParams();

    const { loggedUser } = useContext(UserContext);

    const [product, setProduct] = useState({});
    const [amount, setAmount] = useState();

    const navigate = useNavigate();

    const config = {
        headers: {
            Authorization: "Bearer " + loggedUser.token,
        },
    };

    useEffect(() => {
        axios
            .get(`https://sweetkalu-back.onrender.com/products/${id}`, config)
            .then((ans) => {
                setProduct(ans.data);
                setAmount(ans.data.stockToReserve);
            })
            .catch((err) => {
                swal({
                    title: "Vish!",
                    text: err.response.data.message,
                    icon: "error",
                    button: true,
                });
                navigate("/home");
            });
    }, []);

    return (
        <Screen>
            <ProductHeader />
            <ProductContent
                amount={amount}
                setAmount={setAmount}
                product={product}
            />
            <ProductFooter amount={amount} product={product} />
        </Screen>
    );
}

const Screen = styled.div``;

export default ProductScreen;
