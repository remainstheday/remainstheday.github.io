import React from 'react';
import Card from 'react-bootstrap/Card';

const EventResults = (props) => {

  const renderEventTypes = (types) => {
    return types.map((type) => {
      return (
      <i className="event-type">{type}</i>
      )
    })
  }

  const renderEvents = () => {
    return props.events.map((event, index) => {
      return (
        <Card style={{ width: '18rem' }} key={index}>
          <Card.Body>
            <Card.Title>{event.name}</Card.Title>
            <Card.Text>
              {event.city}, {event.state}
              <br/>
              {renderEventTypes(event.event_types)}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    });
  };

  return <div className="events-grid">{renderEvents()}</div>;
};

export default EventResults;
