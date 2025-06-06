import styled from "styled-components";
import { NavLink } from "react-router-dom";
function truncate(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

const ProductCard = ({ product }) => {
  const { id, name, company, price, category, image, description } = product;
  return (
    <>
      <ProductCardWrapper className="card">
        <NavLink to={`/singleProduct/${id}`}>
          <div className="contents">
            <img className="image" src={image} alt={name} />
            <div className="details">
              <div className="product-name">{name}</div>
              <div className="product-proce">{company}</div>
              <div className="product-description">{price}</div>
              <div className="product-category">{category}</div>
              <div className="product-description">
                {truncate(description, 60)}
              </div>
            </div>
          </div>
        </NavLink>
        <button className=" add-to-cart">Add To Cart</button>
      </ProductCardWrapper>
    </>
  );
};
const ProductCardWrapper = styled.section`
  position: relative;
  max-width: 400px;
  background-color: white;
  border-radius: 1.5rem;
  box-shadow: 2px 2px 20px 1px lightgreen;
  padding: 6px;
  height: fit-content;
  color: darkmagenta;
  margin-top: 2rem;
  .contents {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    height: 15rem;
    border-radius: 10px;
    border-radius: 1.5rem;
    transform: translateY(-2rem);
  }

  button {
    /* position: absolute;
    bottom: 1rem;
    transform: translateX(-50%); */
    margin: 4px;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    img {
      transform: translateY(-2rem) skew(-0.8deg);
      transition: all 0.3s ease-in-out;
    }
  }
`;
export default ProductCard;
