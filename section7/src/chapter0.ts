/**
 * 제네릭 :: 일반적인, 포괄적인
 * 모든 타입에 쓸 수 있는 범용적인 함수
 * 함수를 호출했을 때 매개변수의 타입이 결정됨
 */
// 제네릭 함수
function func<T>(value: T): T {
    return value;
}

let num = func(10);
let bool = func(true);
let str = func("string");
let arr = func([1, 2, 3]);
let arr2 = func<[number, number, number]>([1, 2, 3]); // 튜플 타입