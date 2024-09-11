import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="my-14 flex gap-4 items-center justify-center w-full">
      <h1 className="text-3xl font-bold text-center">Loading</h1>
      <PulseLoader />
    </div>
  );
};

export default Loading;
