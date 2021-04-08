/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-classes-per-file */
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

export class Bowman extends Character {
  constructor(name) {
    super(name);
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordman extends Character {
  constructor(name) {
    super(name);
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name);
    this.attack = 10;
    this.defence = 40;
  }
}

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(Person) {
    const newPerson = new Person('Misha');
    for (const value of this.members) {
      if (value instanceof Person) {
        throw new Error('Персонаж уже существует!');
      }
    }
    this.members.add(newPerson);
    return this.members;
  }

  addAll(...persons) {
    console.log(...persons);

    for (const Person of persons) {
      const newPerson = new Person('Misha');
      this.members.add(newPerson);
    }
    return this.members;
  }

  toArray() {
    const arrPerson = [];
    for (const value of this.members) {
      arrPerson.push(value);
    }
    return arrPerson;
  }
}

const newTeam = new Team();
//newTeam.add(Magician);
newTeam.addAll(Bowman, Magician, Swordman);
console.log(newTeam);
