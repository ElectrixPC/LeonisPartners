<?php get_header(); ?>
<body>
    <div id="primary" class="site-content">
        <div id="content" role="main">
            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <div class="inline_page" id="page_<?php the_ID(); ?>">
                <div id="page_title">
                    <h1><?php the_title(); ?><h1>
                </div>
                <div id="page_content">

                    <?php $shortcode = "[transaction-single id='" . the_ID() . "']";
                          echo do_shortcode( $shortcode ); ?>
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