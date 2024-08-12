import React from "react";

interface Props {
  children: React.ReactNode;
}

const ProductDetailLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <div className="w-full py-8 bg-gradient-to-r from-blue-900 to-black mt-9">
        <h1 className="text-white text-3xl font-bold text-center">
          Featured Products
        </h1>
      </div>
    </>
  );
};

export default ProductDetailLayout;
