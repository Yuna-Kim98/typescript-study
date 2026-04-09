/**
 * 인덱스드 엑세스 타입
 * 객체 타입으로부터 특정 프로퍼티의 타입을 뽑아 변수에 정의할 수 있도록 도와주는 문법
 */

/** 객체 타입 예시 **/ 
interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}

// 게시글 작성자의 이름과 아이디를 이어서 출력하는 함수
function printAuthorInfo(author: Post["author"]) {
    console.log(`${author.name}-${author.id}`);
}

const post: Post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "홍길동",
        age: 27
    },
};

printAuthorInfo(post.author);


/** 배열 예시 **/
type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}[];

function printAuthorInfo2(author: PostList[number]["author"]) {
    console.log(`${author.name}-${author.id}`);
}

const post2: PostList[number] = { // number가 아니라 0을 써도 됨. 이는 타입인 것만 유의할 것!
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "홍길동",
        age: 27
    },
};


/** 튜플 사용 예시 **/
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
type TupNum = Tup[number];