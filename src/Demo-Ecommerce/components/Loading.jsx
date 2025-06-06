import React from "react";
import styled, { keyframes } from "styled-components";

const ProductSkeleton = () => {
  return (
    <SkeletonWrapper>
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonCard key={index}>
          <div className="image shimmer" />
          <div className="text shimmer short" />
          <div className="text shimmer" />
          <div className="text shimmer long" />
          <div className="text shimmer medium" />
          <div className="button shimmer" />
        </SkeletonCard>
      ))}
    </SkeletonWrapper>
  );
};

const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`;

const SkeletonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const SkeletonCard = styled.div`
  background-color: #f0fff0;
  border-radius: 1.5rem;
  padding: 1rem;
  box-shadow: 2px 2px 20px 1px #c0f0c0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 330px;

  .shimmer {
    background: linear-gradient(to right, #e0fce8 8%, #d4ffd9 18%, #e0fce8 33%);
    background-size: 800px 100%;
    animation: ${shimmer} 1.5s infinite linear;
    border-radius: 10px;
  }

  .image {
    width: 100%;
    height: 150px;
    margin-bottom: 1rem;
  }

  .text {
    height: 16px;
    width: 80%;
    margin: 6px 0;
  }

  .text.short {
    width: 50%;
  }
  .text.medium {
    width: 70%;
  }
  .text.long {
    width: 90%;
  }

  .button {
    width: 50%;
    height: 32px;
    margin-top: 1rem;
    border-radius: 8px;
  }
`;

export default ProductSkeleton;
