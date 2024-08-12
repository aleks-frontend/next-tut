const FristBlog = ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  return <h1 className="text-center">Product detail {params.productId}</h1>;
};

export default FristBlog;
