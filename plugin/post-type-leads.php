<?php
/*
Plugin Name: Leads
Description: Lista de Leads
Author: Bruno Vieira
*/

add_action('init', 'brc_leads');

function brc_leads()
{
    $labels = array(
        'name'               => __('Leads'),
        'singular_name'      => __('Lead'),
        'add_new'            => __('Add New Lead'),
        'add_new_item'       => __('Add New Lead'),
        'edit_item'          => __('Edit Lead'),
        'new_item'           => __('New Lead'),
        'all_items'          => __('All Leads'),
        'view_item'          => __('View Lead'),
        'search_items'       => __('Search Leads'),
        'featured_image'     => 'Gravatar',
        'set_featured_image' => 'Add Gravatar'
    );
    $args = array(
        'labels'            => $labels,
        'description'       => 'Aqui esta a lista de todos os leads',
        'public'            => true,
        'menu_position'     => 5,
        'supports'          => array('title', 'editor', 'thumbnail', 'excerpt', 'comments', 'custom-fields'),
        'has_archive'       => true,
        'show_in_admin_bar' => true,
        'show_in_nav_menus' => true,
        'has_archive'       => true,
        'query_var'         => 'lead'
    );
    register_post_type('lead', $args);
}
