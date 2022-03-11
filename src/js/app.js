// TODO: write your code here
import Person from './person';

class Team {
  constructor(...args) {
    this.team = [...args];
  }

  [Symbol.iterator]() {
    let current = 0;
    const last = this.length;
    return {
      next() {
        if (current < last) {
          const result = { done: false, value: this[current] };
          current += 1;
          return result;
        }
        return { done: true };
      },
    };
  }
}
const magic = new Person('Magic', 'Magic', 90, 3, 20, 15);
const health = new Person('Health', 'Health', 87, 2, 10, 40);
const tank = new Person('Tank', 'Tank', 100, 10, 40, 10);
const thisTeam = new Team(magic, health, tank);

for (const item of thisTeam) {
  console.log(item);
}
