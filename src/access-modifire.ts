export {};

class Person {
    public name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}`;
    }
}

    let taro = new Person('taro', 20);

    console.log(taro.profile());
    console.log(taro.name);


       
