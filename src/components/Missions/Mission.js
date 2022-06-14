import React from 'react';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const {
    mission, description,
  } = props;

  return (
    <li className="tableLi">
      <h3 className="gridItem">{mission}</h3>
      <p className="gridItem">{description}</p>
      <h4 className="gridItem">status</h4>
      <button className="gridItem" type="button">empty</button>
    </li>
  );
};

export default Mission;

Mission.propTypes = {
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
