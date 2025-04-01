import Login from '../pages/Login'
import Home from '../Home'
export let enrutador =[
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    }
]