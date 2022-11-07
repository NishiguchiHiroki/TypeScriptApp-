export {};

type Profile = {
  name : string;
  age: number;
  zipCode : number;
};

//property(name, age, zipCode)が、オプショナルに変わる
type PartialType = Partial<Profile>;

//property(name, age, zipCode)が必須に変わる
type RequiredType = Required<Profile>;




