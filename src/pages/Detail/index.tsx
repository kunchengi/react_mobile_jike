import { useState, useEffect } from 'react'
import { NavBar } from 'antd-mobile'
import { getDetailData, DetailDataType } from '@/apis/detail'
import { useNavigate, useSearchParams } from 'react-router-dom';

const Detail: React.FC = () => {

    const navigate = useNavigate();

    const [detail, setDetail] = useState<DetailDataType | null>(null);

    // 获取路由参数
    const [params] = useSearchParams();
    const id = params.get('id'); // 获取id参数

    // 获取详情数据
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getDetailData(id!)
                setDetail(res.data.data)
            } catch (error) {
                throw new Error('获取数据失败');
            }
        }
        fetchData()
    }, [id])

    if(!detail){ // 没有数据，返回空
        return (
            <div>
                加载中...
            </div>
        );
    }
    
    // 如果有数据，返回详情页面
    return (
        <div>
            {/* 返回按钮，内容为文章标题 */}
            <NavBar onBack={() => navigate(-1)}>{detail?.title}</NavBar>
            {/* dangerouslySetInnerHTML可以渲染带有html标签的字符串 */}
            <div dangerouslySetInnerHTML={{
                __html: detail.content
            }}></div>
        </div>
    )
}

export default Detail