export default class BoxPrice {
    constructor() {
        this.lb = {
            PP: {
                primaryPrice: "R$ 37,00",
                secondPrice: "R$ 70,00",
                legend: "5 malas grandes ou 8 caixas médias",
                area: "1 a 3 m²",
                nome: "PP"
            },
            P: {
                primaryPrice: "R$ 137,00",
                secondPrice: "R$ 170,0",
                legend: "Mobília de um quarto",
                area: "4 a 6 m²",
                nome: "P"
            },
            M: {
                primaryPrice: "R$ 237,00",
                secondPrice: "R$ 70,00",
                legend: "Mobília de 1 apartamento, de aproximadamente 70m, com 2 quartos",
                area: "7 a 9 m²",
                nome: "M"
            },
            G: {
                primaryPrice: "R$ 337,00",
                secondPrice: "R$ 370,00",
                legend: "Mobília e eletro eletrônico de 1 casa de aproximadamente 200m, com 4 quartos",
                area: "10 a 31 m²",
                nome: "G"
            },
            S: {
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
    get_all_Price(){
       return this.lb || {} 
    }
}