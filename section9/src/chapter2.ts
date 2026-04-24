/**
 * infer(inference(추론하다) 약자)
 * 조건부 타입 내에서 특정 타입만 추론할 수 있는 기능
 * 조건식을 참으로 만들 수 있도록 동작함
 */
type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

type C = ReturnType<number>; // never


/**
 * 예제
 */
// 1. T는 프로미스 타입이어야 함.
// 2. 프로미스 타입의 결과값 타입을 반환해야 함.
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>; // number

type PromiseB = PromiseUnpack<Promise<string>>; // string