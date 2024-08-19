import React, { useState } from 'react';
import { Guest } from 'helpers/types';
import IconButton from 'Shared/IconButton';
import Spinner from 'Shared/Spinner';
import { ReactComponent as CircleX } from 'Admin/components/GuestList/Icons/CircleX.svg';
import { ReactComponent as CirclePlus } from 'Admin/components/GuestList/Icons/CirclePlus.svg';

interface EditGuestModalProps {
  guest: Guest;
  onClose: () => void;
  onSave: (updatedGuest: Guest) => void;
  isLoading: boolean;
}

const EditGuestModal: React.FC<EditGuestModalProps> = ({
  guest,
  onClose,
  onSave,
  isLoading,
}) => {
  const [formData, setFormData] = useState({
    name: guest.name,
    keywords: guest.keywords,
    confirmed: guest.confirmed,
    bundle: guest.bundle,
  });

  const handleConfirmPresenceClick = () => {
    setFormData({
      ...formData,
      confirmed: formData.confirmed ? undefined : true,
    });
  };
  const handleCancelPresenceClick = () => {
    setFormData({
      ...formData,
      confirmed: formData.confirmed === false ? undefined : false,
    });
  };

  const handleKeywordChange = (index: number, value: string) => {
    const newKeywords = [...formData.keywords];
    newKeywords[index] = value;
    setFormData({ ...formData, keywords: newKeywords });
  };

  const handleAddKeyword = () => {
    setFormData({ ...formData, keywords: [...formData.keywords, ''] });
  };

  const handleRemoveKeyword = (index: number) => {
    const newKeywords = formData.keywords.filter((_, i) => i !== index);
    setFormData({ ...formData, keywords: newKeywords });
  };

  const handleSubmit = () => {
    onSave({ ...guest, ...formData });
  };

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
    <div className="fixed inset-0 bg-primary-950 bg-opacity-70 flex items-center justify-center z-50 text-primary-950">
      <div className="bg-primary-100 bg-opacity-95 p-6 max-w-sm md:max-w-lg w-full flex flex-col flex-nowrap relative rounded-md">
        <IconButton
          onClick={onClose}
          className="absolute top-2 right-2"
          icon={closeIcon}
        />
        <h2 className="text-xl mb-4">Editar Convidado</h2>
        <div className="mb-4">
          <label className="block mb-1 text-lg">Nome</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border-none bg-primary-200 rounded focus:ring-0"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-lg">Palavras-chave</label>
          {formData.keywords.map((keyword, index) => (
            <div
              key={index}
              className="flex items-center content-between w-full border-none rounded pe-2 bg-primary-200 mb-2"
            >
              <input
                type="text"
                value={keyword}
                onChange={(e) => handleKeywordChange(index, e.target.value)}
                className="border-none rounded bg-primary-200 me-auto"
              />
              <IconButton
                icon={<CircleX />}
                onClick={() => handleRemoveKeyword(index)}
                className="text-primary-700"
              />
            </div>
          ))}
          <IconButton
            icon={<CirclePlus />}
            onClick={handleAddKeyword}
            className="text-primary-700"
          />
          <div className="flex items-center content-between">
            <p className="me-auto text-lg">Confirmado</p>
            <div className="space-x-4">
              <button
                onClick={() => {
                  if (!isLoading) handleConfirmPresenceClick();
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
                  if (!isLoading) handleCancelPresenceClick();
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
        </div>
        <div className="flex justify-end mt-8">
          <button
            onClick={onClose}
            className="border-primary-700 border-2 bg-primary-100 text-primary-700 py-2 px-4 rounded w-24"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className={`bg-primary-700 text-primary-100 py-2 px-4 rounded w-24 ml-4 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            Salvar
          </button>
        </div>
        {isLoading && <Spinner className="self-center mt-4" />}
      </div>
    </div>
  );
};

export default EditGuestModal;
