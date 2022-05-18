const pathApi = "http://dev.metromax.net.br/calcule-seu-espaco-2/"

const calculadora = [
    {
        title: "Eu sei vou guardar algum item da minha Sala?",
        fields: [],
        yesNot: true,
        saltNot: 5
    },
    {
        title: "Sala / Sala de jantar 1 de 5",
        yesNot: false,
        saltNot: 0,
        fields: [

            { ico: "APARADOR", title: "Aparador", value: 0, size: 0.33 },
            { ico: "BANQUETA-PUFF", title: "Banqueta - Puff", value: 0, size: 0.11 },
            { ico: "BAR-GRANDE", title: "Bar grande", value: 0, size: 1.1 },
            { ico: "BAR-PEQUENO", title: "Bar pequeno", value: 0, size: 0.66 },
            { ico: "BAU", title: "Baú", value: 0, size: 0.44 },
            { ico: "", title: "Buffet", value: 0, size: 1.1 },
        ]
    },
    {
        title: "Sala / Sala de jantar 2 de 5",
        yesNot: false,
        saltNot: 0,
        fields: [

            { ico: "CADEIRA-COM-BRACOS", title: "Cadeira com braços", size: 0.33, value: 0 },
            { ico: "CADEIRA-SIMPLES", title: "Cadeira simples", size: 0.22, value: 0 },
            { ico: "CONSOLE-DE-PAREDE", title: "Console de parede", size: 0.33, value: 0 },
            { ico: "CRISTALEIRA", title: "Cristaleira", size: 0.88, value: 0 },
            { ico: "ESCRIVANINHA-GRANDE", title: "Escrivaninha grande", size: 1.1, value: 0 },
            { ico: "ESCRIVANINHA-PEQUENA", title: "Escrivaninha pequena", size: 0.66, value: 0 },
        ]
    },
    {
        title: "Sala / Sala de jantar 3 de 5",
        yesNot: false,
        saltNot: 0,
        fields: [
            { ico: "ESTANTE-ALTA", title: "Estante alta", size: 0.66, value: 0 },
            { ico: "ESTANTE-BAIXA", title: "Estante baixa", size: 0.33, value: 0 },
            { ico: "MESA-DE-CENTRO", title: "Mesa de centro", size: 0.33, value: 0 },
            { ico: "MESA-CONSOLE", title: "Mesa console", size: 0.33, value: 0 },
            { ico: "MESA-DE-JANTAR", title: "Mesa de jantar", size: 0.88, value: 0 },
            { ico: "", title: "Piano armário", size: 6.6, value: 0 },
        ]
    },
    {
        title: "Sala / Sala de jantar 4 de 5",
        yesNot: false,
        saltNot: 0,
        fields: [
            { ico: "PIANO-DE-CAUDA", title: "Piano de cauda", size: 6.6, value: 0 },
            { ico: "POLTRONA-SIMPLES", title: "Poltrona simples", size: 0.55, value: 0 },
            { ico: "QUADROS", title: "Quadros", size: 0.11, value: 0 },
            { ico: "RACK", title: "Rack", size: 0.33, value: 0 },
            { ico: "SOFA-2-LUGARES", title: "Sofá 2 lugares", size: 1.1, value: 0 },
            { ico: "SOFA-3-LUGARES", title: "Sofá 3 lugares", size: 1.65, value: 0 },
        ]
    },
    {
        title: "Sala / Sala de jantar 5 de 5",
        yesNot: false,
        saltNot: 0,
        fields: [
            { ico: "SOFA-4-LUGARES", title: "Sofá 4 lugares", size: 2.2, value: 0 },
            { ico: "SOM", title: "Som/Vídeo", size: 0.33, value: 0 },
            { ico: "TV", title: "TV", size: 0.33, value: 0 },
        ]
    },
    {
        title: "Eu sei vou guardar algum item do meu quarto?",
        fields: [],
        yesNot: true,
        saltNot: 2
    },
    {
        title: "QUARTO / SUÍTE 1 de 2",
        yesNot: false,
        saltNot: 0,
        fields: [
            { ico: "ARCA", title: "Arca", size: 0.44, value: 0 },
            { ico: "ARMARIO-2-PORTAS", title: "Armário 2 portas desmontado", size: 1.1, value: 0 },
            { ico: "ARMARIO-3-PORTAS", title: "Armário 3 portas desmontado", size: 1.65, value: 0 },
            { ico: "BERCO-COM-COLCHAO", title: "Berço com colchão", size: 0.33, value: 0 },
            { ico: "CABIDEIRO", title: "Cabideiro", size: 0.33, value: 0 },
            { ico: "BELICHE", title: "Cama beliche com colchão", size: 2.2, value: 0 },
        ]
    },
    {
        title: "QUARTO / SUÍTE 2 de 2",
        yesNot: false,
        saltNot: 0,
        fields: [
            { ico: "CAMA-CASAL", title: "Cama casal com colchão", size: 1.43, value: 0 },
            { ico: "CAMA-SOLTEIRO", title: "Cama de solteiro com colchão", size: 1.1, value: 0 },
            { ico: "COMODA", title: "Cômoda", size: 0.44, value: 0 },
            { ico: "MESA-DE-CABECEIRA", title: "Mesa de cabeceira", size: 0.22, value: 0 },
            { ico: "PENTEADEIRA", title: "Penteadeira", size: 0.77, value: 0 },
            { ico: "QUADROS", title: "Quadros", size: 0.11, value: 0 },
        ]
    },
    {
        title: "Eu sei vou guardar algum item da minha cozinha?",
        fields: [],
        yesNot: true,
        saltNot: 3
    },
    {
        title: "Cozinha 1 de 3",
        yesNot: false,
        saltNot: 0,
        fields: [
            { ico: "ARMARIO-PANELEIRO", title: "Armário paneleiro", size: 1.1, value: 0 },
            { ico: "ARMARIO-DE-PAREDE-2-PORTAS", title: "Armário de parede pequeno com 2 portas", size: 0.22, value: 0 },
            { ico: "CADEIRA", title: "Cadeira", size: 0.66, value: 0 },
            { ico: "EXAUSTOR", title: "Exaustor", size: 0.11, value: 0 },
            { ico: "FREEZER", title: "Freezer", size: 0.88, value: 0 },
            { ico: "FOGAO-4-BOCAS", title: "Fogão (4 bocas)", size: 0.33, value: 0 },
        ]
    },
    {
        title: "Cozinha 2 de 3",
        yesNot: false,
        saltNot: 0,
        fields: [
            { ico: "FOGAO-6-BOCAS", title: "Fogão (6 bocas)", size: 0.55, value: 0 },
            { ico: "FORNINHO", title: "Forninho", size: 0.11, value: 0 },
            { ico: "GELADEIRA", title: "Geladeira", size: 0.99, value: 0 },
            { ico: "MAQUINA-LAVA-LOUCA", title: "Máquina de lavar louça", size: 0.55, value: 0 },
            { ico: "MAQUINA-DE-LAVAR-SECAR", title: "Máquina de lavar/secar", size: 0.55, value: 0 },
            { ico: "MESA-DE-COZINHA", title: "Mesa de cozinha", size: 0.33, value: 0 },
        ]
    },
    {
        title: "Cozinha 3 de 3",
        yesNot: false,
        saltNot: 0,
        fields: [
            { ico: "MICROONDAS", title: "Micro-ondas", size: 0.11, value: 0 },
        ]
    },
    {
        title: "Eu sei vou guardar algum item do meu home office?",
        fields: [],
        yesNot: true,
        saltNot: 2
    },
    {
        title: "Home Office 1 de 2",
        yesNot: false,
        saltNot: 0,
        fields: [
            { ico: "ARMARIO-2-PORTAS", title: "Armário (alto de 2 portas)", size: 1.1, value: 0 },
            { ico: "ARQUIVO", title: "Arquivo", size: 0.55, value: 0 },
            { ico: "", title: "Balcão", size: 0.55, value: 0 },
            { ico: "CADEIRA", title: "Cadeira", size: 0.22, value: 0 },
            { ico: "COFRE", title: "Cofre", size: 0.55, value: 0 },
            { ico: "ESCRIVANINHA", title: "Escrivaninha", size: 0.44, value: 0 },
        ]
    },
    {
        title: "Home Office 2 de 2",
        yesNot: false,
        saltNot: 0,
        fields: [
            { ico: "ESTANTE-DE-ACO", title: "Estante de aço", size: 1.1, value: 0 },
            { ico: "FAX", title: "Fax", size: 0.11, value: 0 },
            { ico: "IMPRESSORA", title: "Impressora/Xerox", size: 0.33, value: 0 },
            { ico: "MESA", title: "Mesa", size: 0.55, value: 0 },
            { ico: "MICROCOMPUTADOR", title: "Microcomputador", size: 0.33, value: 0 },
            { ico: "POLTRONA", title: "Poltrona", size: 0.55, value: 0 },
        ]
    },
    {
        title: "Eu sei vou guardar algum item diversos?",
        fields: [],
        yesNot: true,
        saltNot: 2
    },
    {
        title: "DIVERSOS 1 de 2",
        yesNot: false,
        saltNot: 0,
        fields: [
            { ico: "ARCONDICIONADO", title: "Ar condicionado", size: 0.33, value: 0 },
            { ico: "AQUECEDOR", title: "Aquecedor", size: 0.22, value: 0 },
            { ico: "BANCADA", title: "Arquivo", size: 0.56, value: 0 },
            { ico: "BICICLETA", title: "Bancada", size: 0.33, value: 0 },
            { ico: "BICICLETA", title: "Bicicleta", size: 0.33, value: 0 },
            { ico: "CAIXA", title: "Caixa", size: 0.22, value: 0 },
        ]
    },
    {
        title: "DIVERSOS 2 de 2",
        yesNot: false,
        saltNot: 0,
        fields: [
            { ico: "CAIXA-PARA-CRISTAIS", title: "Caixa para cristais", size: 0.11, value: 0 },
            { ico: "CAIXA-PLASTICA", title: "Caixa plástica", size: 0.22, value: 0 },
            { ico: "MAQUINA-DE-COSTURA", title: "Máquina de costura", size: 0.44, value: 0 },
        ]
    }
];

const options = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    body: null
}

const error_default = {
    status_code: 500,
    next: false,
    message: 'Não foi possível acessar api'
}

function obj_to_url(obj, next_level = null) {
    var query = [];
    for (var key in obj) {
        switch (typeof obj[key]) {
            case 'string':
            case 'number':
                if (next_level != null) {
                    query.push(`${next_level}[${key}]=${obj[key]}&`)
                } else {
                    query.push(`${key}=${obj[key]}&`)
                }
                break
            case 'object':
                query.push(obj_to_url(obj[key], key))
        }
    }
    return query.join('');
}

async function post(path, data) {
    let base = pathApi
    options.body = obj_to_url(data)
    try {
        let res = await fetch(`${base}${path}`, options)
        let status_code = res.status
        return await res.json()
    } catch (error) {
        return error_default
    }
}

async function get(path, data = {}) {
    let base = pathApi
    try {
        let res = await fetch(`${base}${path}?${obj_to_url(data)}`)
        let res_in_json = await res.json()
        return res_in_json
    } catch (error) {
        return error_default
    }
}

Vue.createApp({
    data() {
        return {
            step: 1,
            totalStep: 0,
            total: 0,
            onNext: true,
            cubagem: [],
            form: {
                size: null,
                nome: null,
                sobreNome: null,
                telefone: null,
                email: null,
                locacao: null,
                pulou: null,
                exato: null,
                guard: null,
                contato: null,
            },
            steps: [
                {
                    title: "Eu preciso de um box no tamanho:",
                    fields: [],
                    radioName: "tamanho",
                    radioValue: null,
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
                        { type: "text", title: "Telefone", value: null },
                    ],
                    radioName: null,
                    radio: []
                },
                {
                    title: "Metragens",
                    fields: [],
                    radioName: "metragem",
                    radioValue: null,
                    radio: []
                },
                {
                    title: "Tempo de Locação",
                    fields: [],
                    radioName: "tempo",
                    radioValue: null,
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
                    radioValue: null,
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
                    radioValue: null,
                    radio: [
                        { label: "Eu vou guardar itens da minha empresa", value: "3" },
                        { label: "Eu vou guardar itens da minha casa", value: "6" },
                    ]
                },
                {
                    title: "Eu vou guardar itens da sala",
                    fields: [
                        { type: 'number', title: "Aparador", value: 0, size: 0.33 },
                        { type: 'number', title: "Banqueta - Puff", value: 0, size: 0.11 },
                        { type: 'number', title: "Bar grande", value: 0, size: 1.1 },
                        { type: 'number', title: "Bar pequeno", value: 0, size: 0.66 },
                        { type: 'number', title: "Baú", value: 0, size: 0.44 },
                        { type: 'number', title: "Buffet", value: 0, size: 1.1 },
                        { type: 'number', title: "Cadeira com braços", size: 0.33, value: 0 },
                        { type: 'number', title: "Cadeira simples", size: 0.22, value: 0 },
                        { type: 'number', title: "Console de parede", size: 0.33, value: 0 },
                        { type: 'number', title: "Cristaleira", size: 0.88, value: 0 },
                        { type: 'number', title: "Escrivaninha grande", size: 1.1, value: 0 },
                        { type: 'number', title: "Escrivaninha pequena", size: 0.66, value: 0 },
                        { type: 'number', title: "Estante alta", size: 0.66, value: 0 },
                        { type: 'number', title: "Estante baixa", size: 0.33, value: 0 },
                        { type: 'number', title: "Mesa de centro", size: 0.33, value: 0 },
                        { type: 'number', title: "Mesa console", size: 0.33, value: 0 },
                        { type: 'number', title: "Mesa de jantar", size: 0.88, value: 0 },
                        { type: 'number', title: "Piano armário", size: 6.6, value: 0 },
                        { type: 'number', title: "Piano de cauda", size: 6.6, value: 0 },
                        { type: 'number', title: "Poltrona simples", size: 0.55, value: 0 },
                        { type: 'number', title: "Quadros", size: 0.11, value: 0 },
                        { type: 'number', title: "Rack", size: 0.33, value: 0 },
                        { type: 'number', title: "Sofá 2 lugares", size: 1.1, value: 0 },
                        { type: 'number', title: "Sofá 3 lugares", size: 1.65, value: 0 },
                        { type: 'number', title: "Sofá 4 lugares", size: 2.2, value: 0 },
                        { type: 'number', title: "Som/Vídeo", size: 0.33, value: 0 },
                        { type: 'number', title: "TV", size: 0.33, value: 0 },
                    ],
                    radioName: "",
                    radio: []
                },
                {
                    title: "Eu vou guardar itens da cozinha",
                    fields: [
                        { type: "number", title: "Armário paneleiro", size: 1.1, value: 0 },
                        { type: "number", title: "Armário de parede pequeno com 2 portas", size: 0.22, value: 0 },
                        { type: "number", title: "Cadeira", size: 0.66, value: 0 },
                        { type: "number", title: "Exaustor", size: 0.11, value: 0 },
                        { type: "number", title: "Freezer", size: 0.88, value: 0 },
                        { type: "number", title: "Fogão (4 bocas)", size: 0.33, value: 0 },
                        { type: "number", title: "Fogão (6 bocas)", size: 0.55, value: 0 },
                        { type: "number", title: "Forninho", size: 0.11, value: 0 },
                        { type: "number", title: "Geladeira", size: 0.99, value: 0 },
                        { type: "number", title: "Máquina de lavar louça", size: 0.55, value: 0 },
                        { type: "number", title: "Máquina de lavar/secar", size: 0.55, value: 0 },
                        { type: "number", title: "Mesa de cozinha", size: 0.33, value: 0 },
                        { type: "number", title: "Micro-ondas", size: 0.11, value: 0 },
                    ],
                    radioName: "",
                    radio: []
                },
                {
                    title: "Eu vou guardar itens do quarto",
                    fields: [
                        { type: "number", title: "Arca", size: 0.44, value: 0 },
                        { type: "number", title: "Armário 2 portas desmontado", size: 1.1, value: 0 },
                        { type: "number", title: "Armário 3 portas desmontado", size: 1.65, value: 0 },
                        { type: "number", title: "Berço com colchão", size: 0.33, value: 0 },
                        { type: "number", title: "Cabideiro", size: 0.33, value: 0 },
                        { type: "number", title: "Cama beliche com colchão", size: 2.2, value: 0 },
                        { type: "number", title: "Cama casal com colchão", size: 1.43, value: 0 },
                        { type: "number", title: "Cama de solteiro com colchão", size: 1.1, value: 0 },
                        { type: "number", title: "Cômoda", size: 0.44, value: 0 },
                        { type: "number", title: "Mesa de cabeceira", size: 0.22, value: 0 },
                        { type: "number", title: "Penteadeira", size: 0.77, value: 0 },
                        { type: "number", title: "Quadros", size: 0.11, value: 0 },
                    ],
                    radioName: "",
                    radio: []
                },
                {
                    title: "Eu gostaria que entrem em contato por",
                    fields: [],
                    radioName: "",
                    radioValue: null,
                    radio: [
                        { label: "WhatsApp", value: "6" },
                        { label: "Email", value: "6" },
                        { label: "Telefone", value: "6" },
                    ]
                },
                {
                    title: "Orçamento solicitado com sucesso",
                    fields: [],
                    radioName: "",
                    radioValue: null,
                    radio: []
                },

            ]
        }
    },
    methods: {
        setData( key, value ) {
            this.form[key] = value
        },
        key() {
            return 1;
        },
        back() {
            this.step--
            this.save()
            this.handleMetros()
            this.$refs.jsBtnPrev.click()
        },
        finish() {
            post( '', this.form )
            alert('Dados enviado com sucesso!')
            localStorage.removeItem('form_temp')
            this.step = 1
        },
        next() {
            this.step++
            this.onNext = true
            this.save()
            console.clear()
            console.log( this.data)
            this.$refs.jsBtnNext.click()
            // this.handleMetros()
        },
        isNext() {
            this.onNext = false
        },
        handleMetros() {
            let tipo = this.steps[0].value
            this.steps[2].radio = []
            for (let i = 1; i < 32; i++) {
                this.steps[2].radio.push({ label: `${i}m²`, value: i })
            }

            switch (tipo) {
                case 'PP':
                    this.steps[2].radio = Array.from(this.steps[2].radio).filter(e => e.value > 0 && e.value < 4)
                    break;
                case 'P':
                    this.steps[2].radio = Array.from(this.steps[2].radio).filter(e => e.value > 3 && e.value < 7)
                    break;
                case 'M':
                    this.steps[2].radio = Array.from(this.steps[2].radio).filter(e => e.value > 6 && e.value < 10)
                    break;
                case 'G':
                    this.steps[2].radio = Array.from(this.steps[2].radio).filter(e => e.value > 9 && e.value < 32)
                    break;
                case 'SOB':
                    this.steps[2].radio = Array.from(this.steps[2].radio).filter(e => e.value > 0 && e.value < 0)
                    break;

            }
        },
        save() {
            localStorage.setItem('form_temp', JSON.stringify({
                step: this.step,
                form: this.form,
                total: this.total,
            }))

        },
        forcerSubmit() {
            this.$refs.info.click()
            console.log(this.$refs.info)
        },
        handleCalc() {
            let total = this.steps.reduce((acc, e) => {
                acc = [...acc, ...e.fields.map(f => f.quant * f.size)]
                return acc
            }, [])
            this.total = total.reduce((acc, v) => acc + v, 0)
        }
    },
    mounted() {
        let form_temp = JSON.parse(localStorage.getItem('form_temp'))
        if (form_temp) {
            this.step = form_temp.step
            this.form = { ...this.form, ...form_temp.form }
            // Object.keys(form_temp).forEach(key => {
            //     this[key] = form_temp[key]
            // })
        }
        this.cubagem = calculadora        
        const totalStep = calculadora.length + 6
        this.totalStep = Array(totalStep).fill(Math.random()) 

        
        this.handleMetros()
    }
}).mount('#js-app')