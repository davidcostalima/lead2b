const pathApi = "http://dev.metromax.net.br/api-lead/"

console.log(window.location.href)



const calculadora = [
    {
        title: "Eu vou guardar itens da Sala?",
        fields: [],
        yesNot: true,
        saltNot: 6,
        tipo: "sala",
    },
    {
        title: "Sala / Sala de jantar 1 de 5",
        yesNot: false,
        saltNot: 0,
        tipo: "sala",
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
        tipo: "sala",
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
        tipo: "sala",
        fields: [
            { ico: "ESTANTE-ALTA", title: "Estante alta", size: 0.66, value: 0 },
            { ico: "ESTANTE-BAIXA", title: "Estante baixa", size: 0.33, value: 0 },
            { ico: "MESA-DE-CENTRO", title: "Mesa de centro", size: 0.33, value: 0 },
            { ico: "MESA-CONSOLE", title: "Mesa console", size: 0.33, value: 0 },
            { ico: "MESA-DE-JANTAR", title: "Mesa de jantar", size: 0.88, value: 0 },
            { ico: "PIANO", title: "Piano armário", size: 6.6, value: 0 },
        ]
    },
    {
        title: "Sala / Sala de jantar 4 de 5",
        yesNot: false,
        saltNot: 0,
        tipo: "sala",
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
        tipo: "sala",
        fields: [
            { ico: "SOFA-4-LUGARES", title: "Sofá 4 lugares", size: 2.2, value: 0 },
            { ico: "SOM", title: "Som/Vídeo", size: 0.33, value: 0 },
            { ico: "TV", title: "TV", size: 0.33, value: 0 },
        ]
    },
    {
        title: "Eu vou guardar itens do quarto?",
        fields: [],
        yesNot: true,
        saltNot: 3,
        tipo: "quarto",
    },
    {
        title: "QUARTO / SUÍTE 1 de 2",
        yesNot: false,
        saltNot: 0,
        tipo: "quarto",
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
        tipo: "quarto",
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
        title: "Eu vou guardar itens da cozinha?",
        fields: [],
        yesNot: true,
        saltNot: 4,
        tipo: "cozinha",
    },
    {
        title: "Cozinha 1 de 3",
        yesNot: false,
        saltNot: 0,
        tipo: "cozinha",
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
        tipo: "cozinha",
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
        tipo: "cozinha",
        fields: [
            { ico: "MICROONDAS", title: "Micro-ondas", size: 0.11, value: 0 },
        ]
    },
    {
        title: "Eu vou guardar itens diversos?",
        fields: [],
        yesNot: true,
        saltNot: 3,
        tipo: "diversos",
    },
    {
        title: "DIVERSOS 1 de 2",
        yesNot: false,
        saltNot: 0,
        tipo: "diversos",
        fields: [
            { ico: "ARCONDICIONADO", title: "Ar condicionado", size: 0.33, value: 0 },
            { ico: "AQUECEDOR", title: "Aquecedor", size: 0.22, value: 0 },
            { ico: "ARQUIVO", title: "Arquivo", size: 0.56, value: 0 },
            { ico: "BANCADA", title: "Bancada", size: 0.33, value: 0 },
            { ico: "BICICLETA", title: "Bicicleta", size: 0.33, value: 0 },
            { ico: "CAIXA", title: "Caixa", size: 0.22, value: 0 },
        ]
    },
    {
        title: "DIVERSOS 2 de 2",
        yesNot: false,
        saltNot: 0,
        tipo: "diversos",
        fields: [
            { ico: "CAIXA-PARA-CRISTAIS", title: "Caixa para cristais", size: 0.11, value: 0 },
            { ico: "CAIXA-PLASTICA", title: "Caixa plástica", size: 0.22, value: 0 },
            { ico: "MAQUINA-DE-COSTURA", title: "Máquina de costura", size: 0.44, value: 0 },
        ]
    },
    {
        title: "Eu vou guardar itens do home office?",
        fields: [],
        yesNot: true,
        saltNot: 3,
        tipo: "home",
    },
    {
        title: "Home Office 1 de 2",
        yesNot: false,
        saltNot: 0,
        tipo: "home",
        fields: [
            { ico: "ARMARIO-2-PORTAS", title: "Armário (alto de 2 portas)", size: 1.1, value: 0 },
            { ico: "ARQUIVO", title: "Arquivo", size: 0.55, value: 0 },
            { ico: "BALCAO", title: "Balcão", size: 0.55, value: 0 },
            { ico: "CADEIRA", title: "Cadeira", size: 0.22, value: 0 },
            { ico: "COFRE", title: "Cofre", size: 0.55, value: 0 },
            { ico: "ESCRIVANINHA", title: "Escrivaninha", size: 0.44, value: 0 },
        ]
    },
    {
        title: "Home Office 2 de 2",
        yesNot: false,
        saltNot: 0,
        tipo: "home",
        fields: [
            { ico: "ESTANTE-DE-ACO", title: "Estante de aço", size: 1.1, value: 0 },
            { ico: "FAX", title: "Fax", size: 0.11, value: 0 },
            { ico: "IMPRESSORA", title: "Impressora/Xerox", size: 0.33, value: 0 },
            { ico: "MESA", title: "Mesa", size: 0.55, value: 0 },
            { ico: "MICROCOMPUTADOR", title: "Microcomputador", size: 0.33, value: 0 },
            { ico: "POLTRONA", title: "Poltrona", size: 0.55, value: 0 },
        ]
    },
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

function getParams(name) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(name)
}

async function post(path, data, isSendBlue = false) {
    let base = pathApi
    if( isSendBlue ) {
        options.headers = {}
        options.headers.accept = "application/json"
        options.headers["api-key"] = getParams("api_key")
        options.headers["content-type"] = "application/json"
    }
    options.body = obj_to_url(data)
    if(isSendBlue) {
        options.body = JSON.stringify(data)
        base = ""
    }
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
            metros: 0,
            action: "google.com",
            base: 'http://dev.metromax.net.br/wp-content/themes/metromax2',
            content: '',
            jump: {
                home: 0,
                diversos: 0,
                cozinha: 0,
                quarto: 0,
                sala: 0,
                zero: 0
            },
            form: {
                id_post: null,
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
                itens: null
            },
            tablePrice: [
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
            ],
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
        setData(key, value) {
            this.form[key] = value
        },
        key() {
            return 1;
        },
        back(tipo = "zero") {

            this.step--
            this.save()
            this.handleMetros()
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
            post('', this.form)
            alert('Dados enviado com sucesso!')
            localStorage.removeItem('form_temp')
            this.step = 1
        },
        async next(salt = 0, step = 0) {

            if (step > 17) {
                await this.sendBlue()
                window.location.href = `//${this.action}`
            }

            if (this.step <= this.totalStep.length) {
                if (salt) {
                    this.step += salt
                } else {
                    this.step++
                }
            }
            this.onNext = true
            this.save()
            this.$refs.jsBtnNext.click()
            let res = await post('', this.form)
            this.form.id_post = res?.ID || null

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
                cubagem: this.cubagem,
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
            let list = { ...this.tablePrice.find(i => i.metros <= metros) }
            let valor = list?.price || 0
            return valor.toLocaleString('pt-br', { minimumFractionDigits: 2 })
        },
        metrosReal(metros) {
            let list = { ...this.tablePrice.find(i => i.metros <= metros) }
            return list?.metros || 0
        },
        whats() {
            window.location.href = "https://api.whatsapp.com/send?phone=5521971524026"
        },
        getParams(name) {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            return urlParams.get(name)
        },
        async sendBlue() {

            // await post("https://api.sendinblue.com/v3/smtp/email", {
            //     "sender": {
            //         "name": "Davi",
            //         "email": "contato@metromax.net.br"
            //     },
            //     "to": [
            //         {
            //             "email": this.form.email,
            //             "name":  this.form.name
            //         }
            //     ],
            //     "subject": 'Lorem Ipsum',
            //     "htmlContent": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            // }, true)

            await post("https://api.sendinblue.com/v3/smtp/email", {
                "sender": {
                    "name": "Davi",
                    "email": "contato@metromax.net.br"
                },
                "to": [
                    {
                        "email": "david@oicaribe.com.br",
                        "name":  "Dav"
                    }
                ],
                "subject": 'Lorem Ipsum',
                "htmlContent": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

            }, true)
            
            await post("https://api.sendinblue.com/v3/smtp/email", {
                "sender": {
                    "name": "Davi",
                    "email": "contato@metromax.net.br"
                },
                "to": [
                    {
                        "email": "br.rafael@outlook.com",
                        "name":  "Bruno"
                    }
                ],
                "subject": 'Lorem Ipsum',
                "htmlContent": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }, true)
        }

    },
    mounted() {
        

        this.action = this.getParams("action")
        let form_temp = JSON.parse(localStorage.getItem('form_temp'))
        this.cubagem = calculadora
        if (form_temp) {
            // this.step = form_temp.step
            // this.form = { ...this.form, ...form_temp.form }
            // this.cubagem = form_temp.cubagem
            // Object.keys(form_temp).forEach(key => {
            //     this[key] = form_temp[key]
            // })
        }
        const totalStep = calculadora.length + 6
        this.totalStep = Array(totalStep).fill(Math.random())
        this.calcularM3()

        if (window.location.host.indexOf('5500') > 1) {
            this.base = 'http://127.0.0.1:5500'
        }

        this.handleMetros()
    }
}).mount('#js-app')