import React from 'react';
import Paw from '../../../assets/icons/paw.svg';
import Talk from '../../../assets/icons/talkBubble.svg';

const Popular = () => {
  return (
    <>
      <div className="pt-4 mx-6 sm:mx-2">
        <div className="text-xs mb-1">Popular Howls</div>
        <div className="sm:flex w-full mt-1 sm:justify-center">
          <div
            id="container"
            className="
          border-solid
          border-stone-300
          border-x
          border-y
          bg-white
          w-full
          flex
          flex-row
          sm:max-w-lg
          shadow-md
          rounded-sm
          cursor-pointer
          hover:border-stone-900
          hover:border-dotted
          hover:border-2"
          >
            <div
              className="w-8 h-100% bg-blue-100
            flex
            flex-col
            justify-center
            items-center"
            >
              <img className="w-5 mt-1 mb-1" src={Paw} alt="paw icon" />
              <img className="w-5 mt-1 mb-1" src={Paw} alt="paw icon" />
            </div>

            <div>
              <h2 className="ml-1 mt-1 text-[5%]">
                <strong>b/barker</strong> User Name Posted May 8
              </h2>
              <h1 className="pt-1 pl-2 text-lg">This is the heading.</h1>
              <h2 className="pt-1 pl-2 pb-2">
                This is the content. This is more content.
              </h2>
              <div className="flex justify-end order-last flex-row w-full">
                <img src={Talk} alt="paw" className="pb-1 w-6 mr-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
