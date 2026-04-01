/**
 * 인터페이스
 */

interface Person {
    readonly name: string;
    age?: number;
    sayHi(): void;
    sayHi(a: number, b: number): void;
}

type Type1 = number | string;
type Type2 = number & string;
// 타입 별칭은 이런 유니온 타입 등을 만들 수 있지만 인터페이스는 만들 수 없음

const person: Person = {
    name: "홍길동",
    sayHi: function() {
        console.log("Hi");
    }
};

person.sayHi();
person.sayHi(1, 2);