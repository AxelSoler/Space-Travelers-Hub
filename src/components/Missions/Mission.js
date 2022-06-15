import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const Mission = (props) => {
  const {
    mission, description, id,
  } = props;
  const dispatch = useDispatch();
  const [isActive, setActive] = useState('false');

  const join = (e) => {
    const missionid = e.target.parentElement.id;
    dispatch(joinMission(missionid));
    setActive(!isActive);
  };

  const leave = (e) => {
    const missionid = e.target.parentElement.id;
    dispatch(leaveMission(missionid));
    setActive(!isActive);
  };

  return (
    <li id={id} className="tableLi">
      <h3 className="gridItem">{mission}</h3>
      <p className="gridItem descriptionP">{description}</p>
      <h4 className="gridItem">NOT A MEMBER</h4>
      <button className={isActive ? 'gridItem' : 'inactive'} type="button" onClick={join}>Join Mission</button>
      <button className={isActive ? 'inactive' : 'gridItem'} type="button" onClick={leave}>Leave Mission</button>
    </li>
  );
};

export default Mission;

Mission.propTypes = {
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
