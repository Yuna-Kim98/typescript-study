/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 자바스크립트 : 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 타입스크립트 : 어떤 [타입]의 매개변수를 받고, 어떤 [타입]의 결과값을 반환하는지 이야기
// 반환값의 타입은 생략 가능
function func(a: number, b: number): number {
    return a + b; 
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 * 이때 매개변수의 타입과 기본값의 타입이 다르거나 함수를 호출할 때 매개변수의 타입이 다를 경우 오류가 발생
 */
function introduce(name = "홍길동", tall?: number) {
    console.log(`name : ${name}`);
    if (typeof tall === "number") {
        console.log(`tall : ${tall + 10}`);
    }
}

introduce("홍길동", 175);
introduce("홍길동");
// 매개변수를 선택적 매개변수로 지정하면 이렇게 인수 생략이 가능함
// 선택적 매개변수를 사용할 때는 반드시 필수 매개변수, 선택적 매개변수 순으로 매개변수를 작성해주어야 함.
// 단, 선택적 매개변수의 경우 undefined일 수도 있기 때문에 연산식 등을 추가하면 오류가 발생함.
// 이땐 if문을 사용해 타입좁히기를 해주면 연산식을 사용할 수 있음.

function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));

    return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5) // 15
// 인수의 갯수를 정하고 싶을 때는 (...rest: [number, number, number])로 매개변수를 작성해주면 됨.