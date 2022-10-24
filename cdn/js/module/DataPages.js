export default class DataPages{
    
    set_data_camps(nome, sobreNome, telefone, email){
        window.localStorage.setItem("payload", 
        JSON.stringify({
            nome: nome,
            sobreNome: sobreNome,
            telefone: telefone,
            email: email
        }))
    }
    get_data_camps(){
        return JSON.parse(window.localStorage.getItem("payload"))
    }
}

