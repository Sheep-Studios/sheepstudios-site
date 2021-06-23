var loadSWAG = function(implementationCode){
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to 
    //insert the <script> element
	var head = document.head;

    var scriptTag = document.createElement('script');
    scriptTag.src = 'https://swagapi.shockwave.com/dist/swag-api.js';
    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;
    head.appendChild(scriptTag);

	var link = document.createElement('link'); 
	link.rel = 'stylesheet';  
	link.type = 'text/css'; 
	link.href = 'https://swagapi.shockwave.com/dist/swag-api.css';  

	// Append link element to HTML head 
	head.appendChild(link);  

	
};

document.swagapiLoaded = 0;

var completedLoad = function(){
	document.swagapiLoaded = 1;
	console.log ("loaded");
}

loadSWAG(completedLoad);

document.swagapiStarted = 0;
document.swagStingerShown = 0;

function IsLoaded ()
{
	if (document.swagapiLoaded && SWAGAPI)
	{
		return 1;
	}

	return 0;
}

function Initialize(gameAPI)
{
	if (document.swagapi)
		return;
	
	console.log ("Initialize: ", gameAPI);
    var game = document.getElementById("gm4html5_div_id");
	
	console.log ("game:" + game);
	
	if (game)
	{
		document.swagapi = SWAGAPI.getInstance({
				wrapper: game,
				api_key: gameAPI,        // need to change
				theme: 'shockwave',
				debug: true
			});
	}
}

function showBrandingAnimation (divObject)
{
	// Set width and height of the video
	document.getElementById("gm4html5_div_id").parentElement.style.width = "768px";
	document.getElementById("gm4html5_div_id").parentElement.style.height = "432px";	
	SWAGAPI.showBrandingAnimation('gm4html5_div_id', function ()
	{
		document.swagBrandingShown = 1;
	});
}

function isBrandingAnimationShown (){
	return document.swagBrandingShown;
}

function isSessionActive (){
	return document.swagapiStarted;
}

function startSession (){
	console.log ("startSession");
	
	if (document.swagapi)
	{
		document.swagapi.startSession ()
			.then (function (){
				document.swagapiStarted = 1;
				var user = document.swagapi.getCurrentEntity ();
				console.log (user);
				
				return 1
			});
	}
}

function showLeaderboard (type){
	console.log ("showLeaderboard");
	
	if (document.swagapi)
	{
		document.swagapi.showDialog (type, { title: "Best Score" })
			.then (function (){
			});
	}
}

function postDailyScore (levelKey, score){
	console.log ("postDailyScore:", levelKey, score);
	
	if (document.swagapi)
	{
		document.swagapi.postScore (levelKey, score);
	}
}
