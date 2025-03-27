import { Image, List, InfiniteScroll } from "antd-mobile"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { ListRes, getArtListApi } from "@/apis/list"

type ListProps = {
    channelId: string; 
}

// 列表组件
const HomeList: React.FC<ListProps> = ({ channelId }) => {
    const [list, setList] = useState<ListRes>({
        results: [],
        pre_timestamp: '' + new Date().getTime(), 
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getArtListApi({
                    channel_id: channelId,
                    timestamp: '' + new Date().getTime(),
                })
                setList({
                    results: res.data.data.results,
                    pre_timestamp: res.data.data.pre_timestamp
                })
            } catch (error) {
                throw new Error('获取数据失败');
            }
        }
        fetchData()
    },[])

    /**
     * 上拉加载
     * 触发的必要条件：
     * 1. hsasMore为true
     * 2. 离底部的距离小于threshold
     */
    const [hasMore, setHasMore] = useState(true); // 是否还有更多

    // 加载更多
    const loadMore = async () => {
        try {
            const res = await getArtListApi({
                channel_id: channelId,
                timestamp: list.pre_timestamp,// 要传入上一次请求的时间戳，才能获取到下一页的数据
            })
            const newDatas = res.data.data.results;
            setList({
                results: [...list.results, ...newDatas],// 将新的数据拼接在旧的数据后面
                pre_timestamp: res.data.data.pre_timestamp// 更新时间戳
            })
            // 判断是否还有更多数据
            if(newDatas.length === 0){
                setHasMore(false); // 没有更多数据了
            }
        } catch (error) {
            throw new Error('获取数据失败');
        }
    }

    // 跳转到详情页
    const navigate = useNavigate();
    const goToDetail = (art_id: string) => {
        // 跳转到详情页
        navigate(`/detail?id=${art_id}`)
    }

    return (
        <>
            <List>
                {list.results.map(item => (
                    <List.Item
                        key={item.art_id}
                        description={item.pubdate}
                        onClick={() => goToDetail(item.art_id)}
                        prefix={
                            <Image
                                src={item.cover.images?.[0]}
                                style={{ borderRadius: 20 }}
                                fit="cover"
                                width={40}
                                height={40}
                            />
                        }>
                        {item.title}
                    </List.Item>
                ))}
            </List>
            {/* 无限滚动组件，当滑动到底部时触发loadMore，hasMore为是否还有更多，threshold距离页面底部10ox时才触发 */}
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={10}/>
        </>
    )
}

export default HomeList;