Vue.createApp({
    data() {
        return {
            step: 1,
            total: 0,
            onNext: true,
            subtitle: [
                "PP (1 a 3m²: 5 malas grandes ou 8 caixas médias)",
                "P (4 a 6m²: Mobília de 1 quarto)",
                "M (7 a 9m²: Mobília de 1 apartamento, de aprox. 70m², com 2 quartos)",
                "G (10 a 31m²: Mobília e eletrodomésticos de 1 casa, de aprox. 200m², com 4 quartos)",
                "Sob medida"
            ],
            steps: [
                {
                    title: "Eu preciso de um box no tamanho:",
                    fields: [],
                    radioName: "tamanho",
                    radio: [                        
                        { label: "PP", value: "0" },
                        { label: "P", value: "1" },
                        { label: "M", value: "2" },
                        { label: "G", value: "3" },
                        { label: "X", value: "4" },
                    ]
                },
                {
                    title: "Para onde devemos enviar o orçamento instantâneo com promoção imperdível?",
                    fields: [
                        { type: "email", title: "E-mail", value: null },
                        { type: "text",  title: "Telefone", value: null },                        
                    ],
                    radioName: null,
                    radio: []
                },
                {
                    title: "Metragens",
                    fields: [],
                    radioName: "metragem",
                    radio: []
                },
                {
                    title: "Tempo de Locação",
                    fields: [],
                    radioName: "tempo",
                    radio: [
                        { label: "1 mês", value: "1" },
                        { label: "2 a 3 meses", value: "3" },
                        { label: "4 a 6 meses", value: "6" },
                        { label: "7 a 12 meses", value: "12" },
                        { label: "Mais de uma ano", value: "13" },
                    ]
                },
                {
                    title: "Olá, João. O seu orçamento é",
                    fields: [],
                    radioName: "orcamento",
                    radio: [
                        { label: "R$XX a R$XX por mês (você sabia que 80% das pessoas escolhe um box maior…) Para um orçamento mais preciso: ", value: "1" },
                        { label: "Quero falar com uma pessoa agora mesmo", value: "3" },
                        { label: "Ter uma cotação personalizada (X perguntas, X minutos) ", value: "6" },
                    ]
                },
                {
                    title: "Eu sei exatamente o que quero guardar. ",
                    fields: [
                        { type: "text", title: "CEP", value: null },
                    ],
                    radioName: null,
                    radio: []
                },
                {
                    title: "",
                    fields: [],
                    radioName: "guardar",
                    radio: [
                        { label: "Eu vou guardar itens da minha empresa", value: "3" },
                        { label: "Eu vou guardar itens da minha casa", value: "6" },
                    ]
                },
                {
                    title: "Eu vou guardar itens da sala",
                    fields: [],
                    radioName: "",
                    radio: []
                },
                {
                    title: "Eu vou guardar itens da cozinha",
                    fields: [],
                    radioName: "",
                    radio: []
                },
                {
                    title: "Eu vou guardar itens do quarto",
                    fields: [],
                    radioName: "",
                    radio: []
                },
                {
                    title: "Eu gostaria que entrem em contato por",
                    fields: [],
                    radioName: "",
                    radio: [
                        { label: "WhatsApp", value: "6" },
                        { label: "Email", value: "6" },
                        { label: "Telefone", value: "6" },
                    ]
                },
                          
            ]
        }
    },
    methods: {
        key() {
            return 1;
        },
        back() {
            this.step--
            this.save()
        },
        finish() {
            localStorage.removeItem('form_temp')
            this.step = 1
        },
        next() {
            this.step++
            this.onNext=true
            this.save()
        },
        isNext() {
            this.onNext=false
        },
        save() {
            return null
            localStorage.setItem('form_temp', JSON.stringify({
                step: this.step,
                home_office: this.home_office,
                nome: this.nome,
                email: this.email,
                telefone: this.telefone,
                total: this.total,
                steps: this.steps
            }))
        },
        handleCalc() {
            let total = this.steps.reduce( (acc, e) => {
                acc = [...acc,...e.fields.map( f => f.quant * f.size)]
                return acc
            }, [] )
            this.total = total.reduce( (acc, v) =>  acc + v, 0 )
        }
    },
    mounted() {        
        // let form_temp = JSON.parse(localStorage.getItem('form_temp'))
        // if (form_temp) {
        //     Object.keys(form_temp).forEach(key => {
        //         this[key] = form_temp[key]
        //     })
        // }
        for( let i = 1; i < 32; i++) {
            this.steps[2].radio.push( { label: `${i}m²`, value: "0" } )
        }
    }
}).mount('#js-app')