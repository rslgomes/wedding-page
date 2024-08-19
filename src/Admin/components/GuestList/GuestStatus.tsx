import React from 'react';

interface GuestStatusProps {
  confirmed: boolean | undefined;
}

const GuestStatus: React.FC<GuestStatusProps> = ({ confirmed }) => {
  switch (confirmed) {
    case true:
      return (
        <div className="px-2 py-1 w-36 bg-green-700 bg-opacity-20 text-green-700 rounded-lg text-sm text-center">
          Confirmado
        </div>
      );
    case false:
      return (
        <div className="px-2 py-1 w-36 bg-link bg-opacity-20 text-link rounded-lg text-sm text-center">
          Não Confirmado
        </div>
      );
    default:
      return (
        <div className="px-2 py-1 w-36 bg-gray-700 bg-opacity-20 text-gray-700 rounded-lg text-sm text-center">
          Pendente
        </div>
      );
  }
};

export default GuestStatus;
