export {};

interface Profile {
  name : string;
  underTwenty : boolean;
  [index: string ] : string | number | boolean;
}

// let profile { name?: string } = {}; 
let profile: Profile = { name: 'ham',  underTwenty: false};

profile.name = 'ham'
profile.age = 43;



