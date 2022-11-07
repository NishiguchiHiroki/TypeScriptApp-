export {};

let bmi = (height: number, weight: number): number => {
    return weight / (height * height);
}

//簡略化
let bmi2 = (height: number, weight: number): number =>  weight / (height * height);


console.log(bmi(1.72, 66));
console.log(bmi2(1.72, 66));

