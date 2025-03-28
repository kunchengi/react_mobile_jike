import { Tabs } from "antd-mobile";
import HomeList from "./HomeList";
import { useTabs } from "./useTabs";
import './style.css'

const Home: React.FC = () => {
    const { channels } = useTabs();
    return (
        <div>
            {/* 标签栏 */}
            <div className="tabContainer">
                {/* defaultActiveKey，默认选中第一个 */}
                <Tabs defaultActiveKey={'0'}>
                    {channels.map((channel, index) => {
                        return (
                            <Tabs.Tab title={channel.name} key={channel.id}>
                                <div className="listContainer">
                                    <HomeList channelId={channel.id.toString()}/>
                                </div>
                            </Tabs.Tab>
                        )
                    })}
                </Tabs>
            </div>
        </div>
    )
}

export default Home;