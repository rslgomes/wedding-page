import { useCallback, useEffect, useMemo, useState } from 'react';
import { Guest } from '../../helpers/types';
import { fetchGuests, updateBundle } from '../../api/requests';
const useRSVP = () => {
  const [guestList, setGuestList] = useState<Guest[]>();
  const [searchInput, setSearchInput] = useState('');
  const [filteredList, setFilteredList] = useState<Guest[]>([]);
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchGuestList = async () => {
      setIsLoading(true);
      try {
        const response = await fetchGuests();
        setGuestList(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGuestList();
  }, []);

  const filterGuestList = useCallback(
    (input: string) => {
      const withoutPlusOnes =
        guestList?.filter((guest) => {
          const isAcompanhante =
            guest.name.toLowerCase().trim() === 'acompanhante';
          return !isAcompanhante;
        }) ?? [];
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
    return (
      guestList?.filter((guest) => guest.bundle === selectedGuest.bundle) ?? []
    );
  }, [selectedGuest, guestList]);

  const handleBundleSubmit = useCallback(
    async (selectedBundle: Guest[]) => {
      setIsLoading(true);
      try {
        await updateBundle(selectedBundle);
        handleCloseModal();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
    [handleCloseModal]
  );

  const updateGuestStatus = useCallback(
    (updatedGuest: Guest, status: boolean) => {
      setGuestList((prevList) => {
        return (
          prevList?.map((guest) => {
            const isUpdated = guest._id === updatedGuest._id;
            if (isUpdated) return { ...guest, confirmed: status };
            return guest;
          }) ?? []
        );
      });
    },
    []
  );

  const clearGuestStatus = useCallback((clearedGuest: Guest) => {
    setGuestList((prevList) => {
      return (
        prevList?.map((guest) => {
          const isUpdated = guest._id === clearedGuest._id;
          if (isUpdated) return { ...guest, confirmed: undefined };
          return guest;
        }) ?? []
      );
    });
  }, []);

  return {
    searchInput,
    clearInput,
    handleInputChange,
    filteredList,
    selectedGuest,
    selectedBundle,
    isLoading,
    handleSelectGuest,
    handleCloseModal,
    updateGuestStatus,
    clearGuestStatus,
    handleBundleSubmit,
  };
};

export default useRSVP;
