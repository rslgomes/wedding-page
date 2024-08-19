import React, { Fragment, useState } from 'react';
import { Guest } from 'helpers/types';
import IconButton from 'Shared/IconButton';
import Spinner from 'Shared/Spinner';
import { ReactComponent as CircleX } from 'Admin/components/GuestList/Icons/CircleX.svg';
import { ReactComponent as CirclePlus } from 'Admin/components/GuestList/Icons/CirclePlus.svg';
import { cleanName } from 'helpers/functions';

interface AddBundleModalProps {
  onClose: () => void;
  onSave: (bundleName: string, guests: Omit<Guest, '_id' | 'bundle'>[]) => void;
  isLoading: boolean;
  existingBundles: string[];
}

const AddBundleModal: React.FC<AddBundleModalProps> = ({
  onClose,
  onSave,
  isLoading,
  existingBundles,
}) => {
  const [bundleName, setBundleName] = useState('');
  const [guestList, setGuestList] = useState<Omit<Guest, '_id' | 'bundle'>[]>([
    { name: '', keywords: [], confirmed: undefined },
  ]);
  const [showAutoComplete, setShowAutoComplete] = useState(false);

  const handleAddGuest = () => {
    setGuestList([
      ...guestList,
      { name: '', keywords: [], confirmed: undefined },
    ]);
  };

  const handleGuestChange = (index: number, field: keyof Guest, value: any) => {
    const updatedGuests = [...guestList];
    updatedGuests[index] = { ...updatedGuests[index], [field]: value };
    setGuestList(updatedGuests);
  };

  const handleRemoveGuest = (index: number) => {
    setGuestList(guestList.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    onSave(bundleName, guestList);
  };

  const handleKeywordChange = (
    guestIdx: number,
    keywordIdx: number,
    value: string
  ) => {
    const currentKeywords = guestList[guestIdx].keywords;
    const updatedKeywords = currentKeywords.map((keyword, idx) => {
      if (idx === keywordIdx) return value;
      return keyword;
    });
    handleGuestChange(guestIdx, 'keywords', updatedKeywords);
  };
  const handleAddKeyword = (guestIdx: number) => {
    const currentKeywords = guestList[guestIdx].keywords.slice();
    const updatedKeywords = [...currentKeywords, ''];
    handleGuestChange(guestIdx, 'keywords', updatedKeywords);
  };
  const handleRemoveKeyword = (guestIdx: number, keywordIdx: number) => {
    const currentKeywords = guestList[guestIdx].keywords.slice();
    const updatedKeywords = currentKeywords.filter(
      (_, idx) => idx !== keywordIdx
    );
    handleGuestChange(guestIdx, 'keywords', updatedKeywords);
  };

  return (
    <div className="fixed inset-0 bg-primary-950 bg-opacity-70 flex items-center justify-center z-50 text-primary-950">
      <div className="bg-primary-100 bg-opacity-95 p-6 max-w-md w-full flex flex-col relative rounded-md">
        <h2 className="text-xl mb-4">
          Adicionar lista de convidados pelo bundle
        </h2>

        <div className="mb-4 relative">
          <label className="block mb-1 text-lg">Nome do bundle</label>
          <input
            type="text"
            value={bundleName}
            onChange={(e) => setBundleName(e.target.value)}
            onFocus={() => setShowAutoComplete(true)}
            onBlur={() => setShowAutoComplete(false)}
            className="w-full p-2 border-none rounded bg-primary-200 focus:ring-0"
          />
          {showAutoComplete && (
            <div className="absolute left-0 right-0 -bottom-20 bg-primary-100 border-none shadow-md overflow-y-auto h-20 p-2 flex flex-col items-start">
              {existingBundles
                .filter((bundle) =>
                  cleanName(bundle).includes(cleanName(bundleName))
                )
                .map((bundle) => (
                  <button onMouseDown={() => setBundleName(bundle)}>
                    {bundle}
                  </button>
                ))}
            </div>
          )}
        </div>
        <div className=" overflow-y-auto max-h-52 px-4 shadow-inner">
          {guestList.map((guest, index, arr) => (
            <div
              key={index}
              className={`flex flex-col mb-4 pb-4${
                index === arr.length - 1 ? '' : ' border-b-2 border-primary-950'
              }`}
            >
              <label className="block mb-0">Convidado {index + 1}</label>
              <input
                type="text"
                placeholder="Nome..."
                value={guest.name}
                onChange={(e) =>
                  handleGuestChange(index, 'name', e.target.value)
                }
                className="w-full p-2 border-none rounded bg-primary-200 focus:ring-0"
              />
              <label className="block mb-0 mt-2">Palavras-Chave</label>
              {guest.keywords.map((keyword, keywordIdx) => (
                <Fragment key={keywordIdx}>
                  <div className="flex items-center content-between w-full border-none rounded pe-2 bg-primary-200 mb-2">
                    <input
                      type="text"
                      value={keyword}
                      onChange={(e) =>
                        handleKeywordChange(index, keywordIdx, e.target.value)
                      }
                      className="border-none rounded bg-primary-200 me-auto focus:ring-0 focus:border-none"
                    />
                    <IconButton
                      icon={<CircleX />}
                      onClick={() => handleRemoveKeyword(index, keywordIdx)}
                      className="text-primary-700"
                    />
                  </div>
                </Fragment>
              ))}
              <div className="flex flex-row items-center justify-between">
                <IconButton
                  icon={<CirclePlus />}
                  onClick={() => handleAddKeyword(index)}
                  className="text-primary-700 self-start"
                />
                <button
                  onClick={() => handleRemoveGuest(index)}
                  className="self-end bg-link text-primary-100 p-2 px-3 rounded mt-2"
                >
                  Remover Convidado
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleAddGuest}
          className="bg-secondary-500 text-white p-2 rounded mt-2"
        >
          Adicionar Convidado
        </button>

        {isLoading ? (
          <Spinner className="self-center mt-4" />
        ) : (
          <div className="flex justify-end space-x-4 mt-4">
            <button
              onClick={onClose}
              className="border-primary-700 border-2 bg-primary-100 text-primary-700 py-2 px-4 rounded w-24"
            >
              Cancelar
            </button>
            <button
              onClick={handleSubmit}
              className={`bg-primary-700 text-primary-100 py-2 px-4 rounded w-24 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isLoading}
            >
              Salvar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddBundleModal;
