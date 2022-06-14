import React from 'react';
import { useSelector } from 'react-redux';
import { getListOfMissions } from '../../redux/missions/missions';
import store from '../../redux/configureStore';
import Mission from './Mission';
import './Missions.css';

const Missions = () => {
  const listOfMissions = useSelector((state) => state.listOfMissions);
  if (listOfMissions.length === 0) {
    store.dispatch(getListOfMissions());
  }

  return (
    <div className="table">
      <ul className="tableUl">
        <li className="tableLi">
          <h3 className="gridItem">Mission</h3>
          <h3 className="gridItem">Description</h3>
          <h3 className="gridItem">Status</h3>
          <h3 className="gridItem">Empty</h3>
        </li>
        {listOfMissions.map((miss) => (
          <Mission
            key={miss.id}
            mission={miss.mission}
            description={miss.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default Missions;
