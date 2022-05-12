import React from 'react';
import Paw from '../../../assets/icons/paw.svg';

const Popular = () => {
  return (
    <>
      <div className="pt-4 mx-6 sm:mx-2">
        <div className="text-xs mb-1">Popular Howls</div>
        <div
          id="container"
          className="border-gray-100
          bg-white
          w-full
          flex
          flex-row
          sm:max-w-md
          shadow-md
          rounded-sm"
        >
          <div
            className="w-8 h-full bg-blue-200
            flex
            flex-col
            justify-center
            items-center"
          >
            <img className="w-5 mt-1 mb-1" src={Paw} alt="paw icon" />
          </div>

          <div>
            <h2 className="ml-1 text-[5%]">
              <strong>b/barker</strong> User Name Posted May 8
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
