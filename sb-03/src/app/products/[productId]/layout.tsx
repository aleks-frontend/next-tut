import React from "react";

interface Props {
  children: React.ReactNode;
}

const ProductDetailLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <h1 className="text-center mt-3 underline-offset-1 underline">Featured products</h1>
    </>
  );
};

export default ProductDetailLayout;
