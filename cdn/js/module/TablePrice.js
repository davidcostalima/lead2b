export default class TablePrice {
    all() {
        return [
            { metros: 1 * 1, price: 119 },
            { metros: 1 * 2.7, price: 175 },
            { metros: 1.5 * 1.5, price: 140 },
            { metros: 1.5 * 2.7, price: 197 },
            { metros: 2 * 2.7, price: 247 },
            { metros: 2.5 * 2.7, price: 258 },
            { metros: 3 * 1.6, price: 240 },
            { metros: 3 * 2, price: 280 },
            { metros: 3 * 2.70, price: 280 },
            { metros: 3.5 * 2.70, price: 315 },
            { metros: 4 * 2.70, price: 360 },
            { metros: 5, price: 2.70, price: 410 },
            { metros: 5.5 * 2.70, price: 450 },
            { metros: 6 * 2.70, price: 460 },
            { metros: 6.5 * 2.70, price: 480 },
            { metros: 7 * 2.70, price: 515 },
            { metros: 7.5 * 2.70, price: 550 },
            { metros: 8 * 2.70, price: 585 },
            { metros: 8.5 * 2.70, price: 620 },
            { metros: 9 * 2.70, price: 650 },
            { metros: 9.5 * 2.70, price: 685 },
            { metros: 10 * 2.70, price: 720 },
            { metros: 10.5 * 2.70, price: 756 },
            { metros: 11 * 2.70, price: 770 },
            { metros: 12 * 2.70, price: 840 },
            { metros: 12.5 * 2.70, price: 875 },
            { metros: 13 * 2.70, price: 910 },
            { metros: 14.5 * 2.70, price: 1010 },
            { metros: 15 * 2.70, price: 1050 },
            { metros: 16 * 2.70, price: 1120 },
            { metros: 17.5 * 2.70, price: 1205 },
            { metros: 18 * 2.70, price: 1240 },
            { metros: 18.5 * 2.70, price: 1275 },
            { metros: 19 * 2.70, price: 1300 },
            { metros: 19.5 * 2.70, price: 1330 },
            { metros: 20 * 2.70, price: 1360 },
            { metros: 21 * 2.70, price: 1425 },
            { metros: 22 * 2.70, price: 1495 },
            { metros: 24 * 2.70, price: 1630 },
            { metros: 25.5 * 2.70, price: 1660 },
            { metros: 28 * 2.70, price: 2000 },
        ]
    }
    valor(metros) {
        let list = this.all().find(i => i.metros <= metros) 
        let valor = list?.price || 0
        return valor.toLocaleString('pt-br', { minimumFractionDigits: 2 })
    }
    metros(metros) {
        let list = this.all().find(i => i.metros <= metros) 
        return list?.metros || 0
    }
}