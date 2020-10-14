import React, { useEffect, useState } from 'react';
import EventResults from './EventResults';
import EventFilters from './EventFilters';
import abbrState from './utils/statesAbbr';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      'https://cdn.jsdelivr.net/gh/remainstheday/results-data/src/events.json'
    )
      .then((response) => response.json())
      .then(setEvents);
  }, []);

  // return an array of unique event type objects
  const createTypeFilterOptions = () => {
    const options = new Set();
    events.map((event) => {
      return event.event_types.map((type) => options.add(type));
    });

    return [...options].map((value) => {
      return {
        value: value,
        label: value,
      };
    });
  };

  const createCityFilterOptions = () => {
    return events.map((event) => {
      return {
        value: event.city,
        label: event.city.toUpperCase(),
      };
    });
  };

  const createStateFilterOptions = () => {
    return events.map((event) => {
      return {
        value: event.state,
        label: abbrState(event.state, 'name'),
      };
    });
  };

  const createYearFilterOptions = () => {
    const options = new Set();
    events.map((event) => {
      return event.years.map((year) => options.add(year));
    });

    return [...options].map((value) => {
      return {
        value: value,
        label: value,
      };
    });
  };

  return (
    <div className="App">
      <div className="filters-container">
        <EventFilters options={createTypeFilterOptions()} />
        <EventFilters options={createCityFilterOptions()} />
        <EventFilters options={createStateFilterOptions()} />
        <EventFilters options={createYearFilterOptions()} />
      </div>
      <div className="results-container">
        <EventResults events={events} />
      </div>
    </div>
  );
}

export default App;
