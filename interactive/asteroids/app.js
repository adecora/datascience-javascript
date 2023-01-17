import React, {useState} from 'react';
import * as ReactDOM from 'react-dom/client';

import AsteriodList from './AsteroidList';
import DateSubmit from './DateSubmit';

import { transform } from './util';

const App = () => {
  const [asteroids, setAsteroids] = useState([
        {name: 'a30x1000', date: '2017-03-03',
         diameter: 30, distance: 1000},
        {name: 'a5x500', date: '2017-05-05',
         diameter: 5, distance: 500},
        {name: 'a2000x200', date: '2017-02-02',
         diameter: 2000, distance: 200}
      ]);
    const [date, setDate] = useState('');

    const onEditNewDate = (text) => {
      setDate(text);
    }

    const onSubmitNewDate = async(text) => {
      console.log(`new date ${text}`);

      const url = 'https://api.nasa.gov/neo/rest/v1/feed' +
                  `?api_key=DEMO_KEY&start_date=${text}`;
      try {
        const response = await fetch(url);
        const raw = await response.json();
        const newAsteroids = transform(raw);

        setAsteroids(newAsteroids);
        setDate('');
      } catch(err) {
        console.error(err.message);
      }
    }

  return (
    <div>
      <h1>Asteriods</h1>
      <DateSubmit
        label='Date'
        value={date}
        onChange={onEditNewDate}
        onCommit={onSubmitNewDate} />
      <AsteriodList asteroids={asteroids} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);