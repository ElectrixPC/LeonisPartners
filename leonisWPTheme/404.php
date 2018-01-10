<?php get_header(); ?>

	<div id="primary" class="site-content">
		<div id="content" role="main">
			<div class="inline_page" style="min-height: 95vh; overflow:hidden">
				<div id="page_title" style="background-color: #263318; color: white; padding: 50px;">
					<h1 style="color: white;">Page Not Found<h1>
				</div>
				<div id="page_content" style="width: 75%; left: 12.5%; position: relative;">
					<h2>We couldn't find the page you are looking for, sorry.</h2>
					<img class="404" style="padding-top: 200px; width: 70%; height: auto; position: relative; left:50%; transform: translateX(-50%);" src="<?php echo get_bloginfo('template_url') ?>/images/404.gif"/>
				</div>
			</div>
		</div>
	</div>

<?php get_sidebar(); ?>
<?php get_footer(); ?>

