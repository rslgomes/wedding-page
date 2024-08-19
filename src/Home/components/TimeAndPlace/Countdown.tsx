import React, { useEffect, useState } from 'react';
import { TimeLeft } from '../../../helpers/types';
import { calculateTimeLeft } from '../../../helpers/functions';
import { ONE_SECOND } from '../../../helpers/constants';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, ONE_SECOND);

    return () => clearInterval(intervalId);
  }, [targetDate]);
  const { months, days, hours, minutes, seconds } = timeLeft;
  const showMonths = months > 0;
  const showDays = days > 0;
  const showHours = showMonths || showDays || hours > 0;
  const showMinutes = showHours || minutes > 0;
  const showSeconds = showMinutes || seconds > 0;

  return (
    <div className="flex justify-center font-primary text-secondary-500 space-x-4 text-xl">
      {showMonths && (
        <div>
          {months} {months >= 2 ? 'meses' : 'mês'}
        </div>
      )}
      {showDays && (
        <div>
          {days} {days >= 2 ? 'dias' : 'dia'}
        </div>
      )}
      {showHours && <div>{hours}h</div>}
      {showMinutes && <div>{minutes}m</div>}
      {showSeconds && <div>{seconds}s</div>}
    </div>
  );
};
export default Countdown;
