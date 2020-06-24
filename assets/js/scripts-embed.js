(function (window, document) {
	// Ensure we have not already been loaded
	if (window['Cognito'] && window['Cognito'].config && window['Cognito'].config.scripts && window['Cognito'].config.embedLoaded) return;

	if (document.location.hash) {
		var hash = decodeURIComponent(document.location.hash);

		if (hash.match(/#.{44}[*!]/gi)) {
			var iframes = document.getElementsByTagName('iframe');
			for (var i = 0; i < iframes.length; i++) {
				const iframeSrc = iframes[i].src || '';
				const iframeDataSrc = iframes[i].dataset != null ? (iframes[i].dataset.src || '') : '';
				// Check for forms following regular embed pattern
				if (iframeSrc.indexOf('cognito') > -1)
					iframes[i].src += hash;
				// Check for forms embedded in Wix site
				else if (iframeDataSrc.indexOf('cognito') > -1)
					iframes[i].dataset.src += hash;
			}
		}
	}

	// Ensure we do not double-up the script
	Cognito = window['Cognito'] = window['Cognito'] || {};
	Cognito.config = Cognito['config'] || {};

	Cognito.config.embedLoaded = true;

	var readyHandlers = [];

	// Locate an iframe element based upon the content window
	function getIframe(frameWindow) {
		var iframes = document.getElementsByTagName('iframe');
		for (var i = 0; i < iframes.length; i++) {
			if (frameWindow === iframes[i].contentWindow) {
				return iframes[i];
			}
		}

		return null;
	}

	// Helper methods
	// Prefill framed form
	Cognito.prefill = function Cognito$prefill(/*entry [,frame]*/) {
		var targetFrames = [];
		var entry = arguments[0];
		if (arguments.length > 1 && arguments[1].tagName && arguments[1].tagName.toLowerCase() === 'iframe') {
			targetFrames.push(arguments[1]);
		}

		if (targetFrames.length == 0) {
			var iframes = document.getElementsByTagName('iframe');
			for (var i = 0; i < iframes.length; i++) {
				// Check iframe src (non-Wix) and data-src (Wix) for cognito domain
				const iframeSrc = iframes[i].src || "";
				const iframeDataSrc = iframes[i].dataset != null ? (iframes[i].dataset.src || "") : "";
				if (iframeSrc.indexOf('cognito') > -1 || iframeDataSrc.indexOf('cognito') > -1) {
					targetFrames.push(iframes[i]);
				}
			}
		}

		targetFrames.map(function (targetFrame) {
			readyHandlers.push(function () {
				targetFrame.contentWindow.postMessage(JSON.stringify({ event: 'prefill', data: { entry: entry } }), '*');
			});
		})
	};

	// Allow end users to specify css to be applied to content within the form frame
	Cognito.setCss = function Cognito$setCss(css) {
		readyHandlers.push(function (source) {
			source.postMessage(JSON.stringify({ event: 'setCss', data: { css: css } }), '*');
		});
	};

	// Event handlers
	var handlers =
	{
		// Adjust iframe height to match inner content
		heightChanged: function handlers$heightChanged(source, params) {
			var height = params.height;

			var cognitoFrame = getIframe(source);

			// Obtain wix-iframe
			var wixFrame = null;
			if (cognitoFrame != null && cognitoFrame.parentElement != null)
				wixFrame = cognitoFrame.parentElement.parentElement;

			// Check for wix embedding
			if (wixFrame != null && wixFrame.tagName.toLowerCase() == "wix-iframe") {
				// Form iframe height is being updated, so we need to update the surrounding containers
				if (cognitoFrame.height.includes("px")) {
					let wixFrameOffset = Math.max(wixFrame.offsetHeight - parseInt(cognitoFrame.height, 10), 0);
					wixFrame.style.height = (height + wixFrameOffset) + "px";

					let wixDivWrapper = null;
					if (wixFrame.parentElement != null)
						wixDivWrapper = wixFrame.parentElement.parentElement;

					if (wixDivWrapper != null) {
						let wixDivWrapperOffset = Math.max(wixDivWrapper.offsetHeight - parseInt(cognitoFrame.height, 10), 0);
						wixDivWrapper.style.height = (height + wixDivWrapperOffset) + "px";
					}
				}
			}

			// Set frame height
			cognitoFrame.height = (height) + "px";

			// Ensure iframe is visible
			if (cognitoFrame.style.display === 'none') {
				cognitoFrame.style.display = 'block';
			}
		},

		// Navigate current page, if needed
		navigate: function handlers$navigate(source, params) {
			if (params.url) {
				window.top.document.location.href = params.url;
			}
		},

		// Cognito document ready
		domReady: function handlers$domReady(source, params) {
			var iframe = getIframe(source);
			iframe.setAttribute('scrolling', 'no');

			var entry = '';
			var foundEntry = /[\\?&]entry=([^&#]*)/.exec(document.location.search);
			if (foundEntry) {
				entry = foundEntry[1];
			}

			var initData = {
				embedUrl: document.location.href,
				entry: entry
			};

			source.postMessage(JSON.stringify({ event: 'init', data: initData }), '*');

			for (var i = 0; i < readyHandlers.length; i++) {
				readyHandlers[i](source);
			}
		},

		// Update hash
		updateHash: function handlers$updateHash(source, params) {
			document.location.hash = params.hash;
		},

		// Fire Event
		fireEvent: function handlers$fireEvent(source, params) {
			if (window.jQuery) {
				var jqEvent = window.jQuery.Event(params.name);
				window.jQuery(document).trigger(jqEvent, [params.data]);
			}
		}
	};

	// Event handler for postmessage
	function handleMessage(e) {
		if (!e.data) return;

		var payload;
		try {
			payload = JSON.parse(e.data);
		} catch (e) {
			return;
		}

		if (!payload) return;

		var handler = handlers[payload.event];
		if (handler) {
			handler(e.source, payload);
		}
	}

	// Bind to postMessage
	var eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
	var event = window.addEventListener ? 'message' : 'onmessage';
	window[eventMethod](event, handleMessage, false);
})(window, document);