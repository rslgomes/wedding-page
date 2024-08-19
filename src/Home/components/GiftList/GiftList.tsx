import React, { useState } from 'react';
import GiftCard from './GiftCard';
import PaymentModal from './PaymentModal';
import { PaymentModalState } from '../../../helpers/types';
import { GIFTS } from '../../../helpers/constants';

const GiftListDisplay: React.FC = () => {
  const [modalState, setModalState] = useState<PaymentModalState>({
    open: false,
    pix_src: '',
    code: '',
  });
  const openModal = ({
    pix_src,
    code,
  }: Pick<PaymentModalState, 'pix_src' | 'code'>) =>
    setModalState({
      open: true,
      pix_src,
      code,
    });
  const closeModal = () =>
    setModalState({
      open: false,
      pix_src: '',
      code: '',
    });
  return (
    <>
      <PaymentModal onClose={closeModal} state={modalState} />
      <div className=" bg-primary-100 flex flex-wrap justify-center md:justify-start space-x-4 p-4">
        {GIFTS.map((gift) => (
          <GiftCard key={gift.name} gift={gift} openModal={openModal} />
        ))}
      </div>
    </>
  );
};

export default GiftListDisplay;
