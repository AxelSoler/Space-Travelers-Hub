const GETROCKETS = 'space-travelers/rockets/CHECKROCKETS';
const url = 'https://api.spacexdata.com/v3/rockets';

export function rocketReducer(state = [], action) {
  switch (action.type) {
    case GETROCKETS:
      return [...action.rockets];
    default:
      return state;
  }
}

export const getRockets = (rockets) => ({
  type: GETROCKETS,
  rockets,
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
