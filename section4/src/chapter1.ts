/**
 * 함수 타입 표현식(Function Type Expression)
 */
// 화살표 함수를 만들 듯이 별칭을 이용해 함수의 매개변수와 반환값의 타입을 정의할 수 있음
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
// const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;
// 이렇듯 훨씬 간결하고 깔끔하게 타입이 정의된 코드를 작성할 수 있음.


/**
 * 호출 시그니쳐(콜 시그니쳐)
 * 함수 타입 표현식과 동일한 기능을 함
 * 함수도 객체이기 때문에 사용 가능
 */
type Operation2 = {
    (a: number, b: number): number;
    name: string; // 추가도 가능
}

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;