/**
 * 사용자 정의 타입 가드(Custom Type Guard)
 */
type Dog = {
    name: string;
    isBark: boolean;
}

type Cat = {
    name: string;
    isScratch: boolean;
}

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).isBark ! == undefined;
} // Dog 타입의 animal의 isBark 속성이 undefined가 아니면(즉, 존재하면) 해당 반환값을 Dog 타입으로 정의하는 타입 가드 함수

function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
    if (isDog(animal)) {
        // dog
        animal;
    } else {
        // cat
        animal;
    }
}