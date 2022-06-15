import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import './Rockets.css';
import { bookRocket } from '../../redux/rockets/rockets';

const Rockets = (props) => {
  const {
    name, img, description, id,
  } = props;

  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  const bookRocketHandler = () => {
    dispatch(bookRocket(id));
  };

  const displayHandler = () => {
    setIsActive((current) => !current);
  };

  return (
    <div className="rocket-holder">
      <div className="img-holder">
        <img src={img} alt="rocket" />
      </div>
      <div className="data-rocket">
        <div className="name-holder">{name}</div>
        <div className="description-holder">{description}</div>
        <button
          type="button"
          className={isActive ? 'no-active' : 'active'}
          onClick={() => {
            bookRocketHandler();
            displayHandler();
          }}
        >
          Reserve Rocket
        </button>
        <button
          type="button"
          className={isActive ? 'active' : 'no-active'}
          onClick={displayHandler}
        >
          Cancel Reservation
        </button>
      </div>
    </div>
  );
};

Rockets.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Rockets;
