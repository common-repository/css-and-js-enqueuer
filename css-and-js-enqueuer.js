/*
	License: GNU General Public License v2 or later
	License URI: http://www.gnu.org/licenses/gpl-2.0.html
	Description: Functionality specific to CSS and JS Enqueuer.
 */

window.addEventListener( 'DOMContentLoaded', function() {

	CodeMirror.fromTextArea( document.getElementById( 'enqueue_css' ) , {
		mode: 'text/plain',
		autofocus: true
	});

	CodeMirror.fromTextArea( document.getElementById( 'enqueue_js' ) , {
		mode: 'text/plain'
	});

	CodeMirror.fromTextArea( document.getElementById( 'custom_css' ) , {
		mode: 'text/css'
	});

	CodeMirror.fromTextArea( document.getElementById( 'custom_js' ) , {
		mode: 'text/javascript'
	});

});
