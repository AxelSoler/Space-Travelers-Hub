const GET_MISSION = 'space-travelers-hub/missions/GET_MISSION';
const JOIN_MISSION = 'space-travelers-hub/missions/JOIN_MISSION';

const listOfMissions = [];
const urlMissions = 'https://api.spacexdata.com/v3/missions';

const missionssReducer = (state = listOfMissions, action) => {
  switch (action.type) {
    case GET_MISSION:
      return [...state, ...action.payload];
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, join: true };
      });
      return newState;
    }
    default:
      return state;
  }
};

export const getMission = (mission) => ({
  type: GET_MISSION,
  payload: mission,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const getListOfMissions = () => async (dispatch) => {
  const listOfMissions = [];
  const response = await fetch(urlMissions);
  const res = await response.json();
  const values = Object.values(res);
  values.forEach((element) => {
    listOfMissions.push(
      {
        id: element.mission_id,
        mission: element.mission_name,
        description: element.description,
      },
    );
  });
  dispatch(getMission(listOfMissions));
};

export default missionssReducer;
