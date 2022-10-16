function validar (){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let comentarios = document.getElementsByName('comentarios').value;
    let fecha = document.getElementById('fecha').value;
    
    if (nombre == null || nombre.length == 0 
        || apellido == null || apellido.length == 0) {
            //alert('este campo esta vacio')
        console.log('campo vacio debe completar Nombre o apellido')
        document.getElementById('mensaje').innerHTML="campo/s vacio/s debe completar Nombre o apellido"        

    } 
    // redudante cuando chequeamos la longitud ya sabemos si es una cadena vacia
    // pero por ahora lo dejo asi despues lo saco 
    if (fecha == null || fecha.length ==0 || fecha== "" ){
        console.log('por favor completar fecha')
        alert('por favor completar fecha')
        document.getElementById('fecha').innerHTML="completar fecha"
    } 
    
    if (comentarios == undefined || comentarios.length == 0){
        alert('debe tener algun comentario ?? ')
        console.log('debe tener algun comentario ?? ')
        document.getElementById('aviso sin comentarios').innerHTML="debe tener algun comentario ?? " 
    }

    
}
