<?php

function leonis_setup() {
    // This theme uses wp_nav_menu() in two locations.
	register_nav_menus( array(
		'top'    => __( 'Top Menu', 'Leonis Partners' ),
		'social' => __( 'Social Links Menu', 'Leonis Partners' ),
    ) );
}
add_action( 'after_setup_theme', 'leonis_setup' );

function leonis_all_scriptsandstyles() {
    //Load JS and CSS files in here
      wp_register_script ('navigation', get_stylesheet_directory_uri() . '/js/navigation.js', array( 'jquery' ),'1',true);
    
      wp_register_style ('scssfile', get_stylesheet_directory_uri() . '/scss/style.scss', array(),'2','all');
    
      wp_enqueue_script('navigation');
      wp_enqueue_style( 'scssfile');
    
    }
    add_action( 'wp_enqueue_scripts', 'leonis_all_scriptsandstyles' );

// Creates Movie Reviews Custom Post Type
function transactions_init() {
    $args = array(
      'label' => 'Transactions',
        'public' => true,
        'show_ui' => true,
        'capability_type' => 'post',
        'hierarchical' => false,
        'rewrite' => array('slug' => 'transactions'),
        'query_var' => true,
        'menu_icon' => 'dashicons-chart-line',
        'supports' => array(
            'title',
            'thumbnail',
            'page-attributes',)
        );
    register_post_type( 'transactions', $args );
}
add_action( 'init', 'transactions_init' );

add_theme_support( 'post-thumbnails' );

// [transactions]
function transactions_output() {
    $args = array(
        'post_type' => 'transactions'
    ); // these arguments are telling WP_Query to only look for the post types called transactions
    $query = new WP_Query( $args );

    while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
        <h2><?php the_title(); ?></h2>
        the_post_thumbnail();
    endwhile;
}
add_shortcode( 'transactions', 'transactions_output()');