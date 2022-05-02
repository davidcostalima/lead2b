<?php

$uri = get_template_directory_uri();

if (!empty($_REQUEST['email'])) {

    $to = $_REQUEST['email'];
    $subject = "Email - Site";
    $message = "";
    foreach ($_REQUEST as $key => $value) {
        $message .= "{$key}:{$value} \r\n";
    }

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

    <div class="container-fluid header">
        <div class="container">
            <div class="row">
                <div class="col-5 col-md-2 logo"></div>
                <div class="col-1 col-md-6">
                    <span class="header_iten d-none d-md-inline">Lorem ipsum <b> * </b></span>
                    <span class="header_iten d-none d-md-inline">Lorem ipsum <b> * </b></span>
                    <span class="header_iten d-none d-md-inline">Lorem ipsum <b> * </b></span>
                </div>
                <div class="col-5 col-md-2">
                    <span class="tel">
                        <i class="bi bi-telephone-fill"></i>
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
    <div class="rodape"></div>
    <div id="js-app">
        <div class="container-fluid">
            <div class="container container-box" v-show="step==1">
                <h1 class="title">Eu preciso de um box no tamanho:</h1>
                <div class="sizes_box">
                    <div :class="{size_item: true, active: form.size=='PP'}" @click="next(); form.size='PP'">
                        <div>
                            <strong>PP</strong>
                            <small>5 malas grandes ou 8 caixas médias</small>
                        </div>
                        <span>1 a 3m</span>
                    </div>
                    <div :class="{size_item: true, active: form.size=='P'}" @click="next(); form.size='P'">
                        <div>
                            <strong>P</strong>
                            <small>Mobilia de um quarto</small>
                        </div>
                        <span>4 a 6m</span>
                    </div>
                    <div :class="{size_item: true, active: form.size=='M'}" @click="next(); form.size='M'">
                        <div>
                            <strong>M</strong>
                            <small>Mobilia de 1 apartamento, de aproximadamente 70m, com 2 quartos</small>
                        </div>
                        <span>7 a 9m</span>
                    </div>
                    <div :class="{size_item: true, active: form.size=='G'}" @click="next();form.size='G'">
                        <div>
                            <strong>G</strong>
                            <small>Mobilia e eletro eletrônico de 1 casa de aproximadamente 200m, com 4 quartos</small>
                        </div>
                        <span>10 a 31m</span>
                    </div>
                    <div :class="{size_item: true, active: form.size=='S'}" @click="next(); form.size='S'">
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
        <div class="container container-box" v-show="step==2">
            <h1 class="title">
                Para onde devemos Enviar o orçamento
                instantâneo com promoção imperdível:
            </h1>
            <form action="javascript:void(0)" @submit="next">
                <div class="inputs_lead">
                    <input type="text" @blur="forcerSubmit" v-model="form.nome" placeholder="Nome" required>
                    <input type="text" @blur="forcerSubmit" v-model="form.sobreNome" placeholder="Sobrenome" required>
                    <input type="text" @blur="forcerSubmit" v-model="form.telefone" placeholder="Telefone" required>
                    <input type="email" @blur="forcerSubmit" v-model="form.email" placeholder="Email" required>
                </div>
                <input type="submit" ref="info" hidden>
            </form>
            <div @click="back" class="voltar">Voltar</div>
        </div>
        <div class="container container-box" v-show="step==3">
            <h1 class="title">Tempo de Locação</h1>
            <p class="text-center">
                Tempo Aproximado não Precisa ser exato
            </p>
            <div class="tempo_box">
                <span @click="next(); form.locacao='1'" :class="{tempo_item: true, active: form.locacao=='1'}">1
                    mês</span>
                <span @click="next(); form.locacao='1 a 3'" :class="{tempo_item: true, active: form.locacao=='1 a 3'}">
                    2 a 3 meses</span>
                <span @click="next(); form.locacao='4 a 6'" :class="{tempo_item: true, active: form.locacao=='4 a 6'}">4
                    a 6 meses</span>
                <span @click="next(); form.locacao='7 a 12'"
                    :class="{tempo_item: true, active: form.locacao=='7 a 12'}">7 a 12 meses</span>
                <span @click="next(); form.locacao='+1'" :class="{tempo_item: true, active: form.locacao=='+1'}">mais de
                    1 ano</span>
            </div>
            <div @click="back" class="voltar">Voltar</div>
        </div>
        <div class="container" v-show="step==4">
            <div class="row">
                <div class="col-12 col-md-8">
                    <div class="container-box">
                        <h1 class="title_2">Olá, {{form.nome}} {{form.sobreNome}}. o Seu orçamento é</h1>
                        <div v-if="form.size=='PP'">
                            <h2 class="subtitle">R$37,00 a R$70,00 por mês </h2>
                        </div>
                        <div v-if="form.size=='P'">
                            <h2 class="subtitle">R$37,00 a R$70,00 por mês </h2>
                        </div>
                        <div v-if="form.size=='M'">
                            <h2 class="subtitle">R$37,00 a R$70,00 por mês </h2>
                        </div>
                        <div v-if="form.size=='G'">
                            <h2 class="subtitle">R$37,00 a R$70,00 por mês </h2>
                        </div>
                        <small>( você sabia que 80% das pessoas escolhem um box maior... )</small><br />
                        <strong>Para ter um orçamento mais preciso:</strong>
                        <span @click="step=7;form.pulou='sim'" :class="{call_item:true, active: form.pulou=='sim'}">
                            Quero falar com uma pessoal agora mesmo
                        </span>
                        <span @click="next();form.pulou='nao'" :class="{call_item:true, active: form.pulou=='nao'}">
                            <b>
                                Ter uma cotação personalizada
                            </b>
                            <small>(25 perguntas, 3 minutos)</small>
                        </span> <br />
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
        <div class="container  container-box" v-show="step==5">

            <h1 class="title">
                Eu sei exatamente o que eu quero guardar.
            </h1>
            <div class="text-center">
                <span :class="{link_confirm:true, active: form.exato=='sim'}"
                    @click="next();form.exato='sim'">Sim</span>
                <span :class="{link_confirm:true, active: form.exato=='nao'}"
                    @click="next();form.exato='nao'">Não</span>
            </div>
            <div @click="back" class="voltar">Voltar</div>
        </div>
        <div class="container  container-box" v-show="step==6">

            <div class="text-center w-guard">
                <span :class="{call_item:true, active: form.guard=='empresa'}" @click="next(); form.guard='empresa'">
                    Eu vou guardar itens da minha empresa
                </span>
                <span :class="{call_item:true, active: form.guard=='casa'}" @click="next(); form.guard='casa'">
                    Eu vou guardar itens da minha casa
                </span>
                <span :class="{call_item:true, active: form.guard=='ambos'}" @click="next(); form.guard='ambos'">
                    De ambos
                </span>
            </div>
            <div @click="back" class="voltar">Voltar</div>
        </div>
        <div class="container  container-box" v-show="step==7">
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
        <div class="container">
            <div class="steps">

                <span :class="{ative: step == 1 }"></span>
                <span :class="{ative: step == 2 }"></span>
                <span :class="{ative: step == 3 }"></span>
                <span :class="{ative: step == 4 }"></span>
                <span :class="{ative: step == 5 }"></span>
                <span :class="{ative: step == 6 }"></span>
                <span :class="{ative: step == 7 }"></span>


            </div>
        </div>
    </div>

</body>


</html>