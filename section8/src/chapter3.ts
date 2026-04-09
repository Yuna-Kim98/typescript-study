/**
 * 맵드 타입
 * 기존의 객체타입을 기반으로 새로운 객체 타입을 반환함
 */

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    [key in "id" | "name" | "age"]? : User[key];
};

type BooleanUser = {
    [key in keyof User]: boolean;
};

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
    // ... 기능
    return {
        id: 1,
        name: "홍길동",
        age: 30,
    }
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
    // ...수정하는 기능
}

// const user = fetchUser();
// user.id = 20;

updateUser({
    id: 1,
    name: "홍길동",
    age: 25,
});