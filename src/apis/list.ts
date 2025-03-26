import { http } from "@/utils";
import { ResType } from "./shared";

// 定义请求结果中data的类型
export type ChannelItem = {
    id: number,
    name: string,
}

// 定义频道列表的类型
type ChannelList = {
    channels: ChannelItem[],
}

// 获取频道列表
export const getChannelList = () => {
    // ResType<ChannelList> 表示返回的数据类型
    return http<ResType<ChannelList>>({
        url: '/channels'
    })
}

// 定义请求参数的类型
type ReqListParams = {
    channel_id: string,// 频道id
    timestamp: string,// 时间戳，请求下一页数据时使用，第一次请求可以不传递
}

// 定义文章列表项的类型
type ListItem = {
    art_id: string,// 文章id
    title: string,// 文章标题
    aut_id: string,// 作者id
    comm_count: number,// 评论数
    pubdate: string,// 发布时间
    aut_name: string,// 作者名称
    is_top: number,// 是否置顶 0 否 1 是
    cover: {
        type: number,// 封面类型 0 无图 1 单图 3 多图
        images: string[]// 图片列表
    }
}

// 定义文章列表的类型
export type ListRes = {
    results: ListItem[],// 文章列表
    pre_timestamp: string,// 上一页的时间戳
}

export const getArtListApi = (params: ReqListParams) => {
    return http<ResType<ListRes>>({
        url: '/articles',
        params
    })
}