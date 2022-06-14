import React from 'react';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const {
    mission, desciption, status, empty,
  } = props;

  return (
    <li className="tableLi">
      <h3 className="gridItem">{mission}</h3>
      <p className="gridItem">{desciption}</p>
      <h4 className="gridItem">{status}</h4>
      <button className="gridItem" type="button">{empty}</button>
    </li>
  );
};

export default Mission;

Mission.propTypes = {
  mission: PropTypes.string.isRequired,
  desciption: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  empty: PropTypes.string.isRequired,
};
