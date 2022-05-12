import { useContext, useState } from 'react';
import { SiteContent } from '../../../../context/SiteContent';

import Checkmark from '../../../../assets/icons/check.svg';
import CheckmarkHover from '../../../../assets/icons/checkHover.svg';
import Poo from '../../../../assets/icons/poo.svg';
import PooHover from '../../../../assets/icons/pooHover.svg';

const QuantityAdjuster = () => {
  const [postVote, setPostVote] = useState(1);
  const [checkmarkHover, setCheckmarkHover] = useState(Checkmark);
  const [pooHover, setPooHover] = useState(Poo);

  const onCheckmarkClick = () => setCheckmarkHover(CheckmarkHover);

  return (
    <>
      <div
        className="w-8 pt-1 h-100% bg-blue-100
            flex
            flex-col
            justify-start
            items-center"
      >
        <button>
          <img
            className="w-5 h-5 mb-1"
            src={checkmarkHover}
            alt="checkmark"
            onClick={() => setCheckmarkHover(CheckmarkHover)}
            onMouseEnter={() => {
              setCheckmarkHover(CheckmarkHover);
            }}
            onMouseOut={() => {
              setCheckmarkHover(Checkmark);
            }}
          />
        </button>
        <p
          className="
          text=[#605649] 
          text-[10px] 
          w-full
          bg-transparent
          font-bold
          text-center
          border-none
          focus:border-none"
        >
          {postVote}
        </p>
        <img
          className="h-5 w-5 mt-1"
          src={pooHover}
          alt="downvote"
          onMouseEnter={() => {
            setPooHover(PooHover);
          }}
          onMouseOut={() => {
            setPooHover(Poo);
          }}
        />
      </div>
    </>
  );
};

export default QuantityAdjuster;
