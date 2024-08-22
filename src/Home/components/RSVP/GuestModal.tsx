import { FC } from 'react';
import Spinner from 'Shared/Spinner';
import { Guest } from 'helpers/types';
import IconButton from 'Shared/IconButton';

interface GuestModalProps {
  guest: Guest | null;
  bundle: Guest[];
  handleClose: () => void;
  updateGuestStatus: (guest: Guest, status: boolean) => void;
  clearGuestStatus: (guest: Guest) => void;
  handleBundleSubmit: (bundle: Guest[]) => void;
  isLoading: boolean;
}

const GuestModal: FC<GuestModalProps> = ({
  guest,
  bundle,
  isLoading,
  handleClose,
  updateGuestStatus,
  clearGuestStatus,
  handleBundleSubmit,
}) => {
  const handleConfirmClick = (guest: Guest) => {
    if (!guest.confirmed) updateGuestStatus(guest, true);
    else clearGuestStatus(guest);
  };
  const handleCancelClick = (guest: Guest) => {
    if (guest.confirmed !== false) updateGuestStatus(guest, false);
    else clearGuestStatus(guest);
  };
  if (!guest) return null;
  const closeIcon = (
    <svg
      className="w-6 h-6 text-primary-700"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  return (
    <div className="fixed inset-0 bg-primary-950 bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-primary-100 bg-opacity-95 p-6 max-w-sm md:max-w-lg w-full flex flex-col flex-nowrap relative rounded-md">
        {!isLoading && (
          <IconButton
            onClick={handleClose}
            className="absolute top-2 right-2"
            icon={closeIcon}
          />
        )}
        <p className="font-primary text-primary-700 mb-8 pe-10">
          {guest.name}, confirme{' '}
          {bundle.length > 1 ? 'as presenças' : 'presença'} abaixo:
        </p>
        <div className="flex-col space-y-2  max-h-72 overflow-y-auto pr-2 shadow-inner">
          {bundle.map((guest) => (
            <div
              key={guest.name}
              className="flex justify-between items-center w-full"
            >
              <p className="font-primary text-primary-700">{guest.name}</p>
              <div className="space-x-4 flex flex-nowrap">
                <button
                  onClick={() => {
                    if (!isLoading) handleConfirmClick(guest);
                  }}
                  className={`${
                    guest.confirmed
                      ? 'bg-secondary-500 text-primary-100 border-primary-100'
                      : 'bg-primary-100 text-secondary-500 border-secondary-500'
                  } py-1 px-2 border-2 rounded w-16
                  
                  ${isLoading ? 'opacity-30 cursor-none' : ''}`}
                >
                  Sim
                </button>
                <button
                  onClick={() => {
                    if (!isLoading) handleCancelClick(guest);
                  }}
                  className={`${
                    guest.confirmed === false
                      ? 'bg-link text-primary-100 border-primary-100'
                      : 'bg-primary-100 text-link border-link'
                  } py-1 px-2 border-2 rounded w-16
                  ${isLoading ? 'opacity-30 cursor-none' : ''}`}
                >
                  Não
                </button>
              </div>
            </div>
          ))}
        </div>
        {isLoading ? (
          <Spinner className="self-center mt-4" />
        ) : (
          <button
            onClick={() => handleBundleSubmit(bundle)}
            className="mt-8 bg-primary-100 text-primary-500 py-2 px-4 border-primary-500 border-2 rounded self-end w-36"
          >
            Concluir
          </button>
        )}
      </div>
    </div>
  );
};

export default GuestModal;
