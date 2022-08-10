import { NextPage } from 'next';
import React from 'react';

interface Props {
  buttonText: string;
  isDisabled?: boolean;
  submitFunction: (event: React.FormEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
}

const ButtonComponent: NextPage<Props> = ({
  buttonText,
  isDisabled,
  submitFunction,
  isLoading
}) => {
  return (
    <button
      className={`${isDisabled ? 'ring-1 text-red-300 ring-red-300 cursor-not-allowed': 'bg-green-500 hover:bg-green-400'} text-white font-bold py-2 px-4 rounded`}
      type='button'
      onClick={submitFunction}
      disabled={isDisabled}
    >
      { isLoading ? (<i className='fa fa-circle-o-notch fa-spin'></i>) : buttonText }
    </button>
  );
};

export default ButtonComponent