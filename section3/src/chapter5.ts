/**
 * 타입 추론
 * 쉽게 말해 추론할 수 있는 값이 있으면 추론하고 없으면 추론하지 못함
 */
// 변수의 초기값을 기준으로 타입을 추론함
let a = 10;
let b = "hello";

let c = {
    id: 1,
    name: "홍길동",
    profile: {
        nickname: "hong",
    },
    urls: ["http://hong.com"]
};

let { id, name, profile } = c;

let [ one, two, three ] = [ 1, "hello", true ];
// 구조분해할당에도 타입이 잘 추론됨

function func(message = "hello") {
    return "hello";
}
// 함수는 반환값을 기준으로 타입을 추론함
// 매개변수에도 기본값이 있을 경우 그 기본값을 기준으로 타입을 추론함

let d; // any type으로 추론
d = 10; 
d.toFixed(); // number type으로 추론
d = "hello";
d.toUpperCase(); // string type으로 추론
// 이와 같이 초기값이 없을 경우 암묵적으로 any type으로 추론됨.
// 단, 변수에 값을 넣어줄 때마다 그 값에 따라 진화함.

const num = 10; // number가 아닌 number literal type으로 추론. const는 한 번 초기화하고 나면 다른 값을 저장할 수 없기 때문.
const str = "hello"; // 마찬가지로 string literal type으로 추론
let arr = [1, "string"]; // union type으로 추론

/**
 * 변수를 선언할 때 let으로 선언하면 범용적으로 타입이 추론 됨
 * ex) let num = 10; -> number type / const num = 10; -> number literal type
 * 이를 타입 넓히기라고 함
 */