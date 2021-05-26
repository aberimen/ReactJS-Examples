import React from "react";
import ProductCard from "../ProductCard";
import { Container, Row } from "react-bootstrap";

const ProductsGrid = ({ products, updateCart, cart, addToCart }) => {
  return (
    <Container>
      <Row sm="2" md="3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cartItem={cart.find(c => c.product.id === product.id)} // sepetteki ürün
            addToCart={addToCart}
            updateCart={updateCart}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ProductsGrid;
