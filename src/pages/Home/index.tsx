import React, { useEffect } from "react";
import { getChannelList } from "@/apis/list.ts";

const Home: React.FC = () => {

    useEffect(() => {
        async function getChannels(){
            const res = await getChannelList();
            if(res)
            {
                console.log(res.data.data.channels);
            }
        }
        getChannels();
    }, [])

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home;