/**
 * 접근 제어자
 * access modifier => public(기본), private, proteced
 */

class Employee {
    // field :: 생성자에 접근 제어자를 달면 생성자에서 필드 초기화도 자동으로 되기 때문에 필드 생략 가능 
    // private name: string;
    // protected age: number;
    // position: string;

    // constructor
    constructor(private name: string, protected age: number, public position: string) {
        // this.name = name;
        // this.age = age;
        // this.position = position;
    }

    // method
    work() {
        console.log(`${this.name} 일함`);
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

    // method
    func() {
        this.age;
    }
}

const employee= new Employee("홍길동", 27, "developer");
// employee.name = "김철수";
// employee.age = 30;
employee.position = "designer";
console.log(employee);