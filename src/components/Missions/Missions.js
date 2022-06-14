import React from 'react';
import Mission from './Mission';
import './Missions.css';

const Missions = () => {
  const missionHistory = [
    {
      id: 1,
      mission: 'mission',
      desciption: 'Description',
      status: 'Status',
      empty: 'Empty',
    },
    {
      id: 2,
      mission: 'mission',
      desciption: 'Description',
      status: 'Status',
      empty: 'Empty',
    },
    {
      id: 3,
      mission: 'mission',
      desciption: 'Description',
      status: 'Status',
      empty: 'Empty',
    },
    {
      id: 4,
      mission: 'mission',
      desciption: 'Description',
      status: 'Status',
      empty: 'Empty',
    },
  ];

  return (
    <div className="table">
      <ul className="tableUl">
        <li className="tableLi">
          <h3 className="gridItem">Mission</h3>
          <h3 className="gridItem">Description</h3>
          <h3 className="gridItem">Status</h3>
          <h3 className="gridItem">Empty</h3>
        </li>
        {missionHistory.map((miss) => (
          <Mission
            key={miss.id}
            mission={miss.mission}
            desciption={miss.desciption}
            status={miss.status}
            empty={miss.empty}
          />
        ))}
      </ul>
    </div>
  );
};

export default Missions;
