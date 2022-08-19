import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-card" data-testid="mission-card">
        <p className="name" data-testid="mission-name">{name}</p>
        <p className="year" data-testid="mission-year">{year}</p>
        <p className="country" data-testid="mission-country">{country}</p>
        <p className="destination" data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}
MissionCard.defaultProps = {
  name: '',
  year: '',
  country: '',
  destination: '',
};

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};
export default MissionCard;
