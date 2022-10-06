
const itens = [
    { ico: "APARADOR", title: "Aparador", cubico: 0.33 },
    { ico: "BANQUETA-PUFF", title: "Banqueta - Puff", cubico: 0.11 },
    { ico: "BAR-GRANDE", title: "Bar grande", cubico: 1.1 },
    { ico: "BAR-PEQUENO", title: "Bar pequeno", cubico: 0.66 },
    { ico: "BAU", title: "Baú", cubico: 0.44 },
    { ico: "BUFFET", title: "Buffet", cubico: 1.1 },
    { ico: "CADEIRA-COM-BRACOS", title: "Cadeira com braços", cubico: 0.33 },
    { ico: "CADEIRA-SIMPLES", title: "Cadeira simples", cubico: 0.22 },
    { ico: "CONSOLE-DE-PAREDE", title: "Console de parede", cubico: 0.33 },
    { ico: "CRISTALEIRA", title: "Cristaleira", cubico: 0.88 },
    { ico: "ESCRIVANINHA-GRANDE", title: "Escrivaninha grande", cubico: 1.1 },
    { ico: "ESCRIVANINHA-PEQUENA", title: "Escrivaninha pequena", cubico: 0.66 },
    { ico: "ESTANTE-ALTA", title: "Estante alta", cubico: 0.66 },
    { ico: "ESTANTE-BAIXA", title: "Estante baixa", cubico: 0.33 },
    { ico: "MESA-DE-CENTRO", title: "Mesa de centro", cubico: 0.33 },
    { ico: "MESA-CONSOLE", title: "Mesa console", cubico: 0.33 },
    { ico: "MESA-DE-JANTAR", title: "Mesa de jantar", cubico: 0.88 },
    { ico: "PIANO", title: "Piano armário", cubico: 6.6 },
    { ico: "PIANO-DE-CAUDA", title: "Piano de cauda", cubico: 6.6 },
    { ico: "POLTRONA-SIMPLES", title: "Poltrona simples", cubico: 0.55 },
    { ico: "QUADROS", title: "Quadros", cubico: 0.11 },
    { ico: "RACK", title: "Rack", cubico: 0.33 },
    { ico: "SOFA-2-LUGARES", title: "Sofá 2 lugares", cubico: 1.1 },
    { ico: "SOFA-3-LUGARES", title: "Sofá 3 lugares", cubico: 1.65 },
    { ico: "SOFA-4-LUGARES", title: "Sofá 4 lugares", cubico: 2.2 },
    { ico: "SOM", title: "Som/Vídeo", cubico: 0.33 },
    { ico: "TV", title: "TV", cubico: 0.33 },
    { ico: "ARCA", title: "Arca", cubico: 0.44 },
    { ico: "ARMARIO-2-PORTAS", title: "Armário 2 portas desmontado", cubico: 1.1 },
    { ico: "ARMARIO-3-PORTAS", title: "Armário 3 portas desmontado", cubico: 1.65 },
    { ico: "BERCO-COM-COLCHAO", title: "Berço com colchão", cubico: 0.33 },
    { ico: "CABIDEIRO", title: "Cabideiro", cubico: 0.33 },
    { ico: "BELICHE", title: "Cama beliche com colchão", cubico: 2.2 },
    { ico: "CAMA-CASAL", title: "Cama casal com colchão", cubico: 1.43 },
    { ico: "CAMA-SOLTEIRO", title: "Cama de solteiro com colchão", cubico: 1.1 },
    { ico: "COMODA", title: "Cômoda", cubico: 0.44 },
    { ico: "MESA-DE-CABECEIRA", title: "Mesa de cabeceira", cubico: 0.22 },
    { ico: "PENTEADEIRA", title: "Penteadeira", cubico: 0.77 },
    { ico: "QUADROS", title: "Quadros", cubico: 0.11 },
    { ico: "ARMARIO-PANELEIRO", title: "Armário paneleiro", cubico: 1.1 },
    { ico: "ARMARIO-DE-PAREDE-2-PORTAS", title: "Armário de parede pequeno com 2 portas", cubico: 0.22 },
    { ico: "CADEIRA", title: "Cadeira", cubico: 0.66 },
    { ico: "EXAUSTOR", title: "Exaustor", cubico: 0.11 },
    { ico: "FREEZER", title: "Freezer", cubico: 0.88 },
    { ico: "FOGAO-4-BOCAS", title: "Fogão (4 bocas)", cubico: 0.33 },
    { ico: "FOGAO-6-BOCAS", title: "Fogão (6 bocas)", cubico: 0.55 },
    { ico: "FORNINHO", title: "Forninho", cubico: 0.11 },
    { ico: "GELADEIRA", title: "Geladeira", cubico: 0.99 },
    { ico: "MAQUINA-LAVA-LOUCA", title: "Máquina de lavar louça", cubico: 0.55 },
    { ico: "MAQUINA-DE-LAVAR-SECAR", title: "Máquina de lavar/secar", cubico: 0.55 },
    { ico: "MESA-DE-COZINHA", title: "Mesa de cozinha", cubico: 0.33 },
    { ico: "MICROONDAS", title: "Micro-ondas", cubico: 0.11 },
    { ico: "ARCONDICIONADO", title: "Ar condicionado", cubico: 0.33 },
    { ico: "AQUECEDOR", title: "Aquecedor", cubico: 0.22 },
    { ico: "ARQUIVO", title: "Arquivo", cubico: 0.56 },
    { ico: "BANCADA", title: "Bancada", cubico: 0.33 },
    { ico: "BICICLETA", title: "Bicicleta", cubico: 0.33 },
    { ico: "CAIXA", title: "Caixa", cubico: 0.22 },
    { ico: "CAIXA-PARA-CRISTAIS", title: "Caixa para cristais", cubico: 0.11 },
    { ico: "CAIXA-PLASTICA", title: "Caixa plástica", cubico: 0.22 },
    { ico: "MAQUINA-DE-COSTURA", title: "Máquina de costura", cubico: 0.44 },
    { ico: "ARMARIO-2-PORTAS", title: "Armário (alto de 2 portas)", cubico: 1.1 },
    { ico: "ARQUIVO", title: "Arquivo", cubico: 0.55 },
    { ico: "BALCAO", title: "Balcão", cubico: 0.55 },
    { ico: "CADEIRA", title: "Cadeira", cubico: 0.22 },
    { ico: "COFRE", title: "Cofre", cubico: 0.55 },
    { ico: "ESCRIVANINHA", title: "Escrivaninha", cubico: 0.44 },
    { ico: "ESTANTE-DE-ACO", title: "Estante de aço", cubico: 1.1 },
    { ico: "FAX", title: "Fax", cubico: 0.11 },
    { ico: "IMPRESSORA", title: "Impressora/Xerox", cubico: 0.33 },
    { ico: "MESA", title: "Mesa", cubico: 0.55 },
    { ico: "MICROCOMPUTADOR", title: "Microcomputador", cubico: 0.33 },
    { ico: "POLTRONA", title: "Poltrona", cubico: 0.55 },
]

export default class Produtos {
    constructor() {
        this.produto = {}
    }
    set_product(ID) {
        this.produto = itens.find(i => i.ico == ID)
    }
    get_title() {
        return this.produto?.title || 'Não encontrado'
    }
    get_image() {
        return `./assets/icos/${this.produto?.ico || ''}.svg`
    }
    get_cubico() {
        return this.produto?.cubico || 0
    }
}