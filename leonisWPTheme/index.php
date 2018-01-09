<?php get_header(); ?>
<body>
    <div id="primary" class="site-content">
        <div id="content" role="main">
            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <div class="inline_page" style="min-height: 95vh; overflow:hidden" id="page_<?php the_ID(); ?>">
                <div id="page_title" style="background-color: #263318; color: white; padding: 50px;">
                    <h1 style="color: white;"><?php the_title(); ?><h1>
                </div>
                <div id="page_content" style="width: 75%; left: 12.5%; position: relative;">
                <img class="news-logo" src="<?php echo get_bloginfo('template_url') ?>/images/logo_web.png"/>
                        <?php the_content(); ?>
                </div>
            </div>
            <?php endwhile; else: ?>
            <p><?php _e('Sorry, no posts matched your criteria.'); ?></p><?php endif; ?>
        </div>
    </div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDlrukNsqNpEe7hn_H0k9CF3uU9svq4UIs&callback=initMap" async defer></script>

<body>