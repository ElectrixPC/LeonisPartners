<?php

// Change default WordPress email address
add_filter('wp_mail_from', 'new_mail_from');
add_filter('wp_mail_from_name', 'new_mail_from_name');
 
function new_mail_from($old) {
return 'enquiries@leonispartners.com';
}
function new_mail_from_name($old) {
return 'Leonis Partners';
}

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
      
      wp_enqueue_script('scrolling');
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
    $menu[5][0] = 'News';
    $submenu['edit.php'][5][0] = 'News';
    $submenu['edit.php'][10][0] = 'Add News';
    $submenu['edit.php'][16][0] = 'News Tags';
}
function revcon_change_post_object() {
    global $wp_post_types;
    $labels = &$wp_post_types['post']->labels;
    $labels->name = 'News';
    $labels->singular_name = 'News';
    $labels->add_new = 'Add News';
    $labels->add_new_item = 'Add News';
    $labels->edit_item = 'Edit News';
    $labels->new_item = 'News';
    $labels->view_item = 'View News';
    $labels->search_items = 'Search News';
    $labels->not_found = 'No News found';
    $labels->not_found_in_trash = 'No News found in Trash';
    $labels->all_items = 'All News';
    $labels->menu_name = 'News';
    $labels->name_admin_bar = 'News';
}
 
add_action( 'admin_menu', 'revcon_change_post_label' );
add_action( 'init', 'revcon_change_post_object' );

// Creates the team section in the wp editor
function team_init() {
    $args = array(
      'label' => 'Team',
        'public' => true,
        'show_ui' => true,
        'capability_type' => 'post',
        'hierarchical' => false,
        'rewrite' => array('slug' => 'team'),
        'query_var' => true,
        'menu_icon' => 'dashicons-businessman',
        'supports' => array(
            'title',
            'page-attributes',)
        );
    register_post_type( 'team', $args );
}
add_action( 'init', 'team_init' );


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
          $press      = '<div class="trans-press"></div>'; //<p><b>Press Release:</b> '   . get_post_meta(get_the_ID(), "wpcf-transaction-press-release", true) . '</p></div>';
          $date       = '<div class="trans-date"><p><b>Date:</b> ' . get_post_meta(get_the_ID(), "wpcf-transaction-date",          true) . '</p></div>';

          if (get_post_meta(get_the_ID(), "wpcf-company-1", true)) {
              $firm1_img  = '<div class="trans-img1"><img src=' . get_post_meta(get_the_ID(), "wpcf-company-1", true) . '></div>';
          }
          else {
              $firm1_img = '<div class="trans-img1"></div>';
          }
          if (get_post_meta(get_the_ID(), "wpcf-company-2", true)) {
              $firm2_img  = '<div class="trans-img2"><img src=' . get_post_meta(get_the_ID(), "wpcf-company-2", true) . '></div>';
          }
          else {
              $firm2_img = '<div class="trans-img2"></div>';
          }

          $type_short = '<div class="trans-type-short"><p><b>Type:</b> ' . get_post_meta(get_the_ID(), "wpcf-transaction-type-short",    true) . '</p></div>';
          $sector     = '<div class="trans-sector"><p><b>Sector:</b> '     . get_post_meta(get_the_ID(), "wpcf-transaction-sector",        true) . '</p></div>';
          $location   = '<div class="trans-location"><p><b>Company Location: </b></p><div class="trans-location-content"><p>' . get_post_meta(get_the_ID(), "wpcf-transaction-location", true) . '</p></div></div>';
          $exit       = '<div class="trans-exit"><i class="fa fa-times fa-2x" aria-hidden="true"></i></div>';
          $trans      = '<div class="transaction trans_hide">';
          $output .= $trans . '<div class="trans-expand">' . $firm1_img . $type . $firm2_img . $title . $firm1 . $firm2 . $size . $date . $location . $sector . $type_short . $press . $exit . '</div></div>';
          $count++;
    endwhile;

    $output .= '</div><a type="button" class="button button-trans" href="javascript:void(0);">View All Transactions</a>';
    
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
    $press      = '<div class="trans-press"></div'; //<p><b>Press Release:</b> '   . get_post_meta($postid, "wpcf-transaction-press-release", true) . '</p></div>';
    $date       = '<div class="trans-date"><p><b>Date:</b> ' . get_post_meta($postid, "wpcf-transaction-date",          true) . '</p></div>';
    if (get_post_meta($postid, "wpcf-company-1", true)) {
        $firm1_img  = '<div class="trans-img1"><img src=' . get_post_meta($postid, "wpcf-company-1", true) . '></div>';
    }
    else {
        $firm1_img = '<div class="trans-img1"></div>';
    }
    if (get_post_meta($postid, "wpcf-company-2", true)) {
        $firm2_img  = '<div class="trans-img2"><img src=' . get_post_meta($postid, "wpcf-company-2", true) . '></div>';
    }
    else {
        $firm2_img = '<div class="trans-img2"></div>';
    }
    $type_short = '<div class="trans-type-short"><p><b>Type:</b> ' . get_post_meta($postid, "wpcf-transaction-type-short",    true) . '</p></div>';
    $sector     = '<div class="trans-sector"><p><b>Sector:</b> '   . get_post_meta($postid, "wpcf-transaction-sector",        true) . '</p></div>';
    if (get_post_meta($postid, "wpcf-transaction-location", true)) {
        $location   = '<div class="trans-location"><p><b>Company Location: </b></p><div class="trans-location-content"><p>' . get_post_meta($postid, "wpcf-transaction-location", true) . '</p></div></div>';
    }
    else {
        $location   = '<div class="trans-location"></div>';
    }
    $location   = '<div class="trans-location"><p><b>Company Location: </b></p><div class="trans-location-content"><p>' . get_post_meta($postid, "wpcf-transaction-location", true) . '</p></div></div>';
    $exit       = '<div class="trans-exit"><i class="fa fa-times fa-2x" aria-hidden="true"></i></div>';
    $trans = '<div class="transaction">';

    $output .= $trans . '<div class="trans-expand">' . $firm1_img . $type . $firm2_img . $title . $firm1 . $firm2 . $size . $date . $location . $sector . $type_short . $press . $exit . '</div></div></div>';
    return $output; 
}
add_shortcode( 'transaction-single', 'single_transaction');


function download_by_email($atts) {
    $downloadid = $atts['id'];

    $output = '<div class="email-download"><div class="email-download-title"><a type="button" class="button button-file" href="javascript:void(0);">Download File
    </a></div>';
    
    $shortcode = sprintf('[email-download download_id="%1$s" contact_form_id="295"]', $downloadid);
    $output .= do_shortcode( $shortcode );
    $output .= '</div>';

    return $output;
}
add_shortcode('email', 'download_by_email');

function get_news($atts) {
    $args = array('post_type' => 'post',
    'posts_per_page' => 1000); // these arguments are telling WP_Query to only look for the post types called transactions
    $query = new WP_Query( $args );
    $output = '<div class="news-container">';

    while ( $query->have_posts() ) : $query->the_post();
        $container = '<div class="news">';
        $title = '<div class="news-title">' . get_the_title() . '</div>';
        $content = '<div class="news-content">' . get_the_excerpt() . '</div>';
        $readmore = '<a target class="news-readmore" href=' . get_permalink() . '>Read More.<br><i class="fa fa-plus fa-2x" aria-hidden="true"></i></a>';
        $close = '</div>';

        $output .= $container . $title . $content . $readmore . $close;
    endwhile;

    $output .= '<br><a type="button" class="button news-button" href="/news-research">View All</a></div>';

    return $output;
}
add_shortcode( 'news', 'get_news');

function get_social($atts) {
    
    $output  = '<div class="news-social-container"><div class="social"><i class="fa fa-twitter-square fa-8x" aria-hidden="true"></i><br><a type="button" class="button button-social" href="javascript:void(0);">Follow Us</a></div><div class="social"><i class="fa fa-linkedin-square fa-8x" aria-hidden="true"></i><br><a type="button" class="button button-social" href="https://www.linkedin.com/in/derickschaudies/">Connect with Us</a></div></div>';

    return $output;
}
add_shortcode( 'news-social', 'get_social');

function get_downloads($atts) {

    $output = '<br><div class="news-download-container">';
    if (empty($atts['id1']) == false) {
        $output .= '<div class="news-download-item"><i class="fa fa-download fa-5x" aria-hidden="true"></i><i class="fa fa-check fa-5x" aria-hidden="true"></i><h2>' . get_the_title($atts['id1']) . '</h2>';
        $output .= '<div class="email-download"><div class="email-download-title"><a type="button" class="button button-file" href="javascript:void(0);">Download File</a></div>';
        $shortcode = sprintf('[email-download download_id="%1$s" contact_form_id="358"]', $atts['id1']);
        $output .= do_shortcode( $shortcode );
        $output .= '</div></div>';
    }
    if (empty($atts['id2']) == false) {
        $output .= '<div class="news-download-item"><i class="fa fa-download fa-5x" aria-hidden="true"></i><i class="fa fa-check fa-5x" aria-hidden="true"></i><h2>' . get_the_title($atts['id2']) . '</h2>';
        $output .= '<div class="email-download"><div class="email-download-title"><a type="button" class="button button-file" href="javascript:void(0);">Download File</a></div>';
        $shortcode = sprintf('[email-download download_id="%1$s" contact_form_id="295"]', $atts['id2']);
        $output .= do_shortcode( $shortcode );
        $output .= '</div></div>';
    }
    if (empty($atts['id3']) == false) {
        $output .= '<div class="news-download-item"><i class="fa fa-download fa-5x" aria-hidden="true"></i><i class="fa fa-check fa-5x" aria-hidden="true"></i><h2>' . get_the_title($atts['id3']) . '</h2>';
        $output .= '<div class="email-download"><div class="email-download-title"><a type="button" class="button button-file" href="javascript:void(0);">Download File</a></div>';
        $shortcode = sprintf('[email-download download_id="%1$s" contact_form_id="295"]', $atts['id3']);
        $output .= do_shortcode( $shortcode );
        $output .= '</div></div>';
    }
    if (empty($atts['id4']) == false) {
        $output .= '<div class="news-download-item"><i class="fa fa-download fa-5x" aria-hidden="true"></i><i class="fa fa-check fa-5x" aria-hidden="true"></i><h2>' . get_the_title($atts['id4']) . '</h2>';
        $output .= '<div class="email-download"><div class="email-download-title"><a type="button" class="button button-file" href="javascript:void(0);">Download File</a></div>';
        $shortcode = sprintf('[email-download download_id="%1$s" contact_form_id="295"]', $atts['id4']);
        $output .= do_shortcode( $shortcode );
        $output .= '</div></div>';
    }
    if (empty($atts['id5']) == false) {
        $output .= '<div class="news-download-item"><i class="fa fa-download fa-5x" aria-hidden="true"></i><i class="fa fa-check fa-5x" aria-hidden="true"></i><h2>' . get_the_title($atts['id5']) . '</h2>';
        $output .= '<div class="email-download"><div class="email-download-title"><a type="button" class="button button-file" href="javascript:void(0);">Download File</a></div>';
        $shortcode = sprintf('[email-download download_id="%1$s" contact_form_id="295"]', $atts['id5']);
        $output .= do_shortcode( $shortcode );
        $output .= '</div></div>';
    }
    $output .= '</div>';
    return $output;
}
add_shortcode( 'news-downloads', 'get_downloads');



// [team] - main function for the team UI, points to the shortcode [team]
function team_output($atts) {
    $args = array('post_type' => 'team',
                  'posts_per_page' => 1000); // these arguments are telling WP_Query to only look for the post types called team
    $query = new WP_Query( $args );
    $output = '<div class="team-container">';

    while ( $query->have_posts() ) : $query->the_post();
          // pull all of the data out of the meta in each team
          // format it
          $photo      = '<div class="team-photo"><img src='   . get_post_meta(get_the_ID(), "wpcf-team-photo", true) . '></div>';
          $name       = '<div class="team-name"><p>'          . get_post_meta(get_the_ID(), "wpcf-team-name",          true) . '</p></div>';
          $title      = '<div class="team-job-title"><p>'     . get_post_meta(get_the_ID(), "wpcf-team-job-title",     true) . '</p></div>';
          $email      = '<div class="team-email-address"><i class="fa fa-envelope" aria-hidden="true" href="' . get_post_meta(get_the_ID(), "wpcf-team-email-address", true) . '"></i></div>';
          $phone      = '<div class="team-phone-number"><p>'  . get_post_meta(get_the_ID(), "wpcf-team-phone-number",  true) . '</p></div>';
          $social     = '<div class="team-linkedin"><i class="fa fa-linkedin" aria-hidden="true" href="' . get_post_meta(get_the_ID(), "wpcf-team-linkedin",      true) . '"></i></div>'; 
          $desc       = '<div class="team-description"><p>'   . get_post_meta(get_the_ID(), "wpcf-team-description",   true) . '</p></div>';
          $experience = '<div class="team-experience"><p>'    . get_post_meta(get_the_ID(), "wpcf-team-experience",    true) . '</p></div>';
          
          $team      = '<div class="team team-collapsed">';
          $output     .= $team . $photo . $name . $title . $email . $phone . $social . $desc . $experience . '</div>';
          $count++;
    endwhile;

    $output .= '</div>';
    
    return $output; 
}
add_shortcode( 'team', 'team_output');