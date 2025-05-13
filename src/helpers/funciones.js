import Swal from "sweetalert2";
export function alertaRedireccion(redireccion, mensaje, ruta){
    let timerInterval;
    Swal.fire({
      title: mensaje,
      html: "Sera redireccionado en <b></b> milliseconds.",
      timer: 2000,
      icon: "success",
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
        redireccion(ruta)
      }
    })
}

export function alertaGeneral(titulo,mensaje,icono){
    Swal.fire({
        icon: icono,
        title: titulo,
        text: mensaje
      });
}
export function generarToken(){
  let token = Math.random().toString(36).substring(2);
  return token;
}