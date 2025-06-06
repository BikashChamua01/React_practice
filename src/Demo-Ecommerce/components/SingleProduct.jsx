import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useProductContext } from "../contextProviders/ProductContext";
import { FaShippingFast, FaCheckCircle } from "react-icons/fa";

const olive = "#808000";
const green = "#27ae60";
const lightOlive = "#f6f7ed";
const darkOlive = "#556b2f";

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.98);}
  to { opacity: 1; transform: scale(1);}
`;

const SingleProduct = () => {
  const { id } = useParams();
  const { singleProduct, setSingleProduct } = useProductContext();
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  const fetchProduct = useCallback(() => {
    setSingleProduct(id);
  }, [id, setSingleProduct]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  useEffect(() => {
    setActiveImgIdx(0);
  }, [singleProduct]);

  if (!singleProduct || !singleProduct.id) {
    return <Loader>Loading...</Loader>;
  }

  const {
    name,
    company,
    category,
    price,
    colors = [],
    description,
    image = [],
    shipping,
  } = singleProduct;

  // Ensure images is always an array of URLs
  const images = Array.isArray(image)
    ? image.map((img, idx) =>
        typeof img === "string"
          ? img
          : img.url
          ? img.url
          : `image-fallback-${idx}`
      )
    : [typeof image === "string" ? image : image.url];

  return (
    <Wrapper>
      <GallerySection>
        <Thumbnails>
          {images.map((img, idx) => (
            <Thumbnail
              key={img + idx}
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              $isActive={idx === activeImgIdx}
              onClick={() => setActiveImgIdx(idx)}
            />
          ))}
        </Thumbnails>
        <MainImageArea>
          <MainImageWrapper>
            <ProductImage
              src={images[activeImgIdx]}
              alt={name}
              key={images[activeImgIdx]}
            />
          </MainImageWrapper>
          <ColorsBar>
            <ColorsLabel>Colors:</ColorsLabel>
            {colors.map((c, idx) => (
              <ColorDot key={c + idx} color={c} title={c} />
            ))}
          </ColorsBar>
        </MainImageArea>
      </GallerySection>
      <InfoSection>
        <ProductName>{name}</ProductName>
        <Company>
          by <span>{company}</span>
        </Company>
        <Category>
          Category: <span>{category}</span>
        </Category>
        <Price>₹{price?.toLocaleString()}</Price>
        <Description>{description}</Description>
        <Shipping>
          {shipping ? (
            <>
              <FaShippingFast color={olive} /> <span>Free Shipping</span>
            </>
          ) : (
            <>
              <FaCheckCircle color="#bbb" /> <span>Standard Delivery</span>
            </>
          )}
        </Shipping>
        <ButtonsRow>
          <BuyButton>Buy Now</BuyButton>
          <AddToCartButton>Add to Cart</AddToCartButton>
        </ButtonsRow> 
      </InfoSection>
    </Wrapper>
  );
};

export default SingleProduct;

// Styled Components

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  background: linear-gradient(120deg, #fff, ${lightOlive} 100%);
  padding: 3rem 5vw;
  border-radius: 24px;
  box-shadow: 0 12px 32px rgba(128, 128, 0, 0.07);
  max-width: 1200px;
  margin: 3rem auto;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1vw;
  }
`;

const GallerySection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  flex: 1 1 420px;
  min-width: 320px;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }
`;

const Thumbnails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: row;
    gap: 0.7rem;
    margin-bottom: 0.7rem;
  }
`;

const Thumbnail = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 12px;
  border: 2.5px solid ${({ $isActive }) => ($isActive ? olive : "#ddd")};
  cursor: pointer;
  box-shadow: ${({ $isActive }) =>
    $isActive ? `0 0 0 3px ${olive}` : "0 1px 6px rgba(128,128,0,0.08)"};
  transition: border 0.2s, box-shadow 0.2s, transform 0.22s;
  background: #fff;
  &:hover {
    border: 2.5px solid ${green};
    transform: scale(1.08) rotate(-2deg);
  }
`;

const MainImageArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 250px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const MainImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 250px;
  min-height: 350px;
  background: linear-gradient(120deg, #fff, ${lightOlive} 100%);
  border-radius: 18px;
  box-shadow: 0 6px 24px rgba(128, 128, 0, 0.13);
  padding: 1.2rem;
  animation: ${fadeIn} 0.5s cubic-bezier(0.6, 0.2, 0.1, 1);
  @media (max-width: 600px) {
    min-height: 220px;
    padding: 0.5rem;
  }
`;

const ProductImage = styled.img`
  max-width: 340px;
  max-height: 400px;
  width: 100%;
  height: auto;
  border-radius: 16px;
  background: #fff;
  object-fit: contain;
  animation: ${fadeIn} 0.5s cubic-bezier(0.6, 0.2, 0.1, 1);
  box-shadow: 0 4px 24px rgba(128, 128, 0, 0.09);
  @media (max-width: 600px) {
    max-width: 90vw;
    max-height: 220px;
  }
`;

const ColorsBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    margin-top: 0.6rem;
  }
`;

const ColorsLabel = styled.span`
  font-weight: 600;
  color: ${olive};
  font-size: 1.05rem;
  margin-right: 0.7rem;
`;

const ColorDot = styled.span`
  display: inline-block;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${(props) => props.color || green};
  border: 2.5px solid #fff;
  box-shadow: 0 2px 8px rgba(128, 128, 0, 0.14);
`;

const InfoSection = styled.div`
  flex: 2 1 400px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: center;
  min-width: 280px;
  @media (max-width: 900px) {
    padding-left: 0;
    align-items: center;
    text-align: center;
  }
`;

const ProductName = styled.h1`
  color: ${darkOlive};
  font-size: 2.3rem;
  font-weight: 800;
  margin-bottom: 0.2rem;
  letter-spacing: -1px;
`;

const Company = styled.p`
  font-size: 1.08rem;
  color: #888;
  margin-bottom: 0.1rem;
  span {
    color: ${olive};
    font-weight: 600;
  }
`;

const Category = styled.p`
  font-size: 1rem;
  color: #444;
  span {
    color: ${olive};
    font-weight: 500;
  }
`;

const Price = styled.div`
  font-size: 2rem;
  color: ${olive};
  font-weight: 700;
  margin: 0.8rem 0;
`;

const Description = styled.p`
  color: #222;
  font-size: 1.15rem;
  line-height: 1.7;
  margin: 1rem 0;
  background: #f8fff8;
  border-left: 5px solid ${olive};
  padding: 1rem;
  border-radius: 8px;
  animation: ${fadeIn} 0.6s;
`;

const Shipping = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1.1rem;
  color: ${olive};
  margin: 1.2rem 0 1.8rem;
  span {
    font-weight: 600;
  }
  justify-content: center;
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1.5rem;
  justify-content: flex-start;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const buttonBase = `
  font-size: 1.15rem;
  font-weight: 700;
  border: none;
  border-radius: 12px;
  padding: 0.9rem 2.2rem;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(128,128,0,0.13);
  transition: background 0.18s, transform 0.18s;
  letter-spacing: 1px;
  min-width: 140px;
  min-height: 48px;
`;

const BuyButton = styled.button`
  ${buttonBase}
  background: linear-gradient(90deg, ${olive}, ${green} 70%);
  color: #fff;
  &:hover {
    background: linear-gradient(90deg, ${green}, ${olive} 90%);
    transform: translateY(-2px) scale(1.04);
  }
`;

const AddToCartButton = styled.button`
  ${buttonBase}
  background: #fff;
  color: ${olive};
  border: 2px solid ${olive};
  &:hover {
    background: ${lightOlive};
    color: ${darkOlive};
    border-color: ${green};
    transform: translateY(-2px) scale(1.04);
  }
`;

const Loader = styled.div`
  text-align: center;
  color: ${olive};
  font-size: 2rem;
  padding: 4rem 0;
`;
