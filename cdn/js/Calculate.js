class Calculate_by_Steps {
    calc(){
        return [
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
        ] 
    }
    
}
