// array(배열)
// 방식1
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "kim"];
// 방식2
let boolArr: Array<boolean> = [true, false, true]; // 제네릭 문법
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];
// 다차원 배열
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5]
];

// tuple : 값의 길이와 타입, 순서가 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];
// const users: [string, number][] = [
//     ["홍길동", 1],
//     ["이아무개", 2],
//     ["김아무개", 3],
//     ["박아무개", 4],
//     [5, "박아무개"],
// ];