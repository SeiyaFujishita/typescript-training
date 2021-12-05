export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

const person1 = new Person("Taro", 30);
console.log(person1.profile());
