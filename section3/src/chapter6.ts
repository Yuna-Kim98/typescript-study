/**
 * 타입 단언(type assertion)
 */
type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = "홍길동";
person.age = 30;

type Dog = {
    name: string;
    color: string;
};

let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도"
} as Dog;
// Dog 타입에 없는 breed가 있음에도 타입 단언을 하면 name과 color를 Dog 타입의 속성으로 단언할 수 있음

/**
 * 타입 단언의 규칙
 * 단언식 : 값 as 단언 (A as B)
 * A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야 함
 */
let num1 = 10 as never;
// 10은 number 타입이고 never는 모든 타입의 서브타입이기 때문에 가능

let num2 = 10 as unknown;
// 10은 number 타입이고 unknown는 모든 타입의 슈퍼타입이기 때문에 가능

// let num3 = 10 as string;
// number type과 string type은 교집합이 없는 타입이기 때문에 타입 단언 규칙을 충족하지 않음.

let num3 = 10 as unknown as string;
// number type이 unknown type의 서브타입이기 때문에 단언이 되고, unknown이 string의 슈퍼타입이기 때문에 단언 가능
// 이렇게 다중단언을 하면 단언이 안 되는 타입으로도 단언할 수 있음. 단, 좋은 방식은 아님.

/**
 * const 단언
 * 변수를 선언했을 때 상수로 선언한 것과 같게 해주는 단언
 */
let num4 = 10 as const;

let cat = {
    name: "야옹이",
    color: "yellow"
} as const;
// 모든 속성이 readonly로 추론되고 값을 수정할 수 없게 됨.
// 이렇게 선언하면 속성의 갯수가 많은 객체를 초기화할 때 일일이 타입을 선언할 필요가 없음

/**
 * Non Null 단언
 * 어떤 값이 Null이나 Undefined가 아니라고 타입스크립트 컴파일러에게 알려주는 단언
 */
type Post = {
    title: string;
    author?: string; // 익명으로 글을 작성해 작성자명이 없을 수도 있다고 가정하여 선택적 프로퍼티로 설정
};

let post: Post = {
    title: "게시글1",
    author: "홍길동"
};

// const len: number = post.author?.length;
// ?(옵셔널 체이닝) : author의 값이 Null이거나 Undefined일 것을 염두에 둠
// 단, len이 number type으로 선언되었기 때문에 undefined일 수도 있는 값을 할당할 수 없어 오류 발생

const len: number = post.author!.length;
// ! : 이 값이 null이나 undefined가 아니라고 단언하여 값을 할당할 수 있게 해줌.
//단, 실제 값이 없을 수도 있는 경우에도 단언하여 위험할 수 있기 때문에 값이 확실히 있을 때만 사용하는 게 좋음.