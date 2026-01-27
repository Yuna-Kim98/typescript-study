// 타입 별칭(Type Alias)
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: "홍길동",
    nickname: "도적",
    birth: "26. 01. 27",
    bio: "안녕하세요",
    location: "서울시"
};

let user2: User = {
    id: 2,
    name: "김철수",
    nickname: "친구",
    birth: "26. 01. 27",
    bio: "안녕하세요",
    location: "서울시"
};


// 인덱스 시그니처 : key와 value의 타입을 기준으로 규칙을 이용해 유연하게 객체 타입 정의
// type CountryCodes = {
//     Korea: string;
//     UnitedStates: string;
//     UnitedKingdom: string;
// };
type CountryCodes = {
    [key : string]: string;
};

let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedStates: 'us',
    UnitedKingdom: 'uk'
};

type CountryNumberCodes = {
    [key : string]: number;
    Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
};