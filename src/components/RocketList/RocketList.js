import React from 'react';
import { useSelector } from 'react-redux';
import Rockets from '../Rockets/Rockets';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets);

  return (
    <ul>
      {
        rockets.map((rocket) => (
          <Rockets
            key={rocket.id}
            name={rocket.name}
            img={rocket.img}
            description={rocket.description}
          />
        ))
      }
    </ul>
  );
};

export default RocketList;
