/**
*	Site-specific configuration settings for Highslide JS
*/
hs.graphicsDir = '/highslide/graphics/';
hs.outlineType = 'custom';
hs.dimmingOpacity = 0.65;
hs.fadeInOut = true;
hs.align = 'center';
hs.showCredits = false;
hs.registerOverlay({
	html: '<div class="closebutton" onclick="return hs.close(this)" title="Close"></div>',
	position: 'top right',
	useOnHtml: true,
	fade: 2 // fading the semi-transparent overlay looks bad in IE
});



// Add the slideshow controller
hs.addSlideshow({
	//slideshowGroup: 'group1',
	interval: 5000,
	repeat: false,
	useControls: true,
	fixedControls: 'fit',
	overlayOptions: {
		className: 'large-dark',
		opacity: 0.75,
		position: 'bottom center',
		offsetX: 0,
		offsetY: -15,
		hideOnMouseOut: true
	}
});

// gallery config object
var config1 = {
	slideshowGroup: 'group1',
	thumbnailId: 'thumb1',
	numberPosition: 'caption',
	transitions: ['expand', 'crossfade']
};

// gallery config object
var config2 = {
	slideshowGroup: 'group2',
	thumbnailId: 'thumb2',
	numberPosition: 'caption',
	transitions: ['expand', 'crossfade']
};

// gallery config object
var config3 = {
	slideshowGroup: 'group3',
	thumbnailId: 'thumb3',
	numberPosition: 'caption',
	transitions: ['expand', 'crossfade']
};

// gallery config object
var config4 = {
	slideshowGroup: 'group4',
	thumbnailId: 'thumb4',
	numberPosition: 'caption',
	transitions: ['expand', 'crossfade']
};

// gallery config object
var config5 = {
	slideshowGroup: 'group5',
	thumbnailId: 'thumb5',
	numberPosition: 'caption',
	transitions: ['expand', 'crossfade']
};

// gallery config object
var config6 = {
	slideshowGroup: 'group6',
	thumbnailId: 'thumb6',
	numberPosition: 'caption',
	transitions: ['expand', 'crossfade']
};

// gallery config object
var config7 = {
	slideshowGroup: 'group7',
	thumbnailId: 'thumb7',
	numberPosition: 'caption',
	transitions: ['expand', 'crossfade']
};

// gallery config object
var config8 = {
	slideshowGroup: 'group8',
	thumbnailId: 'thumb8',
	numberPosition: 'caption',
	transitions: ['expand', 'crossfade']
};

// gallery config object
var config9 = {
	slideshowGroup: 'group9',
	thumbnailId: 'thumb9',
	numberPosition: 'caption',
	transitions: ['expand', 'crossfade']
};

// gallery config object
var config10 = {
	slideshowGroup: 'group10',
	thumbnailId: 'thumb10',
	numberPosition: 'caption',
	transitions: ['expand', 'crossfade']
};


// gallery config object
var config11 = {
	slideshowGroup: 'group11',
	thumbnailId: 'thumb11',
	numberPosition: 'caption',
	transitions: ['expand', 'crossfade']
};
