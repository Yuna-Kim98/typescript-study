/**
 * 대수타입
 * 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * 합집합 타입과 교집합 타입이 존재
 */

/**
 * 1. 합집합 - Union 타입
 * 필요한 타입을 무한히 엮어서 사용할 수 있음
 */
let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
    name: "",
    color: "",
};

let union2: Union1 = {
    name: "",
    language: "",
};

let union3: Union1 = {
    name: "",
    color: "",
    language: "",
};

// let union4: Union1 = {
//     name: ""
// };
/**
    현재 Dog와 Person은 name이라는 속성을 공유하는 교집합 타입. 슈퍼-서브 타입의 관계는 가지지 않음
    Union1 타입에 포함되려면 Dog 또는 Person 타입에 포함되거나 그 교집합에 포함되어야 하는데
    변수 union4의 경우 두 타입의 공통 속성인 name을 가지고 있지만 양쪽 그 어디에도 속하지 않기 때문에
    합집합 밖의 변수가 됨. 따라서 오류 발생!
 */


/**
 * 2. 교집합 타입 - Intersection 타입
 * & 연산자를 사용해 교집합 타입을 만듦.
 * 기본 타입들은 겹치는 부분이 없기 때문에 대부분 never 타입으로 정의됨.
 */
let variable: number & string; // never type

type Intersection = Dog & Person;

let intersection1: Intersection ={
    name: "",
    color: "",
    language: ""
};