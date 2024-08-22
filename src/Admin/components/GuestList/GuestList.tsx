import IconButton from 'Shared/IconButton';
import GuestStatus from './GuestStatus';
import useGuestList from './useGuestList';
import SortButton from './SortButton';
import { Guest } from 'helpers/types';
import { ReactComponent as Filter } from './Icons/Filter.svg';
import { ReactComponent as Pencil } from './Icons/Pencil.svg';
import Pagination from './Pagination';
import FilterDialog from './FilterDialog';
import EditGuestModal from './EditGuestModal';
import AddBundleModal from './AddBundleModal';

const GuestList = () => {
  const {
    currentGuests,
    currentBundles,
    isLoading,
    sorting,
    handleSortClick,
    getPlusOneSource,
    isPlusOne,
    numberOfGuests,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    filter,
    handleFilterChange,
    filterDialog,
    setFilterDialog,
    editingGuest,
    setEditingGuest,
    handleEditGuestSave,
    handleEditClick,
    refreshing,
    isAddBundleModalOpen,
    setIsAddBundleModalOpen,
    handleAddBundleClick,
    handleSaveBundle,
  } = useGuestList();
  if (isLoading) return <>Carregando</>;
  return (
    <>
      <div className="bg-primary-100 p-6 rounded-lg text-primary-950 shadow">
        <div className="flex flex-row items-center content-start space-x-12">
          <button
            className="border-none bg-primary-700 rounded p-2 px-4 text-primary-100 mb-8"
            onClick={handleAddBundleClick}
          >
            Adicionar Convidados
          </button>
          <p>A lista atual tem {numberOfGuests} Convidados</p>
        </div>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-primary-300">
              {/* <th className="w-6 py-2 px-4">
              <input type="checkbox"></input>
            </th> */}
              <th className="text-start pl-4 py-2">
                Nome{' '}
                <SortButton
                  guestKey={'name'}
                  sorting={sorting}
                  onClick={() => handleSortClick('name')}
                  className="text-secondary-100"
                />
              </th>
              <th className="text-start py-2">
                Bundle{' '}
                <IconButton
                  icon={<Filter />}
                  className={`${
                    (filter?.bundle ?? []).length > 0
                      ? 'text-secondary-500'
                      : 'text-white'
                  }`}
                  onClick={() =>
                    setFilterDialog((prev) =>
                      prev === 'bundle' ? '' : 'bundle'
                    )
                  }
                />
                {filterDialog === 'bundle' && (
                  <FilterDialog
                    hasInput={true}
                    filters={currentBundles}
                    selectedFilters={filter?.bundle ?? []}
                    onChange={(selected) =>
                      handleFilterChange('bundle', selected)
                    }
                    onClose={() => setFilterDialog('')}
                  />
                )}
              </th>
              <th className="text-start">
                Confirmado{' '}
                <IconButton
                  icon={
                    <Filter
                      className={`${
                        (filter?.confirmed ?? []).length > 0
                          ? 'text-secondary-500'
                          : 'text-white'
                      }`}
                    />
                  }
                  onClick={() =>
                    setFilterDialog((prev) =>
                      prev === 'confirmed' ? '' : 'confirmed'
                    )
                  }
                />
                {filterDialog === 'confirmed' && (
                  <FilterDialog
                    filters={['confirmado', 'não confirmado', 'pendente']}
                    selectedFilters={(filter?.confirmed ?? []).map(
                      (confirmationState) => {
                        if (confirmationState === true) return 'confirmado';
                        if (confirmationState === false)
                          return 'não confirmado';
                        return 'pendente';
                      }
                    )}
                    onChange={(selected) => {
                      const mappedSelections = selected.map((selection) => {
                        if (selection === 'confirmado') return true;
                        if (selection === 'não confirmado') return false;
                        return undefined;
                      });
                      handleFilterChange('confirmed', mappedSelections);
                    }}
                    onClose={() => setFilterDialog('')}
                  />
                )}
              </th>
              <th className="text-center">Editar</th>
            </tr>
          </thead>
          <tbody>
            {currentGuests.map((guest: Guest, index, arr) => (
              <tr
                key={guest._id}
                className={`${
                  index === arr.length - 1
                    ? ''
                    : 'border-b-primary-950 border-b'
                }`}
              >
                {/* <td className="w-6 py-2 px-4">
                <input type="checkbox"></input>
              </td> */}
                <td className="py-2">{`${guest.name}${
                  isPlusOne(guest)
                    ? ` (${getPlusOneSource(guest)?.name ?? 'não encontrado'})`
                    : ''
                }`}</td>
                <td>{guest.bundle}</td>
                <td className="text-center">
                  <GuestStatus confirmed={guest.confirmed} />
                </td>
                <td className="text-center text-gray-500">
                  <IconButton
                    icon={<Pencil />}
                    onClick={() => handleEditClick(guest)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          totalGuests={numberOfGuests}
          guestsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          onGuestsPerPageChange={(guestsPerPage) =>
            setItemsPerPage(guestsPerPage)
          }
        />
      </div>
      {editingGuest && (
        <EditGuestModal
          guest={editingGuest}
          onClose={() => setEditingGuest(null)}
          onSave={handleEditGuestSave}
          isLoading={refreshing}
        />
      )}
      {isAddBundleModalOpen && (
        <AddBundleModal
          onClose={() => {
            setIsAddBundleModalOpen(false);
          }}
          onSave={handleSaveBundle}
          isLoading={refreshing}
          existingBundles={currentBundles}
        />
      )}
    </>
  );
};

export default GuestList;
