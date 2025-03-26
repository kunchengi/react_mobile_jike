import { Image, List } from "antd-mobile"

// 模拟数据
const source = {
    results: [
        {
            art_id: 1,
            title: '标题1',
            pubdate: '2023-08-11 12:00:00',
            cover: {
                images: [
                    'https://p2.itc.cn/images01/20230421/2441396c76624de181dfa0f1fa077ec8.jpeg'
                ]
            }
        },
        {
            art_id: 2,
            title: '标题2',
            pubdate: '2023-08-11 12:00:00',
            cover: {
                images: [
                    'https://p2.itc.cn/images01/20230421/2441396c76624de181dfa0f1fa077ec8.jpeg'
                ]
            }
        }
    ]
}

// 列表组件
const HomeList: React.FC = () => {
    console.log('渲染列表');
    return (
        <>
            <List>
                {source.results.map(item => (
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