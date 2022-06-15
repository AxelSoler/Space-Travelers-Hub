import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../../redux/missions/missions';

const Mission = (props) => {
  const {
    mission, description, id,
  } = props;
  const dispatch = useDispatch();
  const join = (e) => {
    const missionid = e.target.parentElement.id;
    dispatch(joinMission(missionid));
  };

  return (
    <li id={id} className="tableLi">
      <h3 className="gridItem">{mission}</h3>
      <p className="gridItem">{description}</p>
      <h4 className="gridItem">status</h4>
      <button className="gridItem" type="button" onClick={join}>Join Mission</button>
    </li>
  );
};

export default Mission;

Mission.propTypes = {
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
