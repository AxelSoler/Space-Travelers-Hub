import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rockets';
import Rockets from '../Rockets/Rockets';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

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
