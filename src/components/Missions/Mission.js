import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const Mission = (props) => {
  const {
    mission, description, id, join,
  } = props;
  const dispatch = useDispatch();
  const [isActive, setActive] = useState('false');

  const joinM = (e) => {
    const missionid = e.target.parentElement.id;
    dispatch(joinMission(missionid));
    setActive(!isActive);
  };

  const leaveM = (e) => {
    const missionid = e.target.parentElement.id;
    dispatch(leaveMission(missionid));
    setActive(!isActive);
  };

  return (
    <li id={id} className="tableLi">
      <h3 className="gridItem">{mission}</h3>
      <p className="gridItem descriptionP">{description}</p>
      {join && (
        <h4 className="gridItem">ACTIVE MEMBER</h4>
      )}
      {!join && (
        <h4 className="gridItem">NOT A MEMBER</h4>
      )}
      {!join && (
        <button className="gridItem" type="button" onClick={joinM}>Join Mission</button>
      )}
      {join && (
        <button className="gridItem" type="button" onClick={leaveM}>Leave Mission</button>
      )}
    </li>
  );
};

export default Mission;

Mission.propTypes = {
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  join: PropTypes.bool,
};

Mission.defaultProps = { join: false };
