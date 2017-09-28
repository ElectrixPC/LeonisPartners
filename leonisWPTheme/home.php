<!DOCTYPE html>
<html>
<?php get_header(); ?>

<body>
  <div class="parallax">
    <div class="parallax__layer parallax__layer__0">
        <img src="<?php echo get_bloginfo('template_url') ?>/images/nyc-back.svg"/>
    </div>
    <div class="parallax__layer parallax__layer__1">
            <img src="<?php echo get_bloginfo('template_url') ?>/images/nyc-middle.svg"/>
    </div>
    <div class="parallax__layer parallax__layer__2">
            <img src="<?php echo get_bloginfo('template_url') ?>/images/nyc-front.svg"/>
    </div>

    <div class="parallax__cover"></div>
</div>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

    <div id="primary" class="site-content">
        <div id="content" role="main">
            <?php query_posts('post_type=page'); ?>

            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

            <?php the_title(); ?>



            <?php the_content(); ?>

            <?php endwhile; endif; ?>
        </div><!-- #content -->
    </div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
  
</body>
</html>