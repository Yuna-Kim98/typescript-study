/**
 * 기본 타입 간의 호환성
 */
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입 간의 호환성
 * -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
 */
type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: "기린",
    color: "yellow",
};

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
};

animal = dog; // 업 캐스팅
// dog = animal; 다운 캐스팅
// 즉, Animal 타입이 슈퍼 타입이고 Dog 타입이 서브 타입
// Dog 타입이 Animal 타입이 가진 속성을 다 가지면서 더 많은 속성을 가지고 있어 슈퍼타입이라고 생각할 수도 있음
// 하지만 구조적 타입 시스템에 따라 Dog 타입은 Animal 타입에 있는 속성이 반드시 포함되기 때문에 Animal 타입이 슈퍼타입임

type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs"
};

book = programmingBook;
// programmingBook = book;

/**
 * 초과 property 검사
 * 변수를 초기화할 때 초기화하는 값으로 객체 리터럴을 사용하면 발동하는 검사
 * -> 초과 프로퍼티를 사용할 수 없도록 막음
 */
let book2: Book = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs"
};

let boo3: Book = programmingBook;

function func(book: Book) {}
func({
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs"
});
func(programmingBook);