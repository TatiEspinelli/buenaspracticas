let userAge = 25;
function meetsUserRequirements(userAge, hasVehicle ){
    if (edadDelUsuario >= 18 && hasVehicle){
            return true;
    }else{
        return false;
    }
}
console.log(meetsUserRequirements(userAge, true));
