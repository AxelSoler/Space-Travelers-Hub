import React from 'react';
import { useSelector } from 'react-redux';
import './myProfile.css';

const MyProfile = () => {
  const listOfMissions = useSelector((state) => state.listOfMissions);
  const listRockets = useSelector((state) => state.rockets);
  const allMissions = listOfMissions.filter((mission) => mission.join === true);
  const listActiveRockets = listRockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="container">
      <div className="joined">
        <h3>Rockets Joined</h3>
        <div className="active">
          <ul>
            {listActiveRockets.length === 0 && (
              <h4 className="notJoin">YOU HAVE NOT JOIN ANY MISSION</h4>
            )}
            {listActiveRockets.length > 0 && (
              listActiveRockets.map((rocket) => (
                <li className="listJoin" key={rocket.id}><h4>{rocket.name}</h4></li>))
            )}
          </ul>
        </div>
      </div>
      <div className="joined">
        <h3>Missions Joined</h3>
        <div className="active">
          <ul>
            {allMissions.length === 0 && (
              <h4 className="notJoin">YOU HAVE NOT JOIN ANY MISSION</h4>
            )}
            {allMissions.length > 0 && (
              allMissions.map((miss) => (
                <li className="listJoin" key={miss.id}><h4>{miss.mission}</h4></li>))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
