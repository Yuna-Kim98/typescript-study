// 객체(object)
// object literal type -> property를 기반으로 객체 타입 정의. 구조적 타입 시스템.
let user: {
    id?: number; // 선택적 속성(optional property)
    name: string;
} = {
    id: 1,
    name: "홍길동"
};
user.id;

// user = {
//     name: "홍길동",
// };

let config: {
    readonly apiKey: string; // 값을 수정할 수 없는 읽기 전용 속성으로 지정
} = {
    apiKey: "MY API KEY"
};

// 테스트
// let users: {
//     id: number;
//     name: string;
// }[] = [
//     {
//         id: 1,
//         name: "홍길동"
//     }
// ];

// console.log(users);

// users = [
//     ...users,
//     { id: 2, name: "김철수" }
// ];

// console.log(users);