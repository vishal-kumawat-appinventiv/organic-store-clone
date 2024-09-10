const Error = ({ error }: { error: string }) => {
  return (
    <div className="my-14">
      <h1 className="text-3xl font-bold text-center">Error : {error}</h1>
    </div>
  );
};

export default Error;
