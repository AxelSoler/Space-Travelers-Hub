import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rockets';
import Rockets from '../Rockets/Rockets';
import './RocketList.css';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  if (rockets.length === 0) {
    dispatch(fetchRockets());
  }

  return (
    <ul className="all-rockets">
      {
        rockets.map((rocket) => (
          <Rockets
            key={rocket.id}
            id={rocket.id}
            name={rocket.name}
            img={rocket.img}
            description={rocket.description}
            reserved={rocket.reserved}
          />
        ))
      }
    </ul>
  );
};

export default RocketList;
