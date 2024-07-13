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
      <GuestModal
        guest={selectedGuest}
        bundle={selectedBundle}
        handleClose={handleCloseModal}
        updateGuestStatus={updateGuestStatus}
        clearGuestStatus={clearGuestStatus}
      />
      <div className="text-center p-6 bg-secondary-100 flex flex-col">
        <GuestInput
          searchInput={searchInput}
          handleInputChange={handleInputChange}
        />
        <ScrollableInteractiveList
          filteredList={filteredList}
          handleSelect={handleSelectGuest}
        />
      </div>
    </>
  );
};

export default RSVP;
