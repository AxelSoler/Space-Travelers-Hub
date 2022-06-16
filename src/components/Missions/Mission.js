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
      <div className="gridItem">
        {join && (
          <h4>ACTIVE MEMBER</h4>
        )}
        {!join && (
          <h4>NOT A MEMBER</h4>
        )}
      </div>
      <div className="gridItem">
        {!join && (
          <button type="button" onClick={joinM}>Join Mission</button>
        )}
        {join && (
          <button type="button" onClick={leaveM}>Leave Mission</button>
        )}
      </div>
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
