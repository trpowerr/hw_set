/* eslint-disable no-restricted-syntax */
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
  for (const value of newTeam.toArray()) {
    if (value instanceof Bowman && Magician && Swordman) {
      received = true;
    }
  }
  const expected = true;
  expect(received).toBe(expected);
});

test('duplicate class check', () => {
  expect(() => {
    const newTeam = new Team();
    newTeam.add(Bowman);
    newTeam.add(Bowman);
  }).toThrow('Персонаж уже существует!');
});

test('check duplicate addAll', () => {
  const newTeam = new Team();
  newTeam.add(Bowman);
  const received = newTeam.addAll(Bowman, Magician, Swordman);
  const expected = false;
  expect(received).toBe(expected);
});
