/**
 * Pick<T, T>
 * 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
    // K extends "title" | "tags" | "content" | "thumnailURL"
    // "title" | "content" extends "title" | "tags" | "content" | "thumnailURL"
    [key in K]: T[key];
};

// 옛날 콘텐츠라 tags 프로퍼티가 없다고 가정
const legacyPost: Pick<Post, "title" | "content"> = {
    title: "옛날 글",
    content: "옛날 컨텐츠",
};


/**
 * Omit<T, K>
 * 생략하다, 빼다 라는 뜻으로 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = "title"
// Pick<Post, Exclude<keyof Post, "title">
// Pick<Post, Exclude<"title" | "content" | "tags" | "thumnailURL", "title">
// Pick<Post, "content" | "tags" | "thumnailURL">

const noTitlePost: Omit<Post, "title"> = {
    content: "",
    tags: [],
    thumbnailURL: "",
};


/**
 * Record<T, V>
 */

// type ThumbnailLegacy = {
//     large: {
//         url: string;
//     },
//     medium: {
//         url: string;
//     },
//     small: {
//         url: string;
//     },
//     watch: {
//         url: string;
//     },
// };

type Record<K extends keyof any, V> = {
    [key in K]: V;
};

type Thumbnail = Record<
    "large" | "medium" | "small" | "watch" ,
    { url: string; size: number; }
>;