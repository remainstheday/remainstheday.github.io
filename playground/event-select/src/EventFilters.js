import React from 'react';
import Select from 'react-select';

const EventFilters = (props) => {
  console.log(props);
  return (
    <Select
      className="filter-dropdown"
      options={props.options}
    />
  );
};

export default EventFilters;

// {
//     "name": "Memphis Marathon",
//     "event_types": ["marathon", "half-marathon", "tenk-run", "fivek-run"],
//     "city": "memphis",
//     "state": "tn",
//     "years": [2018, 2017, 2016, 2015, 2014, 2013, 2012],
//     "url": ""
//   }
