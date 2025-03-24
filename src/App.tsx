// 引入RouterProvider
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {

  return (
    <>
      {/* 渲染路由 */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
