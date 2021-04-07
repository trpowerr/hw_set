import Team, { Bowman, Magician, Swordman } from '../js/app';

test('check ADD', () => {
  const newTeam = new Team();
  newTeam.add(Bowman);
  const received = newTeam.toArray()[0] instanceof Bowman;
  const expected = true;
  expect(received).toBe(expected);
});

test('check ADD-ALL', () => {
  let received = null;
  const newTeam = new Team();
  newTeam.addAll(Bowman, Magician, Swordman);
  for (let value of newTeam.toArray()) {
    if (value instanceof Bowman && Magician && Swordman) {
      received = true;
    }
  }
  const expected = true;
  expect(received).toBe(expected);
});
