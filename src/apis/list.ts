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