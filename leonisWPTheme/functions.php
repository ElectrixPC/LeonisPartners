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

// Creates the transactions section in the wp editor
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
            'page-attributes',)
        );
    register_post_type( 'transactions', $args );
}
add_action( 'init', 'transactions_init' );


// [transactions] - main function for the transactions UI, points to the shortcode [transactions]
function transactions_output($atts) {
    $args = array('post_type' => 'transactions',
                  'posts_per_page' => 1000); // these arguments are telling WP_Query to only look for the post types called transactions
    $query = new WP_Query( $args );
    $output = "";
    $count = 0; //set up counter variable
    // loop through each transaction
    while ( $query->have_posts() ) : $query->the_post();
          // pull all of the data out of the meta in each transaction 
          // format it
          $title     = '<div class="trans-title"><h2>'     . get_post_meta(get_the_ID(), "wpcf-transaction-title",         true) . '</h2></div>';
          $firm1     = '<div class="trans-firm1"><h2>'     . get_post_meta(get_the_ID(), "wpcf-company-1-name",            true) . '</h2></div>';
          $firm2     = '<div class="trans-firm2"><h2>'     . get_post_meta(get_the_ID(), "wpcf-company-2-name",            true) . '</h2></div>';
          $type      = '<div class="trans-type"><p>'       . get_post_meta(get_the_ID(), "wpcf-transaction-type",          true) . '</p></div>';
          $size      = '<div class="trans-size"><p><b>Transaction Size:</b> ' . get_post_meta(get_the_ID(), "wpcf-transaction-size",          true) . '</p></div>'; 
          $press     = '<div class="trans-press"><p><b>Press Release:</b> '   . get_post_meta(get_the_ID(), "wpcf-transaction-press-release", true) . '</p></div>';
          $date      = '<div class="trans-date"><p><b>Date:</b> ' . get_post_meta(get_the_ID(), "wpcf-transaction-date",          true) . '</p></div>';
          $firm1_img = '<div class="trans-img1"><img src=' . get_post_meta(get_the_ID(), "wpcf-company-1",                 true) . '></div>';
          $firm2_img = '<div class="trans-img2"><img src=' . get_post_meta(get_the_ID(), "wpcf-company-2",                 true) . '></div>';
          if ($count>$atts["posts"]) {
            // if there are more than 10 posts hide them
            $trans = '<div class="transaction trans_hide">';
          }
          else
          {
            $trans = '<div class="transaction">';
          }
          $output .= $trans . '<div class="trans-expand">' . $firm1_img . $type . $firm2_img . $title . $firm1 . $firm2 . $size . $date . $press . '</div></div>';
          $count++;
    endwhile;
    
    return $output; 
}
add_shortcode( 'transactions', 'transactions_output');