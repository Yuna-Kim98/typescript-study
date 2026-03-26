/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // a의 반환값 타입은 number, b의 반환값 타입은 number literal이기 때문에 반환값 기준 업 캐스팅 가능
// b = a; // 다운 캐스팅이기 때문에 오류


// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 갯수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; 
// 매개변수의 타입 호환을 확인할 때는 반대로 업 캐스팅이 호환되지 않음.
// 이때 c의 매개변수 타입은 number, d의 매개변수 타입은 number literal로 업 캐스팅이기 때문에 오류 발생
d = c;
// 다운 캐스팅이므로 가능

type Animal = {
    name: string;
}

type Dog = {
    name: string;
    color: string;
};

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

// animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
    console.log(animal.name);
    // console.log(animal.color);
}
// 이렇듯 매개변수 호환성을 볼 때는 객체 타입으로 작성해서 보면 더 이해하기가 쉬움.
// Animal이 슈퍼 타입이고 Dog가 서브 타입임. 업 캐스팅은 가능, 다운 캐스팅은 불가능한 구조.

// 2-2. 매개변수의 갯수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // Func1의 매개변수는 2개, Func2의 매개변수는 1개이기 때문에 가능. 단, 매개변수의 타입이 같아야 함.
// func2 = func1; Func1의 매개변수는 2개, Func2의 매개변수는 1개이기 때문에 불가능.