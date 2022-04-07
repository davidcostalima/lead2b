Vue.createApp({
    data() {
        return {
            logo: "https://www.metromax.net.br/wp-content/themes/metromax2/img/logo.png",
            nome: null,
            email: null,
            telefone: null,
            step: 1,
            steps: [
                {
                    ico: "bi-fingerprint",
                    title: "dados pessoais",
                    fields: []
                },
                {
                    ico: "bi-easel",
                    title: "Sala / Sala de jantar",
                    fields: [
                        { title: "Aparador", quant: 0, size: 0.33 },
                        { title: "Banqueta - Puff", quant: 0, size: 0.11 },
                        { title: "Bar grande", quant: 0, size: 1.1 },
                        { title: "Bar pequeno", quant: 0, size: 0.66 },
                        { title: "Baú", quant: 0, size: 0.44 },
                        { title: "Buffet", quant: 0, size: 1.1 },
                        { title: "Cadeira com braços", size: 0.33, quant: 0 },
                        { title: "Cadeira simples", size: 0.22, quant: 0 },
                        { title: "Console de parede", size: 0.33, quant: 0 },
                        { title: "Cristaleira", size: 0.88, quant: 0 },
                        { title: "Escrivaninha grande", size: 1.1, quant: 0 },
                        { title: "Escrivaninha pequena", size: 0.66, quant: 0 },
                        { title: "Estante alta", size: 0.66, quant: 0 },
                        { title: "Estante baixa", size: 0.33, quant: 0 },
                        { title: "Mesa de centro", size: 0.33, quant: 0 },
                        { title: "Mesa console", size: 0.33, quant: 0 },
                        { title: "Mesa de jantar", size: 0.88, quant: 0 },
                        { title: "Piano armário", size: 6.6, quant: 0 },
                        { title: "Piano de cauda", size: 6.6, quant: 0 },
                        { title: "Poltrona simples", size: 0.55, quant: 0 },
                        { title: "Quadros", size: 0.11, quant: 0 },
                        { title: "Rack", size: 0.33, quant: 0 },
                        { title: "Sofá 2 lugares", size: 1.1, quant: 0 },
                        { title: "Sofá 3 lugares", size: 1.65, quant: 0 },
                        { title: "Sofá 4 lugares", size: 2.2, quant: 0 },
                        { title: "Som/Vídeo", size: 0.33, quant: 0 },
                        { title: "TV", size: 0.33, quant: 0 },
                    ]
                },
                {
                    ico: "bi-lamp",
                    title: "QUARTO / SUÍTE",
                    fields: [
                        { title: "Arca", size: 0.44, quant: 0 },
                        { title: "Armário 2 portas desmontado", size: 1.1, quant: 0 },
                        { title: "Armário 3 portas desmontado", size: 1.65, quant: 0 },
                        { title: "Berço com colchão", size: 0.33, quant: 0 },
                        { title: "Cabideiro", size: 0.33, quant: 0 },
                        { title: "Cama beliche com colchão", size: 2.2, quant: 0 },
                        { title: "Cama casal com colchão", size: 1.43, quant: 0 },
                        { title: "Cama de solteiro com colchão", size: 1.1, quant: 0 },
                        { title: "Cômoda", size: 0.44, quant: 0 },
                        { title: "Mesa de cabeceira", size: 0.22, quant: 0 },
                        { title: "Penteadeira", size: 0.77, quant: 0 },
                        { title: "Quadros", size: 0.11, quant: 0 },
                    ]
                },
                {
                    ico: "bi-cup-straw",
                    title: "Cozinha",
                    fields: [
                        { title: "Armário paneleiro", size: 1.1, quant: 0 },
                        { title: "Armário de parede pequeno com 2 portas", size: 0.22, quant: 0 },
                        { title: "Cadeira", size: 0.66, quant: 0 },
                        { title: "Exaustor", size: 0.11, quant: 0 },
                        { title: "Freezer", size: 0.88, quant: 0 },
                        { title: "Fogão (4 bocas)", size: 0.33, quant: 0 },
                        { title: "Fogão (6 bocas)", size: 0.55, quant: 0 },
                        { title: "Forninho", size: 0.11, quant: 0 },
                        { title: "Geladeira", size: 0.99, quant: 0 },
                        { title: "Máquina de lavar louça", size: 0.55, quant: 0 },
                        { title: "Máquina de lavar/secar", size: 0.55, quant: 0 },
                        { title: "Mesa de cozinha", size: 0.33, quant: 0 },
                        { title: "Micro-ondas", size: 0.11, quant: 0 },
                    ]
                },
                {
                    ico: "step-item-active",
                    title: "Home Office",
                    fields: [
                        { title: "Armário (alto de 2 portas)", size: 1.1, quant: 0 },
                        { title: "Arquivo", size: 0.55, quant: 0 },
                        { title: "Balcão", size: 0.55, quant: 0 },
                        { title: "Cadeira", size: 0.22, quant: 0 },
                        { title: "Cofre", size: 0.55, quant: 0 },
                        { title: "Escrivaninha", size: 0.44, quant: 0 },
                        { title: "Estante de aço", size: 1.1, quant: 0 },
                        { title: "Fax", size: 0.11, quant: 0 },
                        { title: "Impressora/Xerox", size: 0.33, quant: 0 },
                        { title: "Mesa", size: 0.55, quant: 0 },
                        { title: "Microcomputador", size: 0.33, quant: 0 },
                        { title: "Poltrona", size: 0.55, quant: 0 },
                    ]
                },
                {
                    ico: "bi-lightbulb",
                    title: "DIVERSOS",
                    fields: [
                        { title: "Ar condicionado", size: 0.33, quant: 0 },
                        { title: "Aquecedor", size: 0.22, quant: 0 },
                        { title: "Arquivo", size: 0.56, quant: 0 },
                        { title: "Bancada", size: 0.33, quant: 0 },
                        { title: "Bicicleta", size: 0.33, quant: 0 },
                        { title: "Caixa", size: 0.22, quant: 0 },
                        { title: "Caixa para cristais", size: 0.11, quant: 0 },
                        { title: "Caixa plástica", size: 0.22, quant: 0 },
                        { title: "Máquina de costura", size: 0.44, quant: 0 },
                    ]
                },
                {
                    ico: "bi-box",
                    title: "OUTROS OBJETOS",
                    fields: [
                        { title: "", quant: 0, size: 0 },
                    ]
                },
                {
                    ico: "bi-mailbox",
                    title: "Finalizar",
                    fields: []
                },
            
            ],
            home_office: [{
                title: "Armário",
                id: this.key(),
                quantity: 0
            },
            {
                title: "Arquivo",
                id: this.key(),
                quantity: 0
            },
            {
                title: "Balcão",
                id: this.key(),
                quantity: 0
            },
            {
                title: "Cadeira",
                id: this.key(),
                quantity: 0
            },
            {
                title: "Cofre",
                id: this.key(),
                quantity: 0
            },
            {
                title: "Escrivaninha",
                id: this.key(),
                quantity: 0
            },
            {
                title: "Estante de aço",
                id: this.key(),
                quantity: 0
            },
            {
                title: "Fax",
                id: this.key(),
                quantity: 0
            },
            {
                title: "Impressora/Xerox",
                id: this.key(),
                quantity: 0
            },
            {
                title: "Mesa",
                id: this.key(),
                quantity: 0
            },
            {
                title: "Microcomputador",
                id: this.key(),
                quantity: 0
            },
            {
                title: "Poltrona",
                id: this.key(),
                quantity: 0
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
        },
        finish() {
            localStorage.removeItem('form_temp')
            this.step = 1
        },
        next() {
            this.step++
            localStorage.setItem('form_temp', JSON.stringify({
                step: this.step,
                home_office: this.home_office,
                nome: this.nome,
                email: this.email,
                telefone: this.telefone
            }))
        }
    },
    mounted() {
        console.log('ok')
        let form_temp = JSON.parse(localStorage.getItem('form_temp'))
        console.log(form_temp)
        if (form_temp) {
            Object.keys(form_temp).forEach(key => {
                this[key] = form_temp[key]
            })
        }
    }
}).mount('#js-app')