import { useEffect, useState } from "react";
import { Tabs } from "antd-mobile";
import { getChannelList, ChannelItem } from "@/apis/list.ts";
import './style.css'

const Home: React.FC = () => {
    const [channels, setChannels] = useState<ChannelItem[]>([]);

    useEffect(() => {
        async function getChannels() {
            try {
                const res = await getChannelList();
                if (res) {
                    setChannels(res.data.data.channels);
                }
            } catch (err) {
                throw new Error('获取频道列表失败');
            }
        }
        getChannels();
    }, [])

    return (
        <div>
            {/* 标签栏 */}
            <div className="tabContainer">
                <Tabs>
                    {channels.map((channel, index) => {
                        return (
                            <Tabs.Tab title={channel.name} key={channel.id}>
                                {channel.name}的内容
                            </Tabs.Tab>
                        )
                    })}
                </Tabs>
            </div>
        </div>
    )
}

export default Home;