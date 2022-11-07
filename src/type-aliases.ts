export {};

type Mogiretsu = string;

const foostring : string = 'Hello';
const fooMogiretsu : Mogiretsu = 'Hello';

const example = {
    name: 'Ham',
    age: 21
};

//型の定義
type Profile = {
    name :string ,
    age :number
}

//配列にtype型を設定
const example2: Profile = {
    name: 'Ham',
    age: 21
};

//型の代入　　メリット：exampleの値が変わっても追従するので、変更が楽。
type Profile2 = typeof example;

console.log(example2);


