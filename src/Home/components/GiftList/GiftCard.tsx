import React from 'react';
import GiftDescription from './GiftDescription';
import { Gift, PaymentModalState } from '../../../helpers/types';
import { COST_MODAL_DATA_MAP } from '../../../helpers/constants';

interface GiftCardProps {
  gift: Gift;
  openModal: ({
    pix_src,
    code,
  }: Pick<PaymentModalState, 'pix_src' | 'code'>) => void;
}

const GiftCard: React.FC<GiftCardProps> = ({ gift, openModal }) => {
  const { name, imageUrl, cost } = gift;

  const handleButtonClick = () => {
    if (typeof cost === 'number') {
      openModal(COST_MODAL_DATA_MAP[cost]);
    } else {
      openModal(COST_MODAL_DATA_MAP['custom']);
    }
  };

  return (
    <div className="relative bg-primary-100 bg-opacity-30 rounded-lg shadow-lg overflow-hidden w-72 m-4">
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
      <button
        className="absolute top-2 right-2 bg-white bg-opacity-75 rounded-full p-2"
        onClick={handleButtonClick}
      >
        <h3 className="text-secondary-500">Comprar</h3>
      </button>
      <div className="p-4">
        <h3 className="text-lg text-primary-700 font-bold">{name}</h3>
        <GiftDescription name={name} cost={cost} />
      </div>
    </div>
  );
};

export default GiftCard;
