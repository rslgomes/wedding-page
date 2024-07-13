import { TIME_OF_THE_EVENT } from '../../helpers/constants';
import Countdown from './Countdown';
import { LocationIframe } from './LocationIframe';

const TimeAndPlace: React.FC = () => {
  const now = new Date().getTime();
  const completed = now >= TIME_OF_THE_EVENT.getTime();

  return (
    <div className="text-center p-6 bg-secondary-100 flex flex-col lg:flex-row items-center lg:justify-around">
      <div className="w-full lg:w-max flex-col mb-8 lg:mb-0">
        <h2 className="text-6xl font-secondary text-primary-700 mb-4">Data</h2>
        {completed ? (
          <h2 className="text-xl font-primary font-bold text-primary-700 mb-4">
            O Casamento começou!
          </h2>
        ) : (
          <>
            <div className="bg-primary-700 bg-opacity-10 shadow-primary-700 shadow-sm p-4">
              <h2 className="text-md font-primary text-primary-700 mb-4">
                25 de Outubro às 16 horas
              </h2>
              <Countdown targetDate={TIME_OF_THE_EVENT} />
            </div>
          </>
        )}
      </div>
      <div className="w-full lg:w-max flex-col">
        <h2 className="text-6xl font-secondary text-primary-700 mb-4">Local</h2>
        <div className="bg-primary-700 bg-opacity-10 p-4 w-full lg:w-max flex justify-center shadow-primary-700 shadow-sm">
          <LocationIframe />
        </div>
      </div>
    </div>
  );
};

export default TimeAndPlace;
