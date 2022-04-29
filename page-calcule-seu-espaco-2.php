<?php

$uri = get_template_directory_uri();

if (!empty($_REQUEST['email'])) {

    $to = $_REQUEST['email'];
    $subject = "Email - Site";
    $message = "";
    foreach ($_REQUEST as $key => $value) {
        $message .= "{$key}:{$value} \r\n";
    }

    @mail($to, $subject, $message);

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
                    <div class="size_item" @click="next">
                        <div>
                            <strong>PP</strong>
                            <small>5 malas grandes ou 8 caixas médias</small>
                        </div>
                        <span>1 a 3m</span>
                    </div>
                    <div class="size_item" @click="next">
                        <div>
                            <strong>P</strong>
                            <small>Mobilia de um quarto</small>
                        </div>
                        <span>4 a 6m</span>
                    </div>
                    <div class="size_item" @click="next">
                        <div>
                            <strong>M</strong>
                            <small>Mobilia de 1 apartamento, de aproximadamente 70m, com 2 quartos</small>
                        </div>
                        <span>7 a 9m</span>
                    </div>
                    <div class="size_item" @click="next">
                        <div>
                            <strong>G</strong>
                            <small>Mobilia e eletro eletrônico de 1 casa de aproximadamente 200m, com 4 quartos</small>
                        </div>
                        <span>10 a 31m</span>
                    </div>
                    <div class="size_item" @click="next">
                        <div>
                            <strong>
                                Sob <br/>
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
            <form action="javascript:void(0)" @submit="next" >
                <div class="inputs_lead">
                    <input type="text" @blur="forcerSubmit" placeholder="Nome" required>
                    <input type="text" @blur="forcerSubmit" placeholder="Sobrenome" required>
                    <input type="text" @blur="forcerSubmit" placeholder="Telefone" required>
                    <input type="email" @blur="forcerSubmit" placeholder="Email" required>
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
                <span @click="next" class="tempo_item">1 mês</span>
                <span @click="next" class="tempo_item"> 2 a 3 meses</span>
                <span @click="next" class="tempo_item">4 a 6 meses</span>
                <span @click="next" class="tempo_item">7 a 12 meses</span>
                <span @click="next" class="tempo_item">mais de 1 ano</span>
            </div>
            <div @click="back" class="voltar">Voltar</div>
        </div>
        <div class="container" v-show="step==4">
            <div class="row">
                <div class="col-12 col-md-8">
                    <div class="container-box">
                        <h1 class="title_2">Olá, João. o Seu orçamento é</h1>
                        <h2 class="subtitle">R$00,00 a R$00,00 por mês </h2>
                        <small>( você sabia que 80% das pessoas escolhem um box maior... )</small><br />
                        <strong>Para ter um orçamento mais preciso:</strong>
                        <span @click="next" class="call_item"> 
                            Quero falar com uma pessoal agora mesmo
                        </span> 
                        <span @click="next" class="call_item"> 
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
                        Bruno Ap <br/>
                        (00) 0 0000-0000 <br/>
                        br.rafael@outlook.com <br/>
                    </div>
                </div>
            </div>
           
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