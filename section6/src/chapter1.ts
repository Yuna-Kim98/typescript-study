/**
 * 타입스크립트의 클래스
 */

const employee = {
    name: "홍길동",
    age: 30,
    position: "developer",
    work() {
        console.log("일함");
    },
};

// 타입스크립트의 클래스는 자바스크립트 클래스이면서 타입스크립트의 타입으로 정의됨
class Employee {
    // field
    name: string;
    age: number;
    position: string;

    // constructor
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // method
    work() {
        console.log("일함");
    }
}

class ExecutiveOfficer extends Employee {
    // field
    officeNumber: number;

    // constructor
    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}

const employeeB = new Employee("김철수", 30, "개발자");
console.log(employeeB);

const employeeC: Employee = {
    name: "",
    age: 30,
    position: "",
    work() {},
};