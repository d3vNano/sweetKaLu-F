import styled from "styled-components";

import Products from "../blocks/Products.js";
import { Link } from "react-router-dom";

function ProductList({ products }) {
    return (
        <Screen>
            <>
                <Category>PALHAS</Category>

                {products.map((product, index) =>
                    product.type === "palha" ? (
                        <Products
                            key={index}
                            category={product.category}
                            description={product.description}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            shortDescription={product.shortDescription}
                            stock={product.stock}
                            type={product.type}
                            id={product._id}
                        />
                    ) : (
                        ""
                    )
                )}
                <Spacer />
                <Category>ALFAJORES</Category>

                {products.map((product, index) =>
                    product.type === "alfajor" ? (
                        <Products
                            key={index}
                            category={product.category}
                            description={product.description}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            shortDescription={product.shortDescription}
                            stock={product.stock}
                            type={product.type}
                            id={product._id}
                        />
                    ) : (
                        ""
                    )
                )}

                <Spacer />
                <Category>BEBIDAS QUENTES</Category>

                {products.map((product, index) =>
                    product.type === "quente" ? (
                        <Products
                            key={index}
                            category={product.category}
                            description={product.description}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            shortDescription={product.shortDescription}
                            stock={product.stock}
                            type={product.type}
                            id={product._id}
                        />
                    ) : (
                        ""
                    )
                )}

                <Spacer />
                <Category>BEBIDAS FRIAS</Category>

                {products.map((product, index) =>
                    product.type === "fria" ? (
                        <Products
                            key={index}
                            category={product.category}
                            description={product.description}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            shortDescription={product.shortDescription}
                            stock={product.stock}
                            type={product.type}
                            id={product._id}
                        />
                    ) : (
                        ""
                    )
                )}
            </>
        </Screen>
    );
}

const Screen = styled.div`
    height: 100vh;
`;

const Spacer = styled.div`
    height: 45px;
`;

const Category = styled.h2`
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 40px;
    color: #331a05;
`;

export default ProductList;
