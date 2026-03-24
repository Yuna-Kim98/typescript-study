/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법을 이야기함
 */

type Person = {
    name : string;
    age : number;
}

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
    if (typeof value === 'number') {
        console.log(value.toFixed());
    } else if (typeof value === 'string') {
        console.log(value.toUpperCase());
    } else if (value instanceof Date) {
        console.log(value.getTime());
    } else if (value && 'age' in value) {
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
}
// 조건문 내부에서 변수의 타입이 더 좁은 타입으로 보장될 수 있을 때 그 안에서 타입 좁히기가 실행됨
// typeof 연산자를 활용해 조건문과 함께 타입 좁히기를 할 수 있는 표현들을 타입 스크립트에서는 '타입 가드'라고 부름

// 단, typeof 연산자는 null에 typeof를 사용해도 object를 반환함
// 따라서 매개변수 타입에 Date를 추가하고 (typeof === 'object')로 타입 가드를 사용할 경우 타입 오류가 발생할 수 있음
// 때문에 오류 방지를 위해 객체를 확인하는 instanceof를 사용하여 (value instanceof Date)로 작성