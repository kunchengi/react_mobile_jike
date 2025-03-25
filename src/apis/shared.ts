// 定义请求结果的泛型
export type ResType<T> = {
    message: string,
    data: T
}