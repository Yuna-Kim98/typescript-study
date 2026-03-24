/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */

type Admin = {
    tag: "ADMIN"
    name: string;
    kickCount: number;
};

type Member = {
    tag: "MEMBER"
    name: string;
    point: number;
};

type Guest = {
    tag: "GUEST"
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;

// Admin => {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member => {name}님 현재까지 {point} 모았습니다.
// Guest => {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
    // if (user.tag === "ADMIN") {
    //     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    // } else if (user.tag === "MEMBER") {
    //     console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
    // } else {
    //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
    // }

    switch (user.tag) {
        case "ADMIN":
            {
                console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
                break;
            }
        case "MEMBER":
            {
                console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
                break;
            }
        case "GUEST":
            {
                console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
                break;
        }
    }
}

/**
 * 복습 및 활용!
 * 비동기 작업의 결과를 처리하는 객체
 */

// type AsyncTask = {
//     state: "LOADING" | "FAILED" | "SUCCESS";
//     error?: {
//         message: string;
//     };
//     response?: {
//         data: string;
//     };
// };

// function processResult(task: AsyncTask) {
//     switch (task.state) {
//         case "LOADING": {
//             console.log("로딩 중");
//             break;
//         }
//         case "FAILED": {
//             console.log(`에러 발생: ${task.error?.message}`);
//             break;
//         }
//         case "SUCCESS": {
//             console.log(`성공: ${task.response?.data}`);
//             break;
//         }
//     }
// }
// 위와 같이 코드를 작성할 경우 error와 success는 선택적 프로퍼티이기 때문에 있는 지 없는 지 정확히 알 수 없어 타입 좁히기가 제대로 되지 않음

// 때문에 아래와 같이 세 개의 서로소 유니온 타입으로 분리해줌
type LoadingTask = {
    state: "LOADING"
};

type FailedTask = {
    state: "FAILED";
    error: {
        message: string;
    };
};

type SuccessTask = {
    state: "SUCCESS";
    response: {
        data: string;
    };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 로딩 중 => 콘솔에 로딩중 출력
// 실패 => 실패 : 에러메시지 출력
// 성공 => 성공 : 데이터 출력
function processResult(task: AsyncTask) {
    switch (task.state) {
        case "LOADING": {
            console.log("로딩 중");
            break;
        }
        case "FAILED": {
            console.log(`에러 발생: ${task.error.message}`);
            break;
        }
        case "SUCCESS": {
            console.log(`성공: ${task.response.data}`);
            break;
        }
    }
}