import { FC } from 'react';
import { Guest } from '../../helpers/types';

interface GuestModalProps {
  guest: Guest | null;
  bundle: Guest[];
  handleClose: () => void;
  updateGuestStatus: (guest: Guest, status: boolean) => void;
  clearGuestStatus: (guest: Guest) => void;
}

const GuestModal: FC<GuestModalProps> = ({
  guest,
  bundle,
  handleClose,
  updateGuestStatus,
  clearGuestStatus,
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
  return (
    <div className="fixed inset-0 bg-primary-950 bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-primary-200 to-primary-100 p-6 max-w-sm w-full flex flex-col flex-nowrap">
        <p className="font-primary text-primary-500 mb-3">
          {guest.name}, confirme{' '}
          {bundle.length > 1 ? 'as presenças' : 'presença'} abaixo:
        </p>
        <div className="flex-col space-y-2 bg-primary-100 py-2 px-3 border border-primary-500">
          {bundle.map((guest) => (
            <div
              key={guest.name}
              className="flex justify-between items-center w-full"
            >
              <p className="font-primary text-primary-700">{guest.name}</p>
              <div className="space-x-2">
                <button
                  onClick={() => handleConfirmClick(guest)}
                  className={`${
                    guest.confirmed
                      ? 'bg-secondary-500 text-primary-100 border-primary-100'
                      : 'bg-primary-100 text-secondary-500 border-secondary-500'
                  } py-1 px-2 border-2 rounded`}
                >
                  Sim
                </button>
                <button
                  onClick={() => handleCancelClick(guest)}
                  className={`${
                    guest.confirmed === false
                      ? 'bg-link text-primary-100 border-primary-100'
                      : 'bg-primary-100 text-link border-link'
                  } py-1 px-2 border-2 rounded`}
                >
                  Não
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleClose}
          className="mt-4 bg-primary-100 text-primary-500 py-2 px-4 border-primary-500 border-2 rounded self-end w-min"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default GuestModal;
