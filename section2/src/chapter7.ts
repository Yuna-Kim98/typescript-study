// void type
// void :: 공허 -> 아무 것도 없음을 의미하는 타입

function func1():string {
    return "hello";
}

function func2(): void {
    console.log("hello");
}
// 함수의 반환값 타입을 undefined이나 null 타입으로 정의할 경우 반드시 undefined나 null을 반환해야하기 때문에 반환할 값이 없는 경우 void를 사용함

let a: void;
a = undefined; // strictNullChecks 옵션이 켜진 상태에서는 타입이 void이면 undefined만 담을 수 있음

// never type -> 불가능한 타입
function func3(): never {
    while (true) {} // 반환문이 없어 무한루프를 도는 함수. 즉, 정상적으로 종료될 수 없음
}

function func4(): never {
    throw new Error();
}

let b: never; // any type과 달리 strictNullChecks 옵션을 꺼도 undefined나 null 값을 할당할 수 없음