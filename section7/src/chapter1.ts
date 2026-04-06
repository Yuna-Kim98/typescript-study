/**
 * 첫 번째 사례
 */
function swap<T, U>(a: T, b: U) {
    return [b, a];
}

const [a, b] = swap("1", 2);
// 이미 T가 string 타입으로 할당되어 number 타입은 매개 변수에 할당할 수 없음.
// 이때 타입 변수에 U를 추가하면 오류없이 수행할 수 있음. 이처럼 필요한 경우 여러 개를 설정해서 사용 가능.


/**
 * 두 번째 사례
 * 여러 타입의 값이 있는 배열을 받았을 때, 튜플로 타입을 지정하고 첫 번째 요소는 T, 나머지는 신경쓰지 않는다고 설정해줌
 */
function returnFirstValue<T>(data: [T, ...unknown[]]) { // 매개 변수 타입을 배열로 정해줌
    return data[0];
}

let num = returnFirstValue([0, 1, 2]); // 0
let str = returnFirstValue([1, "hello", "mynameis"]); // "hello"


/**
 * 세 번째 사례
 * 매개변수의 타입 T를 number 타입의 length 값을 가지는 개체로 확장함.
 */
function getLength<T extends { length: number }>(data: T) {
    return data.length;
}

let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength("12345"); // 5
let var3 = getLength({ length : 10 }); // 10
// let var4 = getLength(10); length 속성이 없기 때문에 불가능