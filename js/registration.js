function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Ingresar Usuario*";
        return false;
    }
    else if(document.Formfill.Username.value.length < 6){
        document.getElementById("result").innerHTML="Mínimo 6 caracteres*";
        return false;
    }
}