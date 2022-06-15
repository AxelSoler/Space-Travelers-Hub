const GETROCKETS = 'space-travelers/rockets/CHECKROCKETS';
const BOOKROCKET = 'space-travelers/rockets/BOOKROCKET';
const CANCELROCKET = 'space-travelers/rockets/CANCELROCKET';
const url = 'https://api.spacexdata.com/v3/rockets';

export function rocketReducer(state = [], action) {
  switch (action.type) {
    case GETROCKETS:
      return [...action.rockets];
    case BOOKROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.rocketToBook) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
    case CANCELROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.rocketToCancel) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
}

export const getRockets = (rockets) => ({
  type: GETROCKETS,
  rockets,
});

export const bookRocket = (id) => ({
  type: BOOKROCKET,
  rocketToBook: id,
});

export const cancelRocket = (id) => ({
  type: CANCELROCKET,
  rocketToCancel: id,
});

export const fetchRockets = () => (dispatch) => {
  const rocketsList = [];
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },

  })
    .then((response) => response.json())
    .then((result) => {
      result.forEach((element) => {
        rocketsList.push({
          id: element.id,
          name: element.rocket_name,
          description: element.description,
          type: element.engines.type,
          img: element.flickr_images[0],
        });
      });
      dispatch(getRockets(rocketsList));
    });
};
