<!DOCTYPE html>
<html>
<?php get_header(); ?>

<body>
  <div class="parallax">
    <div class="parallax__layer parallax__layer__0">
        <img src="<?php echo get_bloginfo('template_url') ?>/images/nyc-layer-5.svg"/>
    </div>
    <div class="parallax__layer parallax__layer__1">
            <img src="<?php echo get_bloginfo('template_url') ?>/images/nyc-layer-4.svg"/>
    </div>
    <div class="parallax__layer parallax__layer__2">
            <img src="<?php echo get_bloginfo('template_url') ?>/images/nyc-layer-3.svg"/>
    </div>
    <div class="parallax__layer parallax__layer__3">
        <img src="<?php echo get_bloginfo('template_url') ?>/images/nyc-layer-2.svg"/>
    </div>
    <div class="parallax__layer parallax__layer__4">
            <img src="<?php echo get_bloginfo('template_url') ?>/images/nyc-layer-1.svg"/>
    </div>
    <div class="parallax__layer parallax__layer__5">
            <img src="<?php echo get_bloginfo('template_url') ?>/images/nyc-layer-0.svg"/>
    </div>


    <div class="parallax__cover">
    <div id="primary" class="site-content">
        <div id="content" role="main">
            <?php query_posts('post_type=page'); ?>

            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

            <div class="inline_page">
                <div id="page_title">
                    <h1><?php the_title(); ?><h1>
                </div>
                <?php the_content(); ?>
            </div>
            <?php endwhile; endif; ?>
        </div><!-- #content -->
    </div><!-- #primary -->
        <?php get_sidebar(); ?>
        <?php get_footer(); ?>
    </div>
</div>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

    



</body>
</html>