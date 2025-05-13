import Login from '../pages/Login';
import Home from '../Home';
import RutaProtegida from '../components/RutaProtegida';
import { Children } from 'react';
import Contenido from '../components/Contenido';
export let enrutador =[
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/home/',
        element: <RutaProtegida componente={<Home />} />,
        children:[
            {
                path:"envios",
                element: <Contenido/>,
            },
        ],
    },
]