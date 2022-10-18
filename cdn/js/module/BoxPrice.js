export default class BoxPrice {
    constructor() {
        this.lb = {
            pp: {
                primaryPrice: "R$37,00",
                secondPrice: "R$70,00",
                legend: "5 malas grandes ou 8 caixas médias",
                area: "1 a 3m",
                nome: "PP"
            },
            p: {
                primaryPrice: "R$137,00",
                secondPrice: "R$170,0",
                legend: "Mobilia de um quarto",
                area: "4 a 6m",
                nome: "P"
            },
            m: {
                primaryPrice: "R$237,00",
                secondPrice: "R$70,00",
                legend: "Mobilia de 1 apartamento, de aproximadamente 70m, com 2 quartos",
                area: "7 a 9m",
                nome: "M"
            },
            g: {
                primaryPrice: "R$337,00",
                secondPrice: "R$370,00",
                legend: "Mobilia e eletro eletrônico de 1 casa de aproximadamente 200m, com 4 quartos",
                area: "10 a 31m",
                nome: "G"
            },
            s: {
                primaryPrice: "",
                secondPrice: "",
                legend: "",
                area: "",
                nome: "Sob Medida"
            }
        }
    }
    getPrice(typeSize) {
       return this.lb[typeSize] || this.lb.pp 
    }
    get_allPrice(){
       return this.lb || {} 
    }
}