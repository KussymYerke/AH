import React from 'react';

type CountdownProps = {
  targetDate: Date;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
      } else {
        setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  const date_numbers = [
    {
      number: hours,
      label: 'h',
    },
    {
      number: minutes,
      label: 'm',
    },
    {
      number: seconds,
      label: 's',
    }
  ];

  const START_DELAY = 5;

  return (
    <p>
      {seconds > 0 ? date_numbers.map((num, i) => (
        <span key={i} style={{ ["--delay" as any]: `${START_DELAY}.${i}s` }}>
          {String(num.number).padStart(2, "0")}{num.label}{' '}
        </span>
      )) : <span>Бастауымызға аз қалды...</span>}
    </p>
  )
};
