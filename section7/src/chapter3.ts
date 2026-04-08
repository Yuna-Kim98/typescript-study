/**
 * 제네릭 인터페이스
 * 타입 변수를 타입 파라미터, 제네릭 타입 변수, 제네릭 타입 파라미터 등으로 표현하기도 함.
 * 하나의 인터페이스로 다양한 타입의 객체를 표현할 수 있음.
 */
interface KeyPair<K, V> {
    key: K;
    value: V;
}

let keyPair: KeyPair<string, number> = {
    key: "",
    value: 0,
};
// 타입 정의시 타입 변수에 할당할 타입을 꺽쇠와 함께 반드시 정의해야 함!

let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ["1"],
};

/**
 * 인덱스 시그니쳐
 * property의 key와 value의 타입에 관련된 규칙만 만족하면 어떤 객체든 허용하는 유연한 객체 타입을 만드는 문법.
 */
interface NumberMap {
    [key: string]: number;
}

let numberMap1: NumberMap = {
    key: -1234,
    key2: 123123,
};

// 인덱스 시그니쳐에 제네릭을 함께 쓰면 더 유연한 타입을 만들 수 있음.
interface Map<V> {
    [key: string]: V; // value의 타입을 바꿔 쓸 수 있는 인덱스 타입을 만듦
}

let stringMap: Map<string> = {
    key: "value",
};

let booleanMap: Map<boolean> = {
    key: true,
};


/**
 * 제네릭 타입 별칭
 */
type Map2<V> = {
    [key: string]: V;
}

let stringMap2: Map2<string> = {
    key: "hello",
};


/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분: 학생 유저 / 개발자 유저
 */
interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
}

function goToSchool(user: User<Student>) {
    const school = user.profile.school;
    console.log(`${school}로 등교 완료!`);
}

const developerUser: User<Developer> = {
    name: "홍길동",
    profile: {
        type: "developer",
        skill: "TypeScript"
    },
};

const studentUser: User<Student> = {
    name: "김철수",
    profile: {
        type: "student",
        school: "대학교",
    },
};