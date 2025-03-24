import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

// 创建路由配置
const router = createBrowserRouter([
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/detail',
        element: <Detail />,
    },
    {
        // 重定向到home
        path: '/',
        element: <Navigate to="/home" />
    },
    {
        // 当找不到路由时，重定向到home
        path: '*',
        element: <Navigate to="/home" />
    }
])

export default router;