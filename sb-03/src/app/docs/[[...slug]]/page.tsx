const Docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  if (params.slug?.length === 1) {
    return (
      <h1 className="text-center">
        Viewing docs for feature "{params.slug[0]}"
      </h1>
    );
  } else if (params.slug?.length === 2) {
    return (
      <h1 className="text-center">
        Viewing docs for feature "{params.slug[0]}" and for concept "
        {params.slug[1]}"
      </h1>
    );
  }

  return (
    <div>
      <h1>Docs pages</h1>
    </div>
  );
};

export default Docs;
