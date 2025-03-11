
const CardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="h-5 w-20 bg-gray-300 rounded mb-2"></div>
      <div className="w-[401px] h-6 bg-gray-300 rounded my-2"></div>
      <div className="w-[401px] h-[229px] bg-gray-300 rounded-md"></div>
      <div className="flex items-center gap-2 mt-4">
        <div className="h-5 w-5 rounded-full bg-gray-300"></div>
        <div className="h-4 w-16 bg-gray-300 rounded"></div>
        <div className="h-4 w-10 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
