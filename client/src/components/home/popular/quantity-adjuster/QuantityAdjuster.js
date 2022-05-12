import { useContext, useState } from 'react';
import { SiteContent } from '../../../../context/SiteContent';

import Checkmark from '../../../../assets/icons/check.svg';
import CheckmarkHover from '../../../../assets/icons/checkHover.svg';
import Poo from '../../../../assets/icons/poo.svg';
import PooHover from '../../../../assets/icons/pooHover.svg';

const QuantityAdjuster = () => {
  const [postVotes, setPostVotes] = useState(2);
  const [checkmarkHover, setCheckmarkHover] = useState(Checkmark);
  const [pooHover, setPooHover] = useState(Poo);
  const [checkSelected, setCheckSelected] = useState(false);
  const [pooSelected, setPooSelected] = useState(false);

  const handleIncreaseClick = (event) => {
    if (!checkSelected && !pooSelected) {
      setCheckSelected(true);
      setPostVotes((postVote) => parseInt(postVote + 1));
      return;
    }
    if (!checkSelected && pooSelected) {
      setCheckSelected(true);
      setPooSelected(false);
      setPostVotes((postVotes) => parseInt(postVotes + 2));
    }
    if (checkSelected) {
      return;
    }
  };

  const handleDecreaseClick = () => {
    if (!checkSelected && !pooSelected) {
      setPooSelected(true);
      setPostVotes((postVotes) => parseInt(postVotes - 1));
      return;
    }
    if (!pooSelected && checkSelected) {
      setCheckSelected(false);
      setPooSelected(true);
      setPostVotes((postVotes) => parseInt(postVotes - 2));
    }
    if (pooSelected) {
      return;
    }
  };

  return (
    <>
      <div
        className="w-8 pt-1 h-100% bg-blue-100
            flex
            flex-col
            justify-start
            items-center"
      >
        <button onClick={handleIncreaseClick}>
          <img
            className="w-5 h-5 mb-1"
            src={checkmarkHover}
            alt="checkmark"
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
          {postVotes}
        </p>
        <button onClick={handleDecreaseClick}>
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
        </button>
      </div>
    </>
  );
};

export default QuantityAdjuster;
