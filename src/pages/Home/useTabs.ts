import { useEffect, useState } from "react";
import { getChannelList, ChannelItem } from "@/apis/list";

function useTabs() {
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

    return {
        channels
    }
}

export { useTabs };