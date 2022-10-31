import TablePrice from "./module/TablePrice.js"
import WhatsApp from "./module/Whats.js"
import SendBlue from "./module/sendBlue.js"
import BoxPrice from "./module/BoxPrice.js"
import Temp from "./module/Temp.js"
import Steps from "./module/Steps.js"
import Product from "./module/product.js"
import inputForm from "./module/form.js"
import month from "./module/month.js"
import btns from "./module/btns.js"

const table_price = new TablePrice()
const whats = new WhatsApp()
const box_price = new BoxPrice()
const blue = new SendBlue()
const temp = new Temp()


Vue.createApp({
    data() {
        return {
            openBag: false,
            btns,
            month,
            inputForm,
            Prod: new Product(),
            step: 0,
            steps: Steps,
            totalStep: 0,
            total: 0,
            onNext: true,
            cubagem: [],
            metros: 0,
            allbox: box_price.get_all_Price(),            
            form: {
                size: "PP",
                nome: "victor",
                sobreNome: "Fernando",
                telefone: "38998019210",
                email: "victorfernandomagalhaes@gmail.com",
                locacao: null,
                pulou: null,
                exato: null,
                guard: null,
                contato: null,
                itens: {}
            },
            cart: {}
        }
    },
    methods: {
        newLead() {
            blue.send(
                'Davi',
                'david@oicaribe.com.br',
                'Novo Lead',
                `<div>
                    size: ${this.form.size} <br/>
                    nome: ${this.form.nome} <br/>
                    sobreNome: ${this.form.sobreNome} <br/>
                    telefone: ${this.form.telefone} <br/>
                    email: ${this.form.email} <br/>
                    </div>
                `
            )
        },
        set_data_pages(){
            temp.save({
                nome: this.form.nome,
                sobreNome: this.form.sobreNome,
                telefone: this.form.telefone,
                email: this.form.email
            })
        },
        setData(key, value) {
            this.form[key] = value
        },
        key() {
            return 1;
        },
        back(tipo = "zero") {
            this.step--
            this.save()
            this.$refs.jsBtnPrev.click()
            if (tipo != "zero") {
                let atualStep = Array.from(this.cubagem).map(_ => ({ ..._ }))
                let nowType = atualStep[this.step - 6]?.tipo || "zero"
                this.step = this.step + this.jump[nowType]
            }
            if (this.form.guard == "empresa" && this.step != 22 && this.step != 23) {
                this.step = 5
            }
        },
        finish() {
            this.step = 1
        },
        async next(jump = 1) {
            this.sptep = this.step++
            // document.querySelector('.progress')
        },
        isNext() {
            this.onNext = false
        },
        
        save() {
        },
        forcerSubmit() {
            this.$refs.info.click()
        },
        handleCalc() {
            let total = this.steps.reduce((acc, e) => {
                acc = [...acc, ...e.fields.map(f => f.quant * f.size)]
                return acc
            }, [])
            this.total = total.reduce((acc, v) => acc + v, 0)
        },
        calcularM3() {
            this.metros = this.cubagem.reduce((acc, e) => {
                const subTotal = e.fields.map(c => c.value * c.size)
                const total = subTotal.reduce((a, v) => a + v, 0)
                return acc + total
            }, 0).toFixed(2)

            this.form.itens = this.cubagem.reduce((acc, e) => {
                return [...acc, ...e.fields]
            }, []).filter(e => e.value).map(e => ` ${e.value}-${e.title}`).join(',')
        },
        dataPrint() {
            let now = new Date
            return "Hoje é " + (now.getDate() + "").padStart(2, "0") + "/" + ((now.getMonth() + 1) + "").padStart(2, "0") + "/" + now.getFullYear()
        },
        valorReal(metros) {
            return table_price.valor(metros)
        },
        metrosReal(metros) {
            return table_price.metros(metros)
        },
        whats() {
            whats.send('Olá')
        },
        getParams(name) {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            return urlParams.get(name)
        },
        sendBlue() { 
            blue.send(
                this.form.nome,
                this.form.email,
                'Metro Max',
                `<div>
                    size: ${this.form.size} <br/>
                    nome: ${this.form.nome} <br/>
                    sobreNome: ${this.form.sobreNome} <br/>
                    telefone: ${this.form.telefone} <br/>
                    email: ${this.form.email} <br/>
                    </div>
                `
            )
        }
    },
    mounted() {
        const totalStep = this.steps.length + 6
        this.totalStep = Array(totalStep).fill(Math.random())
        this.calcularM3()
    }
}).mount('#js-app')