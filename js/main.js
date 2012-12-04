requirejs.config({
	// by default load any module IDs from js/lib
	baseUrl: 'js/lib',
	// exceptions
	paths: {
		app: '../app'
	}
});

// assumes we have already loaded sound manager
// sound manager tends to not load properly in module format

soundManager.onready( function () {
	
	require(
	[
		"jquery",
		"app/shared",
		"app/ui",
		"app/solarSystem",
		"overthrow",
		"RequestAnimationFrame"
	],
	function ( $, _s, _ui, _solarSystem ) {
		
		var _de = _s.domElements;
		
		// main update loop
		
		function Update () {
			
			_s.signals.onUpdated.dispatch();
			
			window.requestAnimationFrame( Update );
			
		}
		
		Update();
		
	} );
	
} );