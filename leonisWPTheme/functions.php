<?php

function leonis_setup() {
    // This theme uses wp_nav_menu() in two locations.
	register_nav_menus( array(
		'top'    => __( 'Top Menu', 'Leonis Partners' ),
		'social' => __( 'Social Links Menu', 'Leonis Partners' ),
    ) );

    // Register Custom Navigation Walker
    require_once 'wp-bootstrap-navwalker.php';
}
add_action( 'after_setup_theme', 'leonis_setup' );