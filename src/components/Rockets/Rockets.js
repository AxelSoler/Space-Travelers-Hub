import React from 'react';
import PropTypes from 'prop-types';
import './Rockets.css';

const Rockets = (props) => {
  const { name, img, description } = props;

  return (
    <div className="rocket-holder">
      <div className="img-holder">
        <img src={img} alt="rocket" />
      </div>
      <div className="data-rocket">
        <div className="name-holder">{name}</div>
        <div className="description-holder">{description}</div>
        <button type="button">Boton</button>
      </div>
    </div>
  );
};

Rockets.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rockets;
