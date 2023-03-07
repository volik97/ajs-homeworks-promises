import GameSavingLoader from '../app';

test('test load', (done) => {
  const save = GameSavingLoader.load();
  const resolve = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  save.then((saving) => {
    expect(saving).toEqual(resolve);
    done();
  });
})