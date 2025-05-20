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

export function alertaConfirmar(id,apiEnvios,getEnvios){
    Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    
    if (result.isConfirmed) {
      fetch(apiEnvios+ "/" + id, {method: "DELETE"
    }).then(()=>{
      getEnvios()
    })
    Swal.fire({
        title: "Delete",
        text: "Your file has been deleted.",
        icon: "success"
    });
  }
});
}
export function generarToken(){
  let token = Math.random().toString(36).substring(2);
  return token;
}