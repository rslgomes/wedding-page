import { TIME_OF_THE_EVENT } from '../../../helpers/constants';
import Countdown from './Countdown';
import { LocationIframe } from './LocationIframe';

const TimeAndPlace: React.FC = () => {
  const now = new Date().getTime();
  const completed = now >= TIME_OF_THE_EVENT.getTime();

  return completed ? (
    <h2 className="text-2xl font-primary text-primary-700">Começou!!!</h2>
  ) : (
    <div className="text-center flex flex-col items-center mt-16">
      <h2 className="text-2xl font-primary text-primary-700 ">
        Contagem regressiva para o grande dia
      </h2>
      <div className="h-full flex flex-col justify-center items-center space-y-8 py-4">
        <h2 className="text-md font-primary text-primary-700">
          25 de Outubro às 16 horas
        </h2>
        <Countdown targetDate={TIME_OF_THE_EVENT} />
      </div>
      <h2 className="text-2xl font-primary text-primary-700 mt-20">Local</h2>
      <div className="flex items-center justify-center mt-8">
        <LocationIframe />
      </div>
    </div>
  );
};

export default TimeAndPlace;

/* 
      {completed ? (
        <h2 className="text-xl font-primary font-bold text-primary-700 lg:row-start-2 lg:col-start-1 lg:space-y-0">
          O Casamento começou!
        </h2>
      ) : (
        
      )}

      <h2 className="text-6xl font-secondary text-primary-700 lg:row-start-1 lg:col-start-2 lg:space-y-0">
        Local
      </h2>
       */
