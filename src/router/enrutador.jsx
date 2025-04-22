import Login from '../pages/Login';
import Home from '../Home';
import RutaProtegida from '../components/RutaProtegida';
export let enrutador =[
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/home',
        element: <RutaProtegida componente={<Home />} />,
    }
]