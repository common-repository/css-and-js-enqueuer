<?php
	if ( ! defined ( 'WP_UNINSTALL_PLUGIN' ) ) {
	    exit;
	}

	$css_and_js_enqueuer_options = array(
		'css_and_js_enqueuer_plugin_options',
	);

	foreach ( $css_and_js_enqueuer_options as $css_and_js_enqueuer_option ) {
		delete_option( $css_and_js_enqueuer_option );
	}
