import { Image, List } from "antd-mobile"
import { useEffect, useState } from "react"
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

    return (
        <>
            <List>
                {list.results.map(item => (
                    <List.Item
                        key={item.art_id}
                        description={item.pubdate}
                        onClick={() => console.log('点击')}
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
        </>
    )
}

export default HomeList;