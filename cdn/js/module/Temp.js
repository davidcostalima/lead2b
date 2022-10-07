export default class Temp{
    constructor() {
    }
    save(payload){
        window.localStorage.setItem(JSON.stringify(payload))
    }
    info(){
        window.localStorage.getItem('tempJson')
    }
    delete(){
        window.localStorage.removeItem('tempJson')
    }
}