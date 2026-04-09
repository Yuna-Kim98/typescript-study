/**
 * keyof 연산자
 */
interface Person {
    name: string;
    age: number;
}

type Person2 = typeof person;

function getPropertyKey(person: Person, key: keyof Person) {
    return person[key];
}

const person: Person = {
    name: "홍길동",
    age: 30,
};

getPropertyKey(person, "name"); // 홍길동
