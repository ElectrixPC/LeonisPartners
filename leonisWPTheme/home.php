<!DOCTYPE html>
<html>
<?php get_header(); ?>

<body>
  <div id="home" class="parallax">
        <img class="title_img" src="<?php echo get_bloginfo('template_url') ?>/images/fulllogowhite.svg"/>
    <div class="parallax__layer parallax__layer__0">
            <img src="<?php echo get_bloginfo('template_url') ?>/images/nyc-layer-5.svg"/>
            <img class="mobile_img" src="<?php echo get_bloginfo('template_url') ?>/images/nyc-layer-5-large.svg"/>
    </div>
    <div class="parallax__layer parallax__layer__1">
            <img src="<?php echo get_bloginfo('template_url') ?>/images/nyc-layer-4.svg"/>
            <img class="mobile_img" src="<?php echo get_bloginfo('template_url') ?>/images/nyc-layer-4-large.svg"/>
    </div>
    <div class="parallax__layer parallax__layer__2">
            <img src="<?php echo get_bloginfo('template_url') ?>/images/nyc-layer-3.svg"/>
            <img class="mobile_img" src="<?php echo get_bloginfo('template_url') ?>/images/nyc-layer-3-large.svg"/>
    </div>
    <div class="parallax__layer parallax__layer__3">
            <img src="<?php echo get_bloginfo('template_url') ?>/images/nyc-layer-2.svg"/>
            <img class="mobile_img" src="<?php echo get_bloginfo('template_url') ?>/images/nyc-layer-2-large.svg"/>
    </div>
    <div class="parallax__layer parallax__layer__4">
            <img src="<?php echo get_bloginfo('template_url') ?>/images/nyc-layer-1.svg"/>
            <img class="mobile_img" src="<?php echo get_bloginfo('template_url') ?>/images/nyc-layer-1-large.svg"/>
    </div>
    <div class="parallax__layer parallax__layer__5">
            <img src="<?php echo get_bloginfo('template_url') ?>/images/nyc-layer-0.svg"/>
            <img class="mobile_img" src="<?php echo get_bloginfo('template_url') ?>/images/nyc-layer-0-large.svg"/>
    </div>


    <div class="parallax__cover">
    <div id="primary" class="site-content">
        <div id="content" role="main">
                
            <?php query_posts(array('post_type'=>'page', 'orderby'=>'menu_order')); ?>
                <?php while ( have_posts() ) : the_post(); ?>
                        <div class="inline_page" id="page_<?php the_ID(); ?> <?php get_post_type();?>">
                                <div id="page_title">
                                        <h1><?php the_title(); ?><h1>

                                        <?php $post_type = get_post_type( get_the_ID() );
                                                echo '<p>' . $post_type . '</p>';
                                        ?>
                                </div>
                                <div id="page_content">
                                        <?php the_content(); ?>
                                </div>
                        </div>
                <?php endwhile ?>
                <?php wp_reset_query(); ?>
        </div><!-- #content -->
    </div><!-- #primary -->
        <?php get_sidebar(); ?>
        <?php get_footer(); ?>
    </div>
</div>
  
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDlrukNsqNpEe7hn_H0k9CF3uU9svq4UIs&callback=initMap" async defer></script>




</body>
</html>