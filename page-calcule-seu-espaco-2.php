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
<div>
        <img src="<?= $uri ?>/cdn/images/logo.png" alt="logo" class="step-logo">
    </div>
    <div id="js-app">
        <div class="container-fluid">
            <div class="container-box">
                <div v-for="(etapa, i) in steps">
                    <div v-show="step===(i+1)">
                        <h1 class="title">{{etapa.title}}</h1>
                        <form action="javascript:void(0)" @submit="next">
                            <div class="row mt-4">
                                <div class="mb-3 col-12" v-for="(inp, index) in etapa.fields" v-show="inp.type!='checkbox'">
                                    <label for="" class="form-label">{{inp.title}} </label>
                                    <input @input="isNext" :type="inp.type" class="form-control" v-model="inp.value" @input="handleCalc"
                                        required>
                                </div>
                                <div class="mb-3 col-4 " v-for="(inp, index) in etapa.radio" >
                                    <input @change="isNext"  :id="'check_'+etapa.radioName+'_'+index" type="radio" :name="etapa.radioName"
                                        v-model="inp.value" @input="handleCalc" class="quase-hidden" required>
                                    <label class="box-model" :for="'check_'+etapa.radioName+'_'+index" >
                                        <span class="text-center">
                                            {{inp.label}}
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div class="d-flex justify-content-end">
                                <button class="btn btn btn-link" @click="back"
                                    v-show="1!=(i+1)">Voltar</button>
                                <button type="submit" class="btn btn-success" click="next" :class="{next: onNext}">Proximo</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>

</html>