<!DOCTYPE html>
<html>
<?php get_header(); ?>

<body>
    <div class="main-video">
        <video autoplay muted loop id="backvideo" poster="<?php echo get_bloginfo('template_url') ?>/images/nyc-poster.jpg">
                <source src="<?php echo get_bloginfo('template_url') ?>/images/nyc.mp4" type="video/mp4">
        </video>
        
    </div>
        <div id="main-primary" class="site-content">
        <div id="content" role="main">
                
        <?php   $args = array('post_type' => 'page', 
                'orderby' => 'menu_order');
                $query = new WP_Query( $args );
                while ( $query->have_posts() ) : $query->the_post();
                if (get_post_type( get_the_ID() ) == 'page') {
                        echo '<div class="inline_page" id="page_' . get_the_ID() . '"><div id="page_title"><h1>' . get_the_title() . '<h1></div><div id="page_content">' . do_shortcode(get_post_field('post_content', $postid)) . '</div></div>';
                }
                endwhile; ?>
        </div><!-- #content -->
    </div><!-- #primary -->
        <?php get_sidebar(); ?>
        <?php get_footer(); ?>
    </div>
</div>
  
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDlrukNsqNpEe7hn_H0k9CF3uU9svq4UIs&callback=initMap" async defer></script>




</body>
</html>