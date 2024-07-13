import React, { useState } from 'react';
import GiftCard from './GiftCard';
import { GIFTS } from '../../helpers/constants';
import PaymentModal from './PaymentModal';
import { PaymentModalState } from '../../helpers/types';

const GiftListDisplay: React.FC = () => {
  const [modalState, setModalState] = useState<PaymentModalState>({
    open: false,
    qrcodeUrl: '',
    link: '',
  });
  const openModal = ({
    qrcodeUrl,
    link,
  }: Pick<PaymentModalState, 'qrcodeUrl' | 'link'>) =>
    setModalState({
      open: true,
      qrcodeUrl,
      link,
    });
  const closeModal = () =>
    setModalState({
      open: false,
      qrcodeUrl: '',
      link: '',
    });
  return (
    <>
      <PaymentModal onClose={closeModal} state={modalState} />
      <div className=" bg-secondary-100 overflow-y-scroll flex space-x-4 p-4">
        {GIFTS.map((gift) => (
          <GiftCard key={gift.name} gift={gift} openModal={openModal} />
        ))}
      </div>
    </>
  );
};

export default GiftListDisplay;
