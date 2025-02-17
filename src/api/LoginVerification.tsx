
export function VerifyLogin({matricula, senha} : any){
    if(matricula.trim() === "" || senha.trim() === "" || matricula === undefined || senha === undefined){
        return false;
    } else {
        return true;
    }
}