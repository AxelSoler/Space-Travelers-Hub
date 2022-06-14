const CHECKROCKETS = 'space-travelers/rockets/CHECKROCKETS';
const initialState = [
  {
    id: 1,
    name: 'Falcon 1',
    description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    img: 'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
  },
  {
    id: 2,
    name: 'Falcon 1',
    description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    img: 'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
  },
  {
    id: 3,
    name: 'Falcon 1',
    description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    img: 'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
  },
];

export function rocketReducer(state = initialState, action) {
  switch (action.type) {
    case CHECKROCKETS:
      return 'Rockets';
    default:
      return state;
  }
}

export const checkRock = () => ({
  type: CHECKROCKETS,
});
