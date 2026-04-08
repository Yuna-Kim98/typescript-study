/**
 * 제네릭 클래스
 * 제네릭 클래스는 제네릭 인터페이스, 제네릭 타입 변수와 달리 클래스의 생성자를 호출할 때
 * 생성자의 인수를 전달하는 값을 기준으로 타입을 추론함
 * 따라서 호출시 따로 제네릭을 정의하지 않아도 됨.
 */
class List<T> {
    constructor(private list: T[]) {}

    push(data: T) {
        this.list.push(data);
    }

    pop() {
        return this.list.pop();
    }

    print() {
        console.log(this.list);
    }
}

const numberList = new List([1, 2, 3]);
numberList.pop(); // [1, 2]
numberList.push(4); // [1, 2, 4]
numberList.print(); // [1, 2, 4]

const stringList = new List(["1", "2"]);
stringList.push("hello");