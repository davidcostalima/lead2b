<?php

$uri = get_template_directory_uri();

if (!empty($_REQUEST['email'])) {

    @$to = $_REQUEST['email'];
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
    @$itens = $_REQUEST['itens'];
    $itens = implode("\r\n", explode(',', $itens));

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
    {$contato} \r\n      
    Lista de itens a serem armazenados: \r\n 
    {$itens} \r\n  
    ";

    
    
    @$id_post =  $_REQUEST['id_post'];
    if( $id_post ) {
        $post = get_post(  $id_post );
        $post->post_content = $message;
        wp_update_post( $post );
        echo json_encode([
            "next" => true,
            "message" => "Atualizado com sucesso",
            "ID" => $id_post
        ]);
        die;
    }

    @mail($email, $subject, $message);
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
    echo json_encode([
        "next" => true,
        "message" => "Registrado com sucesso",
        "ID" =>$post_id
    ]);
    die;
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
                <div class="col-6 col-md-9 logo"></div>
                <div class="col-6 col-md-3">
                    <div class=" d-md-inline">
                        <button class="btn btn-danger btn-raio">
                            <i class="bi bi-whatsapp"></i>
                            <b>(12) 3455-6789</b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="js-app">
        <div class="container-fluid">
            <div class="container">
                <div id="carouselExampleCaptions" x-class="carousel slide" x-data-bs-ride="carousel"
                    x-data-bs-interval="false">
                    <div class="carousel-inner">
                        <div :class="{'carousel-item': true, active: step == 1}">
                            <div class="container-box">
                                <div>
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
                                                <small>Mobilia e eletro eletrônico de 1 casa de aproximadamente 200m,
                                                    com 4
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
                        </div>
                        <div :class="{'carousel-item': true, active: step == 2}">
                            <div class="container-box">
                                <div>
                                    <h1 class="title">
                                        Para onde enviaremos o orçamento instantâneo:
                                    </h1>
                                    <form action="javascript:void(0)" @submit="next(1)">
                                        <div class="inputs_lead">
                                            <div>
                                                <label for="">Primeiro nome</label>
                                                <input class="w-100" type="text" v-model="form.nome" required>
                                            </div>
                                            <div>
                                                <label for="">Sobrenome</label>
                                                <input class="w-100" type="text" v-model="form.sobreNome" required>
                                            </div>
                                            <div>
                                                <label for="">WhatsApp (com DDD)</label>
                                                <input class="w-100" type="text" v-model="form.telefone" required>
                                            </div>
                                            <div>
                                                <label for="">Email</label>
                                                <input class="w-100" type="email" v-model="form.email" required>
                                            </div>
                                        </div>
                                        <div class="box-btn-next">
                                            <input type="submit" ref="info" class="voltar avancar" value="Avançar">
                                        </div>
                                    </form>
                                    <div @click="back('zero')" class="voltar">Voltar</div>
                                </div>
                            </div>

                        </div>
                        <div :class="{'carousel-item': true, active: step == 3}">
                            <div class="container-box">
                                <div>
                                    <h1 class="title">Eu preciso guarda por:</h1>
                                    <p class="text-center">
                                        Tempo aproximado, não precisa ser exato
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
                                    <div @click="back('zero')" class="voltar">Voltar</div>
                                </div>
                            </div>
                        </div>
                        <div :class="{'carousel-item': true, active: step == 4}">
                            <div class="row">
                                <div class="col-12 col-md-8">
                                    <div class="container-box">
                                        <div>
                                            <h1 class="title_2 title_scape text-center">
                                                Olá, {{form.nome}}. O seu orçamento fica entre:
                                            </h1>
                                            <div v-if="form.size=='PP'">
                                                <h2 class="subtitle  text-center">R$37,00 a R$70,00 por mês </h2>
                                            </div>
                                            <div v-if="form.size=='P'">
                                                <h2 class="subtitle  text-center">R$137,00 a R$170,00 por mês </h2>
                                            </div>
                                            <div v-if="form.size=='M'">
                                                <h2 class="subtitle  text-center">R$237,00 a R$270,00 por mês </h2>
                                            </div>
                                            <div v-if="form.size=='G'">
                                                <h2 class="subtitle  text-center">R$337,00 a R$370,00 por mês </h2>
                                            </div>
                                            <small class="d-block text-center title_2 title_scape" style="font-size: 12px !important;">
                                                Você sabia que 80% das pessoas escolhem um tamanho de box maior do que elas precisam?
                                            </small>
                                            <hr>
                                            <strong class="d-block text-center subtitle title_scape">Para entender
                                                melhor:</strong>
                                            <div class="grid_btn_ico">
                                                <span @click="step=totalStep.length;form.pulou='sim'"
                                                    :class="{ 'text-center': true, call_item_salt:true, active: form.pulou=='sim'}">
                                                    <img :src="base+'/cdn/ico/atendimento.svg'" class="ico_btn">
                                                    Quero falar com uma pessoa agora mesmo
                                                </span>
                                                <span @click="next();form.pulou='nao'"
                                                    :class="{ 'text-center': true, call_item_salt:true, active: form.pulou=='nao'}">
                                                    <img :src="base+'/cdn/ico/cotacao.svg'" class="ico_btn">
                                                    <b>
                                                        Ter uma cotação personalizada
                                                    </b> <br>
                                                    <small>(Menos de 2 minutos)</small>
                                                </span>
                                            </div>
                                            <br />
                                            <div @click="back('zero')" class="voltar">Voltar</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4">
                                    <div class="container-box" style="display: block;">
                                        {{dataPrint()}}
                                        <hr>
                                        <ul>
                                            <li>{{form.nome}} {{form.sobreNome}} </li>
                                            <li>{{form.telefone}} </li>
                                            <li>{{form.email}} </li>
                                        </ul>
                                        <hr>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div :class="{'carousel-item': true, active: step == 5}">
                            <div class="container-box">
                                <div style="width: 100%;">
                                    <h1 class="title">Eu vou guardar objetos:</h1>
                                    <div class="text-center w-guard">
                                        <span :class="{call_item:true, active: form.guard=='empresa'}"
                                            @click="next(18); form.guard='empresa'">
                                            <i class="bi bi-building"></i>
                                            Da empresa
                                        </span>
                                        <span :class="{call_item:true, active: form.guard=='casa'}"
                                            @click="next(); form.guard='casa'">
                                            <i class="bi bi-house-door"></i>
                                            Da casa
                                        </span>
                                        <span :class="{call_item:true, active: form.guard=='ambos'}"
                                            @click="next(); form.guard='ambos'">
                                            <i class="bi bi-arrow-left-right"></i>
                                            De ambos
                                        </span>
                                    </div>
                                    <div @click="back('zero')" class="voltar">Voltar</div>
                                </div>
                            </div>
                        </div>
                        <div v-for="(c, i) in cubagem" :class="{'carousel-item': true, active: step == (i+6)}">
                            <div class="row">
                                <div class="col-12 col-md-8">
                                    <div class="container-box">
                                        <div>
                                            <h1 class="title fs-4">
                                                {{c.title}}
                                            </h1>
                                            <div v-show="!c.yesNot" class="cubo-grid">
                                                <div v-for="campo in c.fields" class="cubo">
                                                    <span
                                                        :style="{'background-image': 'url('+base+'/cdn/icons/'+campo.ico+'.svg)'}">
                                                        {{campo.title}}
                                                    </span>
                                                    <input type="number" @input="calcularM3" v-model="campo.value">
                                                </div>
                                            </div>
                                            <div v-show="c.yesNot">
                                                <div class="text-center">
                                                    <span :class="{link_confirm:true, active: form.exato=='nao'}"
                                                        @click="next(c.saltNot); jump[c.tipo]=(c.saltNot-1)*-1">
                                                        <i class="bi bi-hand-thumbs-down display-4"></i> <br />
                                                        Não
                                                    </span>
                                                    <span :class="{link_confirm:true, active: form.exato=='sim'}"
                                                        @click="next(1);jump[c.tipo]=0">
                                                        <i class="bi bi-hand-thumbs-up display-4"></i> <br />
                                                        Sim
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="box-btn-next" v-show="!c.yesNot">
                                                <input @click="next(c.saltNot)" type="submit" ref="info"
                                                    class="voltar avancar" value="Avançar">
                                            </div>
                                            <div @click="back(c.tipo)" class="voltar">Voltar</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4">
                                    <div class="container-box " style="display: block;">
                                        <h1 class="title fs-6">
                                            Metragem:
                                            {{metros}}m3
                                        </h1>
                                        <div class="bg-danger text-white rounded-2 py-2 box-red">
                                            <ul v-for="item in cubagem">
                                                <li v-for="c in item.fields" v-show="c.value" style="font-size: 11px;">
                                                    {{c.title}} - {{c.value}}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div :class="{'carousel-item': true, active: step == totalStep.length}">
                            <div class="container-box">
                                <div>

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
                                    <div v-show="form.pulou == 'nao'">
                                        <h1 class="title_2 title_scape text-center">
                                            Olá, {{form.nome}}. O seu orçamento ficou aproximadamente:
                                        </h1>
                                        <h2 class="subtitle text-center">
                                            Metragem necessária: {{metros}}m³ <br>
                                            O box para você é de {{metrosReal(metros)}}m²  e o valor é R${{valorReal(metros)}} por mês. 
                                        </h2>
                                    </div>
                                    <div @click="form.pulou == 'sim' ? step=4 : back()" class="voltar">Voltar</div>
                                </div>
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
                <span v-for="(s, i) in totalStep" :key="s" :class="{ative: step == (i+1) }" @click="step=i+1"></span>
            </div>
        </div>
    </div>

</body>

</html>