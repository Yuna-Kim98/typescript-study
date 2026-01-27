// 타입스크립트 원시 타입
// number 타입
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;
// num1.toFixed();

// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;
//str1.toUpperCase();

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// "strictNullChecks": false -> strict의 하위 옵션. 엄격한 null 타입 체크 옵션을 꺼줌 -> number 타입에 임시로 null값을 넣을 수 있음
// let numA: number = null;

// 리터럴(값) 타입 : 변수의 타입을 값 그 자체로 설정함 -> 다른 값을 집어넣을 수 없음
let numA: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;
