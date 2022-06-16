import { getRockets, GETROCKETS, bookRocket, BOOKROCKET, cancelRocket, CANCELROCKET, rocketReducer } from '../redux/rockets/rockets'

// ACTION CREATORS TEST

it('should create an action with GETROCKETS type', () => {
  const rockets = [{
    id: 1,
    name: 'falcon',
    description: 'description',
    type: 'type',
    img: 'img',
  }];
  const expectation = {
      type: GETROCKETS,
      rockets,
  };

  expect(getRockets(rockets)).toEqual(expectation);
});

it('should create an action with BOOKROCKET type', () => {
  const expectation = {
      type: BOOKROCKET,
      rocketToBook: 1,
  };

  expect(bookRocket(1)).toEqual(expectation);
});

it('should create an action with CANCELROCKET type', () => {
  const expectation = {
      type: CANCELROCKET,
      rocketToCancel: 1,
  };

  expect(cancelRocket(1)).toEqual(expectation);
});

// REDUCER TEST

describe('test reducer rockets', () => {
  it('should return the initial state []', () => {
    expect(rocketReducer(undefined, {})).toEqual([]);
  });

  it('should return the payload of the action', () => {
    const rockets = [{
      id: 1,
      name: 'falcon',
      description: 'description',
      type: 'type',
      img: 'img',
    }];
    expect(rocketReducer([], getRockets(rockets))).toEqual(rockets);
  });

  it('should return the rocket with reserved true', () => {
    const rockets = [{
      id: 1,
      name: 'falcon',
      description: 'description',
      type: 'type',
      img: 'img',
      reserved: false,
    }];

    const TrueRockets = [{
      id: 1,
      name: 'falcon',
      description: 'description',
      type: 'type',
      img: 'img',
      reserved: true,
    }];
    expect(rocketReducer(rockets, bookRocket(1))).toEqual(TrueRockets);
  })

  it('should return the rocket with reserved false', () => {
    const rockets = [{
      id: 1,
      name: 'falcon',
      description: 'description',
      type: 'type',
      img: 'img',
      reserved: true,
    }];

    const falseRockets = [{
      id: 1,
      name: 'falcon',
      description: 'description',
      type: 'type',
      img: 'img',
      reserved: false,
    }];
    expect(rocketReducer(rockets, cancelRocket(1))).toEqual(falseRockets);
  })
})