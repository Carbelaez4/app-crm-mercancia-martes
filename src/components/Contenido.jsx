import { useEffect, useState } from 'react';
let apiEnvios ='https://back-json-server-martes.onrender.com/envios';

const Contenido = () => {
  const [envios, setEnvios]=useState([]);
  let usuarioLogueado = JSON.parse(localStorage.getItem("usuario"))
   
  function getEnvios(){
    fetch(apiEnvios)
      .then((response)=> response.json())
      .then((data)=>setEnvios(data))
      .catch((error)=>console.log(error));
  }
   useEffect(()=>{
    getEnvios();
  },[])

  function filtrarEnviosUsuario(){
    let enviosFiltrados = envios.filter((item)=> item.usuarioId == usuarioLogueado.id)
    console.log(enviosFiltrados);
  }


 
  return (
    <section className="aplicacion__informacion">

    </section>
  )
}

export default Contenido