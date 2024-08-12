const FirstReview = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  return (
    <h1 className="text-center">
      Product {params.productId} Review {params.reviewId}
    </h1>
  );
};

export default FirstReview;
