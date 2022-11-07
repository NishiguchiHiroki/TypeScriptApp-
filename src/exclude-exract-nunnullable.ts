export {};


//第一引数のUnion型から第二引数に型を指定して除外して新たな型を作成
type testType = string | number;
type stringType = Exclude<testType, number>;


//Union型から特定の型のみを取り出す
type testType1 = string | number;
type numberType = Extract<testType1, number>;


//nullとundefinedをUnion型から除外
type testType2 = string | number | null | undefined;
type NonNullType = NonNullable<testType>;