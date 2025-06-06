import React from "react";
import ProductCard from "./components/ProductCard";
import { useProductContext } from "./contextProviders/ProductContext";
import ProductSkeleton from "./components/Loading";
import styled from "styled-components";

const Products = () => {
  const { isLoading, products, isError } = useProductContext();
  return isLoading ? (
    <ProductSkeleton />
  ) : (
    <>
      <ProductWrapper>
        <h1>Products</h1>
        <div className="products">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </ProductWrapper>
    </>
  );
};

const ProductWrapper = styled.section`
  .products {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 2rem;
    column-gap: 2rem;
    margin: 2rem;
  }
`;
export default Products;
