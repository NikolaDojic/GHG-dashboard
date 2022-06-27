import styled from "styled-components";
import { TProduct, TProductType, TSelectedProducts } from "../types";

type TProps = {
  selectedProducts: TSelectedProducts;
  setSelectedProducts: (TSelectedProducts: TSelectedProducts) => void;
  products: TProduct[];
};

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Tooltip = styled.div`
  position: absolute;
  background-color: var(--ghost-white);
  color: var(--castleton-green);
  visibility: hidden;
  z-index: 1000;
  box-shadow: 0px 0px 6px 1px #fff;
  margin-left: 10px;
  margin-top: -18px;
  padding: 5px 10px;
  left: 150px;
`;

const CheckboxWrapper = styled.div`
  position: relative;
  &:hover {
    & div {
      visibility: visible;
    }
  }
`;

const ProductsSelect = ({
  selectedProducts,
  setSelectedProducts,
  products,
}: TProps): JSX.Element => {
  const onChange = (productName: TProductType) =>
    setSelectedProducts({
      ...selectedProducts,
      [productName]: !selectedProducts[productName],
    });
  return (
    <SelectWrapper>
      <span>Selct GHG:</span>
      {products.map((product: TProduct) => (
        <CheckboxWrapper key={product.name}>
          <input
            id={product.name}
            name={product.name}
            value={product.name}
            type="checkbox"
            checked={selectedProducts[product.name]}
            onChange={() => onChange(product.name)}
          />{" "}
          <label htmlFor={product.name}>{product.name}</label>
          <Tooltip>{product.description}</Tooltip>
        </CheckboxWrapper>
      ))}
    </SelectWrapper>
  );
};

export default ProductsSelect;
