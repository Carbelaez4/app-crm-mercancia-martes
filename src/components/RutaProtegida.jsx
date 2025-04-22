import { Navigate } from "react-router-dom";

function RutaProtegida({ componente}){
    let token = localStorage.getItem("token");
    if (token){
        return componente
    } else {
        return <Navigate to="/" />;  /*Me deja donde yo este en caso de que no exista el token*/ 
    }

}
export default RutaProtegida
