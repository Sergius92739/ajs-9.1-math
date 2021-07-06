import MathCharacter from './mathCharacter';

export default class Deamon extends MathCharacter {
  constructor(name) {
    super(name, 'Deamon');
    this.attack = 10;
    this.defence = 40;
  }
}
