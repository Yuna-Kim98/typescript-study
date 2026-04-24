/**
 * 분산적인 조건부 타입
 */
type StringNumberSwitch<T> = [T] extends [number] ? string : number;

let a : StringNumberSwitch<number>;
let b : StringNumberSwitch<string>;

let c : StringNumberSwitch<number | string>;
// StringNumberSwitch<number> | StringNumberSwitch<string> -> let c: string | number

let d : StringNumberSwitch<boolean | number | string>;
// 1단계 - StringNumberSwitch<boolean> -> number type
// 2단계 - StringNumberSwitch<number> -> string type
// 3단계 - StringNumberSwitch<string> -> number type
// 결과 - number | string type


/**
 * 예제1
 */
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계 - Exclude<number, string> | Exclude<string, string> | Exclude<boolean, string>
// 2단계 - number | never | boolean
// 결과 - number | never | boolean -> number | boolean
// never 타입은 공집합 타입이므로 다른 집합과 합집합해도 원본 집합이 나옴. 따라서 never 타입과 합쳐질 때 never는 사라짐.
// 결국 해당 조건부 타입은 T = U일 때는 never를 반환해 타입을 없애버리고 T =/= U일 때는 T의 타입을 그대로 반환하는
// 즉, U의 타입을 제거하는 조건부 타입임.


/**
 * 예제2
 * 예제1과 완전히 반대되는, U의 타입만 남기는 조건부 타입 만들기
 */
type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1단계 - Extract<number, string> | Extract<string, string> | Extract<boolean, string>
// 2단계 - never | string | never
// 결과 - string
