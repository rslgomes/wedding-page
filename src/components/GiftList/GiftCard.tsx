import { generatePaymentData } from '../../helpers/functions';
import { Gift, PaymentModalState } from '../../helpers/types';
import GiftDescription from './GiftDescription';

interface GiftCardProps {
  gift: Gift;
  openModal: ({
    qrcodeUrl,
    link,
  }: Pick<PaymentModalState, 'qrcodeUrl' | 'link'>) => void;
}

const GiftCard: React.FC<GiftCardProps> = ({ gift, openModal }) => {
  const { name, imageUrl, cost } = gift;
  return (
    <div className="relative bg-primary-100 bg-opacity-30 rounded-lg shadow-lg overflow-hidden w-72 m-4">
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
      <button
        className="absolute top-2 right-2 bg-white bg-opacity-75 rounded-full p-2"
        onClick={() => openModal(generatePaymentData(cost))}
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
