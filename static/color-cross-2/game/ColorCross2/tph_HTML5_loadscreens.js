// Author:			Dytlief Moller
// Project:			HTML5 only
// Description:		Thank you for purchasing! Use or modify these 10 styles to your liking.

// Reused functions
function Deg2Rad(_deg)
{
	return _deg * (Math.PI / 180.0);
}

// Base for drawing the loadscreen
function draw_loadscreen(_graphics, _width, _height, _total, _current, _loadingscreen, imageSource)
{
	// Load bar
    var barwidth = 415;
    var barheight = 33;
    var x = (_width - barwidth) / 2;
    var y = (_height/2) + 85;
    var w = (barwidth / _total) * _current;

	if(w >= (barwidth * 0.87))
	{
		w = barwidth;
	}

    var border = 1;
    var border_color = "rgb(0, 0, 0)";
    var bar_bg = "rgb(130, 130, 130)";
    var progress_bg = "rgb(46, 115, 233)";

	// Background
    var window_bgd = "rgb(151, 188, 252)";
    var ls_height = _height;
    var ls_width = _width;
    var ls_y_pos = 0;
    var ls_x_pos = 0

	// Background image
    var imageBackground = new Image();
	imageBackground.src = imageSource;
    var imgheight = 768;
    var imgwidth = 432;
    var fromtop = ( (_height - imgheight)/2 );
    var fromside = ( (_width - imgwidth)/2 );

    _graphics.fillStyle = window_bgd;
    _graphics.fillRect(0, 0, _width, _height);

	// Draw the background
    if (_loadingscreen)
	{
        _graphics.drawImage(_loadingscreen, ls_x_pos, ls_y_pos, ls_width, ls_height);
    }

	// Draw the logo
    if(imageBackground.src!="")
	{
        _graphics.drawImage(imageBackground, 0, 0, ls_width, ls_height);
    }

	// Draw the bar 'n stuff
    if (_current != 0)
    {
		// Bar border
		_graphics.fillStyle = border_color;
        _graphics.fillRect(x-border, y-border, barwidth+(border*2), barheight+(border*2) );

		// Bar background
        _graphics.fillStyle = bar_bg;
        _graphics.fillRect(x, y, barwidth, barheight);

		// Bar fill
        _graphics.fillStyle = progress_bg;
        _graphics.fillRect(x, y, w, barheight);
	}
}

// ------------------------------------------------------------------------------------------------------------------ LOADSCREENS
function loadscreen_generic(_graphics, _width, _height, _total, _current, _loadingscreen)
{
	draw_loadscreen(_graphics, _width, _height, _total, _current, _loadingscreen, "https://sheepstudios.net/static/color-cross-2/preloader/loading-generic.png");
}

function loadscreen_armor_games(_graphics, _width, _height, _total, _current, _loadingscreen)
{
	draw_loadscreen(_graphics, _width, _height, _total, _current, _loadingscreen, "https://sheepstudios.net/static/color-cross-2/preloader/loading-armor-games.png");
}
