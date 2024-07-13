import React, { useState } from 'react';
import { PaymentModalState } from '../../helpers/types';
import { error } from 'console';

interface PaymentModalProps {
  state: PaymentModalState;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ state, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { open, qrcodeUrl, link } = state;
  if (!open) return null;
  const handleCopyLink = () => {
    navigator.clipboard.writeText(link).then(
      () => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },
      (error) => {
        console.error('Failed to copy link: ', error);
      }
    );
  };

  return (
    <div className="fixed inset-0 bg-primary-950 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-primary-100 p-6 rounded-lg shadow-lg max-w-sm w-full flex flex-col flex-nowrap">
        <img
          src={qrcodeUrl}
          alt="Payment QR Code"
          className="w-full h-auto mb-4"
        />
        <p className="text-gray-700 text-sm mb-4">
          Escaneie o qrCode com seu celular ou clique no link para copiá-lo para
          a sua área de transferência
        </p>
        <div className="flex flex-row flex-nowrap justify-between">
          <button
            className="text-link break-words self-start hover:underline"
            onClick={handleCopyLink}
          >
            {link}
          </button>
          <p
            className={`text-secondary-400 transition-opacity duration-500 ${
              copied ? 'opacity-100' : 'opacity-0'
            }`}
          >
            OK! ✓
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-primary-100 text-primary-700 py-2 px-4 border-primary-700 border-2 rounded self-end w-min"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
