/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
    // 인터페이스의 필드는 무조건 public 접근 제어자만 정의할 수 있음
}

// CharacterInterface 인터페이스를 구현하는 Charater 클래스
class Character implements CharacterInterface {
    
    constructor(
        public name: string, 
        public moveSpeed: number,
        private extra: string,
    ) {}

    move(): void {
        console.log(`${this.moveSpeed}만큼 이동!`);
    }
}