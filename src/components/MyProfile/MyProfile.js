import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const listOfMissions = useSelector((state) => state.listOfMissions);
  const allMissions = listOfMissions.filter((mission) => mission.join === true);

  return (
    <div className="container">
      <h3>Missions Joinned</h3>
      <div>
        {allMissions.map((miss) => (
          <div key={miss.id}><h4>{miss.mission}</h4></div>))}
      </div>
    </div>
  );
};

export default MyProfile;
