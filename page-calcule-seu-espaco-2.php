<?php

$uri = get_template_directory_uri();

if (!empty($_REQUEST['email'])) {

    $to = $_REQUEST['email'];
    $subject = "Email - Site";
    $message = "";
    foreach ($_REQUEST as $key => $value) {
        $message .= "{$key}:{$value} \r\n";
    }

    @$size = $_REQUEST['size'];
    @$nome = $_REQUEST['nome'];
    @$sobreNome = $_REQUEST['sobreNome'];
    @$telefone = $_REQUEST['telefone'];
    @$email = $_REQUEST['email'];
    @$locacao = $_REQUEST['locacao'];
    @$pulou = $_REQUEST['pulou'];
    @$exato = $_REQUEST['exato'];
    @$guard = $_REQUEST['guard'];
    @$contato = $_REQUEST['contato'];

    $message = "
    Eu preciso de um box no tamanho: \r\n 
    {$size} \r\n 
    Para onde enviaremos o orçamento instantâneo: \r\n 
    nome: {$nome} \r\n 
    sobreNome: {$sobreNome} \r\n 
    telefone: {$telefone} \r\n 
    email: {$email} \r\n 
    Eu sei exatamente o que eu quero guardar: \r\n 
    {$exato} \r\n 
    O que quero guardar: \r\n 
    {$locacao} \r\n 
    Eu gostaria que entrem em contato por: \r\n 
    {$contato} \r\n  ";

    @mail('br.rafael@outlook.com', $subject, $message);
    @mail('david@oicaribe.com.br', $subject, $message);

    $post_id = wp_insert_post(array(
        'post_type' => 'lead',
        'post_title' => $_REQUEST['email'],
        'post_content' => $message,
        'post_status' => 'publish',
        'comment_status' => 'closed',
        'ping_status' => 'closed',
    ));

    if ($post_id) {
        add_post_meta($post_id, '_brc_lead', json_encode($_REQUEST));
    }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Metro Max</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="<?= $uri ?>/cdn/css/style.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous" defer></script>
    <script src="https://unpkg.com/vue@3"></script>
    <script src="<?= $uri ?>/cdn/js/main.js" debug_backtrace></script>
</head>

<body class="steps-bg">
    <div class="rodape"></div>
    <div class="container-fluid header">
        <div class="container">
            <div class="row">
                <div class="col-5 col-md-2 logo"></div>
                <div class="col-1 col-md-5">
                    <span class="header_iten d-none d-md-inline">Lorem ipsum <b> * </b></span>
                    <span class="header_iten d-none d-md-inline">Lorem ipsum <b> * </b></span>
                    <span class="header_iten d-none d-md-inline">Lorem ipsum <b> * </b></span>
                </div>
                <div class="col-5 col-md-3">
                    <span class="tel">
                        <i class="bi bi-whatsapp"></i>
                        <b>(12) 3455-6789</b>
                    </span>
                </div>
                <div class="col-1 col-md-2">
                    <div class="d-none d-md-inline">
                        <button class="btn btn-danger">Lorem ipsum</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="js-app">
        <div class="container-fluid">
            <div class="container">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel"
                    data-bs-interval="false">
                    <div class="carousel-inner">
                        <div :class="{'carousel-item': true, active: step == 1}">
                            <div class="container-box">
                                <h1 class="title">Eu preciso de um box no tamanho:</h1>
                                <div class="sizes_box">
                                    <div :class="{size_item: true, active: form.size=='PP'}"
                                        @click="next(); form.size='PP'">
                                        <div>
                                            <strong>PP</strong>
                                            <small>5 malas grandes ou 8 caixas médias</small>
                                        </div>
                                        <span>1 a 3m</span>
                                    </div>
                                    <div :class="{size_item: true, active: form.size=='P'}"
                                        @click="next(); form.size='P'">
                                        <div>
                                            <strong>P</strong>
                                            <small>Mobilia de um quarto</small>
                                        </div>
                                        <span>4 a 6m</span>
                                    </div>
                                    <div :class="{size_item: true, active: form.size=='M'}"
                                        @click="next(); form.size='M'">
                                        <div>
                                            <strong>M</strong>
                                            <small>Mobilia de 1 apartamento, de aproximadamente 70m, com 2
                                                quartos</small>
                                        </div>
                                        <span>7 a 9m</span>
                                    </div>
                                    <div :class="{size_item: true, active: form.size=='G'}"
                                        @click="next();form.size='G'">
                                        <div>
                                            <strong>G</strong>
                                            <small>Mobilia e eletro eletrônico de 1 casa de aproximadamente 200m, com 4
                                                quartos</small>
                                        </div>
                                        <span>10 a 31m</span>
                                    </div>
                                    <div :class="{size_item: true, active: form.size=='S'}"
                                        @click="next(); form.size='S'">
                                        <div>
                                            <strong>
                                                Sob <br />
                                                Medida
                                            </strong>
                                            <small></small>
                                        </div>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div :class="{'carousel-item': true, active: step == 2}">
                            <div class="container-box">
                                <h1 class="title">
                                    Para onde enviaremos o orçamento instantâneo:
                                </h1>
                                <form action="javascript:void(0)" @submit="next">
                                    <div class="inputs_lead">
                                        <input type="text" v-model="form.nome" placeholder="preencheu o nome" required>
                                        <input type="text" v-model="form.sobreNome" placeholder="preencheu o sobrenome"
                                            required>
                                        <input type="text" v-model="form.telefone" placeholder="Telefone" required>
                                        <input type="email" v-model="form.email" placeholder="Email" required>
                                    </div>
                                    <div class="box-btn-next">
                                        <input type="submit" ref="info" class="voltar avancar" value="Avançar">
                                    </div>
                                </form>
                                <div @click="back" class="voltar">Voltar</div>
                            </div>

                        </div>
                        <div :class="{'carousel-item': true, active: step == 3}">
                            <div class="container-box">
                                <h1 class="title">Eu preciso guarda por:</h1>
                                <p class="text-center">
                                    Tempo Aproximado não Precisa ser exato
                                </p>
                                <div class="tempo_box">
                                    <span @click="next(); form.locacao='1 a 3 meses'"
                                        :class="{tempo_item: true, active: form.locacao=='1 a 3 meses'}">
                                        1 a 3 meses
                                    </span>
                                    <span @click="next(); form.locacao='4 a 6 meses'"
                                        :class="{tempo_item: true, active: form.locacao=='4 a 6 meses'}">
                                        4 a 6 meses
                                    </span>
                                    <span @click="next(); form.locacao='7 a 12 meses'"
                                        :class="{tempo_item: true, active: form.locacao=='7 a 12 meses'}">
                                        7 a 12 meses
                                    </span>
                                    <span @click="next(); form.locacao='Não sei'"
                                        :class="{tempo_item: true, active: form.locacao=='Não sei'}">
                                        Não sei
                                    </span>

                                </div>
                                <div @click="back" class="voltar">Voltar</div>
                            </div>
                        </div>
                        <div :class="{'carousel-item': true, active: step == 4}">
                            <div class="row">
                                <div class="col-12 col-md-8">
                                    <div class="container-box">

                                        <h1 class="title_2 title_scape">Olá, {{form.nome}} {{form.sobreNome}}. o Seu
                                            orçamento é
                                        </h1>
                                        <div v-if="form.size=='PP'">
                                            <h2 class="subtitle title_scape">R$37,00 a R$70,00 por mês </h2>
                                        </div>
                                        <div v-if="form.size=='P'">
                                            <h2 class="subtitle title_scape">R$37,00 a R$70,00 por mês </h2>
                                        </div>
                                        <div v-if="form.size=='M'">
                                            <h2 class="subtitle title_scape">R$37,00 a R$70,00 por mês </h2>
                                        </div>
                                        <div v-if="form.size=='G'">
                                            <h2 class="subtitle title_scape">R$37,00 a R$70,00 por mês </h2>
                                        </div>
                                        <small>( você sabia que 80% das pessoas escolhem um box maior... )</small><br />
                                        <strong>Para ter um orçamento mais preciso:</strong>
                                        <div class="grid_btn_ico">

                                            <span @click="step=7;form.pulou='sim'"
                                                :class="{ 'text-center': true, call_item:true, active: form.pulou=='sim'}">
                                                <img src="./cdn/ico/atendimento.svg" class="ico_btn">
                                                Quero falar com uma pessoal agora mesmo
                                            </span>
                                            <span @click="next();form.pulou='nao'"
                                                :class="{ 'text-center': true, call_item:true, active: form.pulou=='nao'}">
                                                <img src="./cdn/ico/cotacao.svg" class="ico_btn">
                                                <b>
                                                    Ter uma cotação personalizada
                                                </b> <br>
                                                <small>(25 perguntas, 3 minutos)</small>
                                            </span>
                                        </div>
                                        <br />
                                        <div @click="back" class="voltar">Voltar</div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4">
                                    <div class="container-box">
                                        {{form.nome}} {{form.sobreNome}} <br />
                                        {{form.telefone}} <br />
                                        {{form.email}} <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div :class="{'carousel-item': true, active: step == 5}">
                            <div class="container-box">
                                <div class="text-center w-guard">
                                    <span :class="{call_item:true, active: form.guard=='empresa'}"
                                        @click="next(); form.guard='empresa'">
                                        <i class="bi bi-building"></i>
                                        empresa
                                    </span>
                                    <span :class="{call_item:true, active: form.guard=='casa'}"
                                        @click="next(); form.guard='casa'">
                                        <i class="bi bi-house-door"></i>
                                        casa
                                    </span>
                                    <span :class="{call_item:true, active: form.guard=='ambos'}"
                                        @click="next(); form.guard='ambos'">
                                        <i class="bi bi-arrow-left-right"></i>
                                        De ambos
                                    </span>
                                </div>
                                <div @click="back" class="voltar">Voltar</div>
                            </div>
                        </div>
                        <div v-for="(c, i) in cubagem" :class="{'carousel-item': true, active: step == (i+6)}">
                            <div class="row">
                                <div class="col-12 col-md-9">
                                    <div class="container-box">
                                        <h1 class="title">
                                            {{c.title}}
                                        </h1>
                                        <div v-show="!c.yesNot" class="cubo-grid">
                                            <div v-for="campo in c.fields" class="cubo">
                                                <span :style="{'background-image': 'url(./cdn/icons/'+campo.ico+'.svg)'}">
                                                    {{campo.title}}
                                                </span>
                                                <input type="number" v-model="campo.value">
                                            </div>
                                        </div>
                                        <div v-show="c.yesNot">
                                            <div class="text-center">
                                                <span :class="{link_confirm:true, active: form.exato=='nao'}"
                                                    @click="next">
                                                    <i class="bi bi-hand-thumbs-down display-4"></i> <br />
                                                    Não
                                                </span>
                                                <span :class="{link_confirm:true, active: form.exato=='sim'}"
                                                    @click="next">
                                                    <i class="bi bi-hand-thumbs-up display-4"></i> <br />
                                                    Sim
                                                </span>
                                            </div>
                                        </div>
                                        <div class="box-btn-next">
                                            <input @click="next(c.saltNot)" type="submit" ref="info"
                                                class="voltar avancar" value="Avançar">
                                        </div>
                                        <div @click="back" class="voltar">Voltar</div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3">
                                    <div class="container-box"></div>
                                </div>
                            </div>
                        </div>
                        <div :class="{'carousel-item': true, active: step == totalStep}">
                            <div class="container-box">
                                <h1 class="title">
                                    Eu gostaria que entrem em contato por:
                                </h1>
                                <div class="call_action_grid">
                                    <span class="call_action" @click="form.contato='whatsapp'; finish()">
                                        <i class="bi bi-whatsapp"></i>
                                        <span>WhatsApp</span>
                                    </span>
                                    <span class="call_action" @click="form.contato='email'; finish()">
                                        <i class="bi bi-envelope-fill"></i>
                                        <span>Email</span>
                                    </span>
                                    <span class="call_action" @click="form.contato='telefone'; finish()">
                                        <i class="bi bi-telephone-fill"></i>
                                        <span>Telefone</span>
                                    </span>
                                </div>
                                <div @click="back" class="voltar">Voltar</div>
                            </div>
                        </div>
                    </div>
                    <button hidden ref="jsBtnPrev" class="carousel-control-prev" type="button"
                        data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button hidden ref="jsBtnNext" class="carousel-control-next" type="button"
                        data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="steps">
                <span v-for="(s, i) in totalStep" :key="s" :class="{ative: step == (i+1) }"></span>
            </div>
        </div>
    </div>

</body>


</html>