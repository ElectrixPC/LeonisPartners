<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Leonis Partners</title>
        <!-- TODO fill that out -->
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
        <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
        <?php wp_head(); ?>
    </head>
    <header>
    <img src="<?php echo get_bloginfo('template_url') ?>/images/white_logo_text_small-1.png"/>
    <button type="button" class="hamburger caf" onclick="open_nav(this)">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
    </button>

        <?php wp_nav_menu( 
            array(
                'theme_location' => 'top',
                'container' => 'nav',
                'container_class'=> 'collapse navbar-collapse',
                'menu_class' => 'nav navbar-nav',
                'menu_id' => 'menu-primary-navigation',
                ) ); ?>

    </header>
	 
    <body>
		