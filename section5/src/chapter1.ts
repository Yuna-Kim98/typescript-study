/**
 * 인터페이스의 확장
 * 유연하게 타입을 확장해서 사용할 수 있는 문법(타입 별칭보다 활용도가 높음)
 * 객체 타입이면 확장할 수 있어 타입 별칭으로도 사용 가능
 */

interface Animal {
    name: string;
    color: string;
}

interface Dog extends Animal {
    isBark: boolean;
}

const dog: Dog = {
    name: "",
    color: "",
    isBark: true,
};

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

interface DogCat extends Dog, Cat {

}

// 다중확장
const dogCat: DogCat = {
    name: "",
    color: "",
    isBark: true,
    isScratch: true,
};