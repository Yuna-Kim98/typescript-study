/**
 * 선언 합침
 * 타입 별칭은 동일한 이름의 타입을 여러 개 중복선언하면 오류가 발생
 * 인터페이스는 동일한 이름의 타입을 여러 개 중복선언해도 오류가 발생하지 않음
 * -> 합쳐지기 때문
 */

interface Person {
    name: string;
}

interface Person {
    // name: number; -> 충돌 발생
    age: number;
}
// 인터페이스 확장에서는 서브 타입에서 프로퍼티를 재정의할 때 해당 프로퍼티의 타입이 서브타입이면 재정의가능했지만
// 선언 합침에서는 타입이 아예 일치해야 함

interface Developer extends Person {
    name: "hello"
}

const person: Person = {
    name: "",
    age: 30
};

/**
 * 모듈 보강
 */
interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: "hello",
};