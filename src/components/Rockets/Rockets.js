import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import './Rockets.css';
import { bookRocket, cancelRocket } from '../../redux/rockets/rockets';

const Rockets = (props) => {
  const {
    name, img, description, id, reserved,
  } = props;

  /* const [isActive, setIsActive] = useState(false); */

  const dispatch = useDispatch();

  const bookRocketHandler = () => {
    dispatch(bookRocket(id));
  };

  const cancelRocketHandler = () => {
    dispatch(cancelRocket(id));
  };

  /*  const displayHandler = () => {
    setIsActive((current) => !current);
  }; */

  return (
    <div className="rocket-holder">
      <div className="img-holder">
        <img src={img} alt="rocket" />
      </div>
      <div className="data-rocket">
        <div className="name-holder">{name}</div>
        <div className="description-holder">
          {reserved && (
            <div>
              <p>
                <span className="reserved">Reserved </span>
                {description}
              </p>
            </div>
          )}
          {!reserved && (
            <div>
              <p>{description}</p>
            </div>
          )}
        </div>
        { !reserved && (
        <button
          type="button"
          onClick={() => {
            bookRocketHandler();
            // displayHandler();
          }}
        >
          Reserve Rocket
        </button>
        ) }
        {reserved && (
        <button
          type="button"
          onClick={() => {
            cancelRocketHandler();
            // displayHandler();
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
  reserved: PropTypes.bool,
};

Rockets.defaultProps = { reserved: false };

export default Rockets;
