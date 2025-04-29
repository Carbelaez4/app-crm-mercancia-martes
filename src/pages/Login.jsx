import { useEffect, useState } from 'react'

import './Login.css'
import { alertaError, alertaRedireccion, generarToken } from '../helpers/funciones'
import { useNavigate } from 'react-router-dom'
let apiUsuario ='https://back-json-server-martes.onrender.com/usuarios'

function Login() {
  const [getUser, setUser]= useState("");
  const [getPassword, setPassword]= useState("");
  const [getName, setName]= useState("");
  const [getEmail, setEmail]= useState("");
  const [usuarios, setUsuarios] = useState([]);/*Todos estos son los estados  */
  let redireccion = useNavigate();
  function getUsuarios(){
    fetch(apiUsuario)
      .then((response)=> response.json())
      .then((data)=>setUsuarios(data))
      .catch((error)=>console.log(error));
  }
 
  useEffect(()=>{
    getUsuarios()
  },[]);/*recibe dos parametros una funcion flecha, y un arreglo vacio que esta arriba en el useState */
  
  
  
  function buscarUsuario(){
    let usuarioEncontrado = usuarios.find((item)=> getUser == item.usuario && getPassword == item.contrasena)
    return usuarioEncontrado
  }

  function iniciarSesion(){
    if(buscarUsuario()){
      let token = generarToken();
      localStorage.setItem("token",token);
      localStorage.setItem("usuario",JSON.stringify(buscarUsuario()));
      alertaRedireccion(redireccion, "Bienvenido al sistem", '/home')
    } else {
      alertaError()
    }

  }

  function registrarUsuario(){
    let auth = usuarios.some((item)=>item.correo==getEmail || item.usuario==getUser)
    if(auth){
      alertaError()
    }else{
      let nuevoUsuario ={
        nombre: getName,
        correo: getEmail,
        usuario: getUser,
        contrasena: getPassword,

      }
      fetch(apiUsuario,{
        method:"POST",
        body: JSON.stringify(nuevoUsuario),
      })/*le paso un segundo parametro objeto tipo method psot */
    }
  }
  
  return (
    <div className="container">
      <input id="signup_toggle" type="checkbox" />
      <form className="form">
        <div className="form_front">
          <div className="form_details">Login</div>
          <input onChange={(e)=>setUser(e.target.value)} type="text" className="input" placeholder="Username" />
          <input onChange={(e)=> setPassword(e.target.value)}  type="text" className="input" placeholder="Password" />
          <button type='button' onClick={iniciarSesion} className="btn">Login</button>
          <span className="switch">Don't have an account?
            <label for="signup_toggle" className="signup_tog">
              Sign Up
            </label>
          </span>
        </div>
        <div className="form_back">
          <div className="form_details">SignUp</div>
          <input onChange={(e)=>setName(e.target.value)} type="text" className="input" placeholder="Firstname" />
          <input onChange={(e)=>setUser(e.target.value)} type="text" className="input" placeholder="Username" />
          <input onChange={(e)=>setPassword(e.target.value)} type="text" className="input" placeholder="Password" />
          <input onChange={(e)=>setEmail(e.target.value)} type="text" className="input" placeholder="Email" />
          <button type="button" onClick={registrarUsuario} className="btn">Signup</button>
          <span className="switch">Already have an account?
            <label for="signup_toggle" className="signup_tog">
              Sign In
            </label>
          </span>
        </div>
      </form>
    </div>
  )
}

export default Login