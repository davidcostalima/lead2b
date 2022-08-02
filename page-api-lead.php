<?php

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
    if ($id_post) {
        $post = get_post($id_post);
        $post->post_content = $message;
        wp_update_post($post);
        echo json_encode([
            "next" => true,
            "message" => "Atualizado com sucesso",
            "ID" => $id_post
        ]);
        die;
    }
    $post_id = wp_insert_post(array(
        'post_type' => 'lead',
        'post_title' => $_REQUEST['email'],
        'post_content' => $message,
        'post_status' => 'draft',
        'comment_status' => 'closed',
        'ping_status' => 'closed',
    ));
    if ($post_id) {
        add_post_meta($post_id, '_brc_lead', json_encode($_REQUEST));
    }
    echo json_encode([
        "next" => true,
        "message" => "Registrado com sucesso",
        "ID" => $post_id
    ]);
    die;
}
