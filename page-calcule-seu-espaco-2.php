<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Metro Max</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="./cdn/css/style.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"
        defer></script>
    <script src="https://unpkg.com/vue@3"></script>
</head>

<body class="steps-bg">
    <div id="js-app">
        <div class="container-fluid">
            <div class="container">
                <div class="d-flex justify-content-between">
                    <div> <img :src="logo" alt="logo" class="step-logo"> </div>
                    <div>
                        <div>
                            <span class="valor"> CUBAGEM <b>0,00</b> M³ </span>
                            <span class="valor"> ÁREA DO BOX <b>0,00</b> M² </span>
                        </div>
                        <span> <span class="obs" >Obs: O cálculo acima é apenas uma estimativa.</span></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="container">
                <div class="steps">
                    <div class="step-item ">
                        <i class="bi bi-fingerprint"></i>
                        <span> dados pessoais </span>
                    </div>
                    <div class="step-item">
                        <i class="bi bi-easel"></i>
                        <span> SALA / SALA DE JANTAR </span>
                    </div>
                    <div class="step-item">
                        <i class="bi bi-lamp"></i>
                        <span> QUARTO / SUÍTE </span>
                    </div>
                    <div class="step-item">
                        <i class="bi bi-cup-straw"></i>
                        <span> COZINHA </span>
                    </div>
                    <div class="step-item step-item-active">
                        <i class="bi bi-laptop"></i>
                        <span> HOME OFFICE </span>
                    </div>
                    <div class="step-item">
                        <i class="bi bi-lightbulb"></i>
                        <span> DIVERSOS </span>
                    </div>
                    <div class="step-item">
                        <i class="bi bi-box"></i>
                        <span> OUTROS OBJETOS </span>
                    </div>
                    <div class="step-item">
                        <i class="bi bi-mailbox"></i>
                        <span>Finalizar</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="container" v-show="step===1">
                <for>
                    <div class="mb-3">
                        <label for="" class="form-label">Nome*</label>
                        <input type="text" class="form-control" v-model="nome" required>
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Email*</label>
                        <input type="email" class="form-control" v-model="email" required>
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Telefone*</label>
                        <input type="email" class="form-control" v-model="telefone" required>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="submit" class="btn btn-primary" v-on:click="next">Proximo</button>
                    </div>

                </for>
            </div>
            <div class="container" v-show="step===2">
                <form action="javascript:void(0)">
                    <div class="row">
                        <div class="mb-3 col-4" v-for="inp in home_office">
                            <label for="" class="form-label">{{inp.title}}</label>
                            <input type="number" class="form-control" v-model="inp.quantity" required>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="submit" class="btn btn btn-light" v-on:click="back">Voltar</button>
                        <button type="submit" class="btn btn-primary" v-on:click="next">Proximo</button>
                    </div>
                </form>
            </div>
            <div class="container" v-show="step===3">
                <form action="javascript:void(0)">
                    <div class="row">
                        <div class="mb-3 col-4" v-for="inp in home_office">
                            <label for="" class="form-label">{{inp.title}}</label>
                            <input type="number" class="form-control" v-model="inp.quantity" required>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end">                        
                        <button type="submit" class="btn btn btn-light" v-on:click="back">Voltar</button>
                        <button type="submit" class="btn btn-primary" v-on:click="next">Proximo</button>
                    </div>
                </form>
            </div>
            <div class="container" v-show="step===4">
                <h1 class="text-center">CTA</h1>
                <form action="javascript:void(0)">
                    <div class="d-flex justify-content-end">
                        <button type="submit" class="btn btn btn-light" v-on:click="back">Voltar</button>
                        <button type="submit" class="btn btn-primary" v-on:click="finish">CONFIRMAR</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script>
        Vue.createApp({
            data() {
                return {
                    logo: "https://www.metromax.net.br/wp-content/themes/metromax2/img/logo.png",
                    step: 1,
                    nome: null,
                    email: null,
                    telefone: null,
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
    </script>
</body>

</html>