<!DOCTYPE html>
<html>
<?php get_header(); ?>

<body>
  <div class="parallax">
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
            <?php query_posts('post_type=page'); ?>

            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

            <div class="inline_page" id="page_<?php the_ID(); ?>">
                <div id="page_title">
                    <h1><?php the_title(); ?><h1>
                </div>
                <div id="page_content">
                        <?php the_content(); ?>
                </div>
            </div>
            <?php endwhile; endif; ?>
        </div><!-- #content -->
    </div><!-- #primary -->
        <?php get_sidebar(); ?>
        
    </div>

</div>
<?php get_footer(); ?>
  

    



</body>
</html>