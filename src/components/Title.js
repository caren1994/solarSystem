import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{ headline }</h2>
    );
  }
}
Title.propTypes = {
  headline: PropTypes.string.isRequired,

};
export default Title;

// Pokedex.propTypes = {
//     pokemonList: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number,
//         name: PropTypes.string,
//         type: PropTypes.string,
//         averageWeight: PropTypes.shape({
//           value: PropTypes.number,
//           measurementUnit: PropTypes.string,
//         }),
//         image: PropTypes.string,
//         moreInfo: PropTypes.string,
//       }),
//     ),
//   };
