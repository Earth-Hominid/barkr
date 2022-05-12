import React from 'react';

const Trending = () => {
  return (
    <>
      <div className="flex flex-col pt-4 mx-6 sm:mx-2">
        <div className="text-xs mb-1">Trending Today</div>

        <div className="flex flex-wrap sm:flex-nowrap align-items justify-center">
          <div className="bg-stone-700 max-w-xs p-3 rounded-md mx-1 my-1">
            <h2 className="text-sm text-white">World News</h2>
            <h3 className="text-xs text-white">
              Rank 2022 Top breed is still Retrievers (Labrador)
            </h3>
          </div>

          <div className="bg-stone-700 max-w-xs p-3 rounded-md mx-1 my-1">
            <h2 className="text-sm text-white">Nutrition</h2>
            <h3 className="text-xs text-white">
              Water bowl should be changed at least once daily.
            </h3>
          </div>

          <div className="bg-stone-700 max-w-xs p-3 rounded-md mx-1 my-1">
            <h2 className="text-sm text-white">Health & Exercise</h2>
            <h3 className="text-xs text-white">
              Recommended daily exercise for dogs is 30 minutes to 2 hours
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
