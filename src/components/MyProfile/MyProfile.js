import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const listOfMissions = useSelector((state) => state.listOfMissions);
  const listRockets = useSelector((state) => state.rockets);
  const allMissions = listOfMissions.filter((mission) => mission.join === true);
  const listActiveRockets = listRockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="container">
      <div className="rockets-joined">
        <h3>Rockets Joined</h3>
        <div className="active-rockets">
          <ul>
            {
              listActiveRockets.map((rocket) => (
                <div key={rocket.id}>{rocket.name}</div>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="missions-joined">
        <h3>Missions Joined</h3>
        <div>
          {allMissions.map((miss) => (
            <div key={miss.id}><h4>{miss.mission}</h4></div>))}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
