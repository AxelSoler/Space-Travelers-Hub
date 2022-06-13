import React from 'react';
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
          <li key={miss.id} className="tableLi">
            <h3 className="gridItem">{miss.mission}</h3>
            <p className="gridItem">{miss.desciption}</p>
            <h4 className="gridItem">{miss.status}</h4>
            <button className="gridItem" type="button">{miss.empty}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Missions;
