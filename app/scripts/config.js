module.exports = {

	/**
	 * @type {String}
	 */
	storage: 'STITCHES',

	/**
	 * @type {Object}
	 */
	settings: {
		// default canvas sprite placement layout
		layout: 'compact',

		// default stylesheet class prefix
		prefix: 'sprite',

		// default padding around sprites in pixels
		padding: 5,

		// whether or not to include the data-uri image (quite large)
		uri: false,

		// either css or less at the moment
		stylesheet: 'css'
	},

	/**
	 * @type {Object}
	 */
	events: {
		// open the about palette
		about: 'ABOUT',

		// open the downloads palette
		downloads: 'DOWNLOADS',

		// open the settings palette
		settings: 'SETTINGS',

		// close a palette or all palettes
		close: 'CLOSE',

		// show the overlay
		busy: 'BUSY',

		// hide the overlay
		idle: 'IDLE',

		// restore the canvas to default state
		reset: 'RESET',

		// clear sprites from the canvas
		clear: 'CLEAR',

		// process submitted files into sprites
		process: 'PROCESS',

		// remove a sprite from the canvas
		remove: 'REMOVE'
	}

};