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
    <div id="js-app">
        <div class="container-fluid">
            <div class="container">
                <div class="d-flex justify-content-between">
                    <div> <img :src="logo" alt="logo" class="step-logo"> </div>
                    <div>
                        <div>
                            <span class="valor"> CUBAGEM <b>{{total}}</b> M³ </span>
                            <span class="valor"> ÁREA DO BOX <b>{{total}}</b> M² </span>
                        </div>
                        <span> <span class="obs">Obs: O cálculo acima é apenas uma estimativa.</span></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="container">
                <div class="steps">
                    <div :class="{ 'step-item': 1, 'step-item-active': step==1 ? 1 : 0}">
                        <i class="bi bi-fingerprint"></i>
                        <span> dados pessoais </span>
                    </div>
                    <div :class="{ 'step-item': 1, 'step-item-active': step==2 ? 1 : 0}">
                        <i class="bi bi-easel"></i>
                        <span> SALA / SALA DE JANTAR </span>
                    </div>
                    <div :class="{ 'step-item': 1, 'step-item-active': step==3 ? 1 : 0}">
                        <i class="bi bi-lamp"></i>
                        <span> QUARTO / SUÍTE </span>
                    </div>
                    <div :class="{ 'step-item': 1, 'step-item-active': step==4 ? 1 : 0}">
                        <i class="bi bi-cup-straw"></i>
                        <span> COZINHA </span>
                    </div>
                    <div class="step-item ">
                        <i class="bi bi-laptop"></i>
                        <span> HOME OFFICE </span>
                    </div>
                    <div :class="{ 'step-item': 1, 'step-item-active': step==5 ? 1 : 0}">
                        <i class="bi bi-lightbulb"></i>
                        <span> DIVERSOS </span>
                    </div>
                    <div :class="{ 'step-item': 1, 'step-item-active': step==6 ? 1 : 0}">
                        <i class="bi bi-box"></i>
                        <span> OUTROS OBJETOS </span>
                    </div>
                    <div :class="{ 'step-item': 1, 'step-item-active': step==7 ? 1 : 0}">
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
            <div v-for="(etapa, i) in steps">
                <div class="container" v-show="step===(i+1) && (i+1)!=7 && (i+1)!=1  ">
                    <form action="javascript:void(0)">
                        <div class="row">
                            <div class="mb-3 col-4" v-for="inp in etapa.fields">
                                <label for="" class="form-label">{{inp.title}}</label>
                                <input type="number" class="form-control" v-model="inp.quant" @input="handleCalc" required>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn btn btn-light" v-on:click="back">Voltar</button>
                            <button type="submit" class="btn btn-primary" v-on:click="next">Proximo</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="container" v-show="step===7">
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

</body>

</html>