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
            <?php
                $args = array("post_type" => "page", "order" => "ASC", "orderby" => "menu_order");
                $the_query = new WP_Query($args);
            ?>
            <?php if(have_posts()):while($the_query->have_posts()):$the_query->the_post(); ?>
            <?php get_template_part("content", "page"); ?>
            <?php endwhile; endif; ?>
        </div><!-- #content -->
    </div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
  
</body>
</html>