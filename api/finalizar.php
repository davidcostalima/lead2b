<?php

function add_lead(WP_REST_Request $request)
{
    $payload = array(
        'post_type'    => 'lead',
        'post_title'   => $request['name'],
        'post_content' => json_encode($request),
        'post_status'  => 'publish',
        'post_author'  => 1,
        'meta_input'   => [],
    );

    wp_insert_post($payload, true);

    $response = array(
        'next'    => true,
        'message' => "Pedido salvo com sucesso"
    );

    return rest_ensure_response($response);
}

add_action(
    "rest_api_init",
    function () {
        register_rest_route(
            "api",
            "/add-lead",
            [
                "methods"  => WP_REST_SERVER::CREATABLE,
                "callback" => "add_lead"
            ]
        );
    }
);
