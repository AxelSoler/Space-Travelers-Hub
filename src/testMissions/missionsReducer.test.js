import missionssReducer from '../redux/missions/missions';

test('Missions reducer gets all the data', () => {
  const GET_MISSION = 'space-travelers-hub/missions/GET_MISSION';
  const listOfMissions = [];
  const reducer = missionssReducer(listOfMissions, {
    type: GET_MISSION,
    payload: [
      {
        id: '1', mission: 'Axel', description: 'first mission', join: false,
      },
      {
        id: '2', mission: 'Rafael', description: 'second mission', join: false,
      },
    ],
  });

  expect(reducer).toStrictEqual([
    {
      id: '1', mission: 'Axel', description: 'first mission', join: false,
    },
    {
      id: '2', mission: 'Rafael', description: 'second mission', join: false,
    },
  ]);
});

test('Missions reducer to join a mission', () => {
  const JOIN_MISSION = 'space-travelers-hub/missions/JOIN_MISSION';
  const listOfMissions = [
    {
      id: '1', mission: 'Axel', description: 'first mission', join: true,
    },
    {
      id: '2', mission: 'Rafael', description: 'second mission', join: false,
    },
  ];

  const reducer = missionssReducer(listOfMissions, {
    type: JOIN_MISSION,
    payload: '0',
  });

  expect(reducer).toStrictEqual([
    {
      id: '1', mission: 'Axel', description: 'first mission', join: true,
    },
    {
      id: '2', mission: 'Rafael', description: 'second mission', join: false,
    },
  ]);
});

test('Action creator for get missions', () => {
  const LEAVE_MISSION = 'space-travelers-hub/missions/LEAVE_MISSION';
  const listOfMissions = [
    {
      id: '1', mission: 'Axel', description: 'first mission', join: true,
    },
    {
      id: '2', mission: 'Rafael', description: 'second mission', join: false,
    },
  ];
  const reducer = missionssReducer(listOfMissions, {
    type: LEAVE_MISSION,
    payload: '1',
  });

  expect(reducer).toStrictEqual([
    {
      id: '1', mission: 'Axel', description: 'first mission', join: false,
    },
    {
      id: '2', mission: 'Rafael', description: 'second mission', join: false,
    },
  ]);
});
