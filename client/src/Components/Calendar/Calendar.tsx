import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactCalendar from 'react-calendar';
import { add, format } from 'date-fns';
import { INTERVAL, STORE_CLOSING_TIME, STORE_OPENING_TIME } from '../../Constants/Config';
import { type DateTime } from '../../utils/types.d';

import '../../Styles/Calendar.css';

interface DateType {
  justDate: Date | null;
  dateTime: Date | null;
}

const Calendar: React.FC = () => {
  const [date, setDate] = useState<DateTime>({
    justDate: null,
    dateTime: null,
  });

  const location = useLocation();
  const navigate = useNavigate();
  const { basket, totalItems, totalDuration } = location.state;

  const getTimes = () => {
    if (!date.justDate) return;
    const { justDate } = date;

    const beginning = add(justDate, { hours: STORE_OPENING_TIME });
    const end = add(justDate, { hours: STORE_CLOSING_TIME });
    const interval = INTERVAL;

    const times = [];
    for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }
    return times;
  };

  const times = getTimes();

  const handleTimeSelect = (selectedTime: Date) => {
    setDate((prev) => ({ ...prev, dateTime: selectedTime }));
    navigate('/appointmentDetails', { state: { basket, totalItems, totalDuration, date: selectedTime } });
  };

  return (
    <main className='main'>
      <section className='calendar-section'>
        <div className="h-screen flex flex-col justify-center items-center">
          {date.justDate ? (
            <div className='flex gap-4'>
              {times?.map((time, i) => (
                <div key={`time-${i}`} className='rounded-sm bg-gray-100 p-2'>
                  <button type='button' onClick={() => handleTimeSelect(time)}>
                    {format(time, 'kk:mm')}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <ReactCalendar
              minDate={new Date()}
              className='REACT-CALENDAR p-2'
              view="month"
              onClickDay={(selectedDate) => setDate((prev) => ({ ...prev, justDate: selectedDate }))}
            />
          )}
        </div>
      </section>
    </main>
  );
}

export default Calendar;
