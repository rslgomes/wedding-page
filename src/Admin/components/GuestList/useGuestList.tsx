import { addBundle, fetchGuests, updateGuest } from 'api/requests';
import { cleanName } from 'helpers/functions';
import { Guest } from 'helpers/types';
import { useCallback, useEffect, useMemo, useState } from 'react';

export interface GuestListFilter {
  name?: string;
  confirmed?: (boolean | undefined)[];
  bundle?: string[];
}

export interface GuestListSort {
  key?: keyof Guest;
  type?: 'ascending' | 'descending';
}

export type FilterDialogState = keyof GuestListFilter | '';

const useGuestList = () => {
  const [guestList, setGuestList] = useState<Guest[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [filter, setFilter] = useState<GuestListFilter>({});
  const [filterDialog, setFilterDialog] = useState<FilterDialogState>('');
  const [sorting, setSorting] = useState<GuestListSort>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [editingGuest, setEditingGuest] = useState<Guest | null>(null);
  const [isAddBundleModalOpen, setIsAddBundleModalOpen] = useState(false);

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

  useEffect(() => {
    fetchGuestList();
  }, []);

  const handleEditClick = useCallback((guest: Guest) => {
    setEditingGuest(guest);
  }, []);

  const handleEditGuestSave = async (updatedGuest: Guest) => {
    setRefreshing(true);
    try {
      const { _id, ...remainderData } = updatedGuest;
      await updateGuest(_id, remainderData);
      await fetchGuestList();
    } catch (error) {
      console.error('Failed to save guest:', updatedGuest);
    } finally {
      setRefreshing(false);
    }
  };

  const pageSliceFinish = useMemo(
    () => currentPage * itemsPerPage,
    [currentPage, itemsPerPage]
  );
  const pageSliceStart = useMemo(
    () => pageSliceFinish - itemsPerPage,
    [pageSliceFinish, itemsPerPage]
  );

  const handleSortClick = useCallback(
    (nextSorting: keyof Guest) => {
      const { key: currentSorting, type: currentSortingType } = sorting;
      if (currentSorting === nextSorting) {
        setSorting({
          key: currentSorting,
          type: currentSortingType === 'ascending' ? 'descending' : 'ascending',
        });
      } else setSorting({ key: nextSorting, type: 'ascending' });
    },
    [sorting]
  );

  const filteredList = useMemo(() => {
    const filteredName = filter.name ?? '';
    const filteredBundles = filter.bundle ?? [];
    const filteredConfirmationStates = filter.confirmed ?? [];

    return guestList.filter((guest: Guest) => {
      const nameCheck = cleanName(guest.name).includes(cleanName(filteredName));
      const bundleCheck =
        filteredBundles.some((bundle) => bundle === guest.bundle) ||
        filteredBundles.length === 0;
      const confirmationCheck =
        filteredConfirmationStates.some((state) => state === guest.confirmed) ||
        filteredConfirmationStates.length === 0;

      return nameCheck && bundleCheck && confirmationCheck;
    });
  }, [guestList, filter.bundle, filter.confirmed, filter.name]);

  const sortedList = useMemo(() => {
    return filteredList.slice().sort((a: Guest, b: Guest) => {
      const A_IS_LAST = 1;
      const B_IS_LAST = -1;

      const sortedKey = sorting.key ?? '_id';
      const sortingType = sorting.type ?? 'ascending';

      if (sortedKey === 'confirmed' || sortedKey === 'keywords')
        return B_IS_LAST;

      const aValue = cleanName(a[sortedKey] ?? '');
      const bValue = cleanName(b[sortedKey] ?? '');

      if (sortingType === 'ascending')
        return aValue > bValue ? A_IS_LAST : B_IS_LAST;
      return aValue > bValue ? B_IS_LAST : A_IS_LAST;
    });
  }, [filteredList, sorting]);

  const currentGuests = useMemo(
    () => sortedList.slice(pageSliceStart, pageSliceFinish),
    [sortedList, pageSliceStart, pageSliceFinish]
  );

  const currentBundles = useMemo(() => {
    const bundles: string[] = [];
    guestList.forEach(({ bundle: currentBundle }) => {
      const isNew = !bundles.some((bundle) => bundle === currentBundle);
      if (isNew) bundles.push(currentBundle);
    });
    return bundles;
  }, [guestList]);

  const isPlusOne = (guest: Guest): boolean =>
    guest.name.toLowerCase().includes('acompanhante');

  const getPlusOneSource = useCallback(
    (plusOne: Guest) => {
      if (!isPlusOne(plusOne)) return undefined;
      const matchBundle = plusOne.bundle;
      return guestList.find(
        (source) => source.bundle === matchBundle && !isPlusOne(source)
      );
    },
    [guestList]
  );

  const handleFilterChange = useCallback(
    (type: keyof GuestListFilter, selectedFilters: any[]) => {
      setFilter((prev) => ({
        ...prev,
        [type]: selectedFilters,
      }));
    },
    []
  );

  const numberOfGuests = useMemo(() => sortedList.length, [sortedList]);

  const handleAddBundleClick = () => {
    setIsAddBundleModalOpen(true);
  };

  const handleSaveBundle = useCallback(
    async (bundleName: string, guests: Omit<Guest, '_id' | 'bundle'>[]) => {
      setRefreshing(true);
      try {
        await addBundle(bundleName, guests);
        await fetchGuestList();
        setIsAddBundleModalOpen(false);
      } catch (error) {
        console.error('Failed to add bundle:', error);
      } finally {
        setRefreshing(false);
      }
    },
    []
  );
  return {
    isLoading,
    refreshing,
    currentGuests,
    currentBundles,
    numberOfGuests,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    handleSortClick,
    getPlusOneSource,
    isPlusOne,
    sorting,
    filter,
    handleFilterChange,
    filterDialog,
    setFilterDialog,
    editingGuest,
    setEditingGuest,
    handleEditClick,
    handleEditGuestSave,
    isAddBundleModalOpen,
    setIsAddBundleModalOpen,
    handleAddBundleClick,
    handleSaveBundle,
  };
};

export default useGuestList;
