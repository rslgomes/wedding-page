import { useCallback, useEffect, useMemo, useState } from 'react';
import { GUEST_LIST } from '../../helpers/constants';
import { Guest } from '../../helpers/types';
import { treatGuestFromAPI } from '../../helpers/functions';
const useRSVP = () => {
  const [guestList, setGuestList] = useState<Guest[]>(
    GUEST_LIST.map(treatGuestFromAPI)
  );
  const [searchInput, setSearchInput] = useState('');
  const [filteredList, setFilteredList] = useState<Guest[]>([]);
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);

  // useEffect(() => {
  //   const fetchGuestList = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://chuchus-wedding-backend.onrender.com/guests'
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //       // setGuestList(data);
  //     } catch (error) {
  //       console.error('Error fetching guest list: ', error);
  //     }
  //   };

  //   fetchGuestList();
  // }, []);

  const filterGuestList = useCallback(
    (input: string) => {
      const withoutPlusOnes = guestList.filter((guest) => {
        const isAcompanhante =
          guest.name.toLowerCase().trim() === 'acompanhante';
        return !isAcompanhante;
      });
      const withFilter = withoutPlusOnes.filter((guest) => {
        const { name, keywords = [] } = guest;
        const includesInput = (word: string) =>
          word.toLowerCase().includes(input.toLowerCase());

        return includesInput(name) || keywords.some(includesInput);
      });
      setFilteredList(input.trim() === '' ? [] : withFilter);
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
          const isUpdated = guest.ID === updatedGuest.ID;
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
