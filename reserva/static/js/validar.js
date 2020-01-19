function validar(){
    var rut, dv, nombre, apellido, correo, telefono, habitacion, validarNombre, validarCorreo;
    var seleccion = false;
    var sel = false;
    var valDv = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'K', 'k']
    rut = document.getElementById("rut").value;
    dv = document.getElementById("dv").value;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
    habitacion = document.getElementsByName("habitacion");

    validarCorreo = /\w+@\w+\.+[a-z]/;
    validarNombre = /[a-z]/;

    if (rut == "") {
        alert("El rut esta vacio");
        return false;
    }
    if (rut.length < 7 || rut.length > 8 || isNaN(rut)) {
        alert("El rut ingresado no es valido")
        return false;
    }
    if (dv == "") {
        alert("El digito verificador esta vacio");
        return false;
    }

    for(var i = 0; i< valDv.length; i++){
        if(valDv[i] == dv && dv.length == 1){
             seleccion = true;
             break;
         }
     }
     if(!seleccion){
         alert("El digito verificador ingresado no es valido");
         return false;
     }
   

    if (nombre == "") {
        alert("El nombre esta vacio");
        return false;
    }
    if (!validarNombre.test(nombre)) {
        alert("El nombre ingresado no es valido")
        return false;
    }
    if (apellido == "") {
        alert("El apellido esta vacio");
        return false;
    }

    if (!validarNombre.test(apellido)) {
        alert("El apellido ingresado no es valido")
        return false;
    }

    if (correo == "") {
        alert("El correo esta vacio");
        return false;
    }
    if (telefono == "") {
        alert("El telefono esta vacio");
        return false;
    }

    if (isNaN(telefono)) {
        alert("El telefono ingresado no es valido")
        return false;
    }
    if (telefono.length != 9) {
        alert("El telefono ingresado no es valido ej: '912345678' ")
        return false;
    }
    if (!validarCorreo.test(correo)) {
        alert("El correo no es valido")
        return false;
    }

    for(var i = 0; i< habitacion.length; i++){
       if(habitacion[i].checked){
            seleccion = true;
            break;
        }
    }
    if(!seleccion){
        alert("Debe seleccionar un tipo de habitacion");
        return false;
    }



    
    
        
}