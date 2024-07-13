import { useCallback, useMemo, useState } from 'react';
import { GUEST_LIST } from '../../helpers/constants';
import { Guest } from '../../helpers/types';
const useRSVP = () => {
  const [guestList, setGuestList] = useState<Guest[]>(GUEST_LIST);
  const [searchInput, setSearchInput] = useState('');
  const [filteredList, setFilteredList] = useState<Guest[]>([]);
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);

  const filterGuestList = useCallback(
    (input: string) => {
      const withFilter = guestList.filter((guest) => {
        return (
          guest.name.toLowerCase().includes(input.toLowerCase()) ||
          guest.keywords.some((keyword) =>
            keyword.toLowerCase().includes(input.toLowerCase())
          )
        );
      });
      setFilteredList(input.trim() ? withFilter : []);
    },
    [guestList]
  );

  const clearInput = useCallback(() => {
    setSearchInput('');
  }, []);

  const handleInputChange = useCallback(
    (value: string) => {
      setSearchInput(value);
      filterGuestList(value);
    },
    [filterGuestList]
  );

  const handleSelectGuest = useCallback((guest: Guest) => {
    setSelectedGuest(guest);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedGuest(null);
  }, []);

  const selectedBundle = useMemo(() => {
    if (!selectedGuest) return [];
    return guestList.filter((guest) => guest.bundle === selectedGuest.bundle);
  }, [selectedGuest, guestList]);

  const updateGuestStatus = useCallback(
    (updatedGuest: Guest, status: boolean) => {
      setGuestList((prevList) => {
        return prevList.map((guest) => {
          const isUpdated = guest.name === updatedGuest.name;
          if (isUpdated) return { ...guest, confirmed: status };
          return guest;
        });
      });
    },
    []
  );

  const clearGuestStatus = useCallback((clearedGuest: Guest) => {
    setGuestList((prevList) => {
      return prevList.map((guest) => {
        const isUpdated = guest.name === clearedGuest.name;
        if (isUpdated) return { ...guest, confirmed: undefined };
        return guest;
      });
    });
  }, []);

  return {
    searchInput,
    clearInput,
    handleInputChange,
    filteredList,
    selectedGuest,
    selectedBundle,
    handleSelectGuest,
    handleCloseModal,
    updateGuestStatus,
    clearGuestStatus,
  };
};

export default useRSVP;
