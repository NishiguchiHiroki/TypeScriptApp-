export {};

//型の定義
type Profile = {
    name :string ,
    age :number
}

interface ObjectInterface {
    name: string,
    age: number
}

//配列にtype型を設定
let example2: Profile = {
    name: 'Ham',
    age: 21
};
