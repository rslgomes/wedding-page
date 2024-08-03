import GuestInput from './GuestInput';
import GuestModal from './GuestModal';
import ScrollableInteractiveList from './ScrollableFilteredList';
import useRSVP from './useRSVP';

const RSVP: React.FC = () => {
  const {
    searchInput,
    handleInputChange,
    filteredList,
    selectedGuest,
    selectedBundle,
    handleSelectGuest,
    handleCloseModal,
    updateGuestStatus,
    clearGuestStatus,
  } = useRSVP();
  return (
    <>
      <div className="text-start p-6 bg-primary-100 flex flex-col">
        <h1 className="text-2xl font-primary text-primary-700 mb-5">
          Confirmar presença
        </h1>
        <GuestInput
          searchInput={searchInput}
          handleInputChange={handleInputChange}
        />
        <ScrollableInteractiveList
          filteredList={filteredList}
          handleSelect={handleSelectGuest}
        />
      </div>
      <GuestModal
        guest={selectedGuest}
        bundle={selectedBundle}
        handleClose={handleCloseModal}
        updateGuestStatus={updateGuestStatus}
        clearGuestStatus={clearGuestStatus}
      />
    </>
  );
};

export default RSVP;
