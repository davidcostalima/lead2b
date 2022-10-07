export default class BoxPrice {
    constructor() {
        this.lb = {
            pp: {
                primaryPrice: "R$37,00",
                secondPrice: "R$70,00"
            },
            p: {
                primaryPrice: "R$137,00",
                secondPrice: "R$170,0"
            },
            m: {
                primaryPrice: "R$237,00",
                secondPrice: "R$70,00"
            },
            g: {
                primaryPrice: "R$337,00",
                secondPrice: "R$370,00"
            }
        }
    }
    getPtrice(typeSize) {
       return this.lb[typeSize] || this.lb.pp 
    }
}