import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import './Rockets.css';
import { bookRocket, cancelRocket } from '../../redux/rockets/rockets';

const Rockets = (props) => {
  const {
    name, img, description, id,
  } = props;

  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  const bookRocketHandler = () => {
    dispatch(bookRocket(id));
  };

  const cancelRocketHandler = () => {
    dispatch(cancelRocket(id));
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
        <div className="description-holder">
          {isActive && (
            <div>
              <p>
                <span className="reserved">Reserved </span>
                {description}
              </p>
            </div>
          )}
          {!isActive && (
            <div>
              <p>{description}</p>
            </div>
          )}
        </div>
        { !isActive && (
        <button
          type="button"
          onClick={() => {
            bookRocketHandler();
            displayHandler();
          }}
        >
          Reserve Rocket
        </button>
        ) }
        {isActive && (
        <button
          type="button"
          onClick={() => {
            cancelRocketHandler();
            displayHandler();
          }}
        >
          Cancel Reservation
        </button>
        )}
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
