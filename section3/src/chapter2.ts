/**
 * unknown Type :: 전체 집합
 */
function unknownExam() {
    let a : unknown = 1;
    // 업 캐스팅
    let b : unknown = "hello";
    let c : unknown = true;
    let d : unknown = null;
    let e : unknown = undefined;

    let unknownVar: unknown;
    // let num: number = unknownVar; >> 다운 캐스팅이라 불가능
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}

/**
 * never Type
 * 공집합. 모든 집합의 부분 집합으로, 모든 타입의 서브 타입
 */
function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    // 업 캐스팅
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // 다운 캐스팅
    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}

/**
 * void Type : 반환할 값이 없을 때
 */
function voidExam() {
    function voidFunc(): void {
        console.log("hi");
        return undefined;
    }
    
    let voidVar: void = undefined;
    // void type이 undefined 타입의 슈퍼 타입이기 때문에 반환하거나 할당 가능
}

/**
 * any Type :: 치트키. 타입계층도를 무시함.
 * 모든 타입의 슈퍼 타입이 될 수도 있고 모든 타입의 서브 타입이 될 수도 있음(이 경우 never 타입 제외)
 */
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar; // 다운 캐스팅 가능
    undefinedVar = anyVar; // 다운 캐스팅 가능
    // neverVar = anyVar;
}
// 즉, any 타입은 자신에게 다운 캐스팅 하는 것도, 자신이 다운 캐스팅 하는 것도 가능함
// 단, never 타입은 공집합으로 어떤 타입도 never 타입으로 다운 캐스팅 할 수 없음.
