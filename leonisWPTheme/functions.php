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
      wp_register_script ('navigation', get_stylesheet_directory_uri() . '/js/addons.js', array( 'jquery' ),'1',true);
    
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


function revcon_change_post_label() {
    global $menu;
    global $submenu;
    $menu[5][0] = 'Press';
    $submenu['edit.php'][5][0] = 'Press';
    $submenu['edit.php'][10][0] = 'Add Press';
    $submenu['edit.php'][16][0] = 'Press Tags';
}
function revcon_change_post_object() {
    global $wp_post_types;
    $labels = &$wp_post_types['post']->labels;
    $labels->name = 'Press';
    $labels->singular_name = 'Press';
    $labels->add_new = 'Add Press';
    $labels->add_new_item = 'Add Press';
    $labels->edit_item = 'Edit Press';
    $labels->new_item = 'Press';
    $labels->view_item = 'View Press';
    $labels->search_items = 'Search Press';
    $labels->not_found = 'No Press found';
    $labels->not_found_in_trash = 'No Press found in Trash';
    $labels->all_items = 'All Press';
    $labels->menu_name = 'Press';
    $labels->name_admin_bar = 'Press';
}
 
add_action( 'admin_menu', 'revcon_change_post_label' );
add_action( 'init', 'revcon_change_post_object' );


// [transactions] - main function for the transactions UI, points to the shortcode [transactions]
function transactions_output($atts) {
    $args = array('post_type' => 'transactions',
                  'posts_per_page' => 1000); // these arguments are telling WP_Query to only look for the post types called transactions
    $query = new WP_Query( $args );
    $output = '<div class="trans_container">';
    $count = 0; //set up counter variable
    // loop through each transaction
    while ( $query->have_posts() ) : $query->the_post();
          // pull all of the data out of the meta in each transaction 
          // format it
          $title      = '<div class="trans-title"><h2>'     . get_post_meta(get_the_ID(), "wpcf-transaction-title",         true) . '</h2></div>';
          $firm1      = '<div class="trans-firm1"><h2>'     . get_post_meta(get_the_ID(), "wpcf-company-1-name",            true) . '</h2></div>';
          $firm2      = '<div class="trans-firm2"><h2>'     . get_post_meta(get_the_ID(), "wpcf-company-2-name",            true) . '</h2></div>';
          $type       = '<div class="trans-type"><p>'       . get_post_meta(get_the_ID(), "wpcf-transaction-type",          true) . '</p></div>';
          $size       = '<div class="trans-size"><p><b>Transaction Size:</b> ' . get_post_meta(get_the_ID(), "wpcf-transaction-size",          true) . '</p></div>'; 
          $press      = '<div class="trans-press"><p><b>Press Release:</b> '   . get_post_meta(get_the_ID(), "wpcf-transaction-press-release", true) . '</p></div>';
          $date       = '<div class="trans-date"><p><b>Date:</b> ' . get_post_meta(get_the_ID(), "wpcf-transaction-date",          true) . '</p></div>';
          $firm1_img  = '<div class="trans-img1"><img src=' . get_post_meta(get_the_ID(), "wpcf-company-1",                 true) . '></div>';
          $firm2_img  = '<div class="trans-img2"><img src=' . get_post_meta(get_the_ID(), "wpcf-company-2",                 true) . '></div>';
          $type_short = '<div class="trans-type-short"><p><b>Type:</b> ' . get_post_meta(get_the_ID(), "wpcf-transaction-type-short",    true) . '</p></div>';
          $sector     = '<div class="trans-sector"><p><b>Sector:</b> '     . get_post_meta(get_the_ID(), "wpcf-transaction-sector",        true) . '</p></div>';
          $location   = '<div class="trans-location"><p><b>Company Location: </b></p><div class="trans-location-content"><p>' . get_post_meta(get_the_ID(), "wpcf-transaction-location", true) . '</p></div></div>';
          if ($count>$atts["posts"]) {
            // if there are more than 10 posts hide them
            $trans = '<div class="transaction trans_hide">';
          }
          else
          {
            $trans = '<div class="transaction">';
          }
          $output .= $trans . '<div class="trans-expand">' . $firm1_img . $type . $firm2_img . $title . $firm1 . $firm2 . $size . $date . $location . $sector . $type_short . $press . '</div></div>';
          $count++;
    endwhile;

    $output .= '</div>';
    
    return $output; 
}
add_shortcode( 'transactions', 'transactions_output');


function single_transaction($atts) {
    $postid = $atts['id'];

    $output = '<div class="trans_container trans_container_single" style="height:650px;">';

    $title      = '<div class="trans-title"><h2>'     . get_post_meta($postid, "wpcf-transaction-title",         true) . '</h2></div>';
    $firm1      = '<div class="trans-firm1"><h2>'     . get_post_meta($postid, "wpcf-company-1-name",            true) . '</h2></div>';
    $firm2      = '<div class="trans-firm2"><h2>'     . get_post_meta($postid, "wpcf-company-2-name",            true) . '</h2></div>';
    $type       = '<div class="trans-type"><p>'       . get_post_meta($postid, "wpcf-transaction-type",          true) . '</p></div>';
    $size       = '<div class="trans-size"><p><b>Transaction Size:</b> ' . get_post_meta($postid, "wpcf-transaction-size",          true) . '</p></div>'; 
    $press      = '<div class="trans-press"><p><b>Press Release:</b> '   . get_post_meta($postid, "wpcf-transaction-press-release", true) . '</p></div>';
    $date       = '<div class="trans-date"><p><b>Date:</b> ' . get_post_meta($postid, "wpcf-transaction-date",          true) . '</p></div>';
    $firm1_img  = '<div class="trans-img1"><img src=' . get_post_meta($postid, "wpcf-company-1",                 true) . '></div>';
    $firm2_img  = '<div class="trans-img2"><img src=' . get_post_meta($postid, "wpcf-company-2",                 true) . '></div>';
    $type_short = '<div class="trans-type-short"><p><b>Type:</b> ' . get_post_meta($postid, "wpcf-transaction-type-short",    true) . '</p></div>';
    $sector     = '<div class="trans-sector"><p><b>Sector:</b> '   . get_post_meta($postid, "wpcf-transaction-sector",        true) . '</p></div>';
    $location   = '<div class="trans-location"><p><b>Company Location: </b></p><div class="trans-location-content"><p>' . get_post_meta($postid, "wpcf-transaction-location", true) . '</p></div></div>';

    $trans = '<div class="transaction">';

    $output .= $trans . '<div class="trans-expand">' . $firm1_img . $type . $firm2_img . $title . $firm1 . $firm2 . $size . $date . $location . $sector . $type_short . $press . '</div></div></div>';
    return $output; 
}
add_shortcode( 'transaction-single', 'single_transaction');


function download_by_email($atts) {
    $downloadid = $atts['id'];

    $output = '<div class="email-download"><div class="email-download-title"><a type="button" class="button button-file" href="#">Download File
    </a></div>';
    
    $shortcode = sprintf('[email-download download_id="%1$s" contact_form_id="295"]', $downloadid);
    $output .= do_shortcode( $shortcode );
    $output .= '</div>';

    return $output;
}
add_shortcode('email', 'download_by_email');