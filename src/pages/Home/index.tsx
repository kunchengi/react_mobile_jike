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
                <Tabs>
                    {channels.map((channel, index) => {
                        return (
                            <Tabs.Tab title={channel.name} key={channel.id}>
                                <HomeList channelId={channel.id.toString()}/>
                            </Tabs.Tab>
                        )
                    })}
                </Tabs>
            </div>
        </div>
    )
}

export default Home;