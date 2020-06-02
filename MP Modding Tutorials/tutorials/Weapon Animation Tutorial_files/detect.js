function
forumRunnerCookie ()
{
    var expires = new Date();
    expires.setTime(expires.getTime() + 90 * 1000 * 60 * 60 * 24);
    document.cookie = 'skip_fr_detect=false' + ';expires=' + expires.toGMTString();
}

function
forumRunnerDetect ()
{
    if (document.cookie.indexOf('skip_fr_detect=false') == -1) {
	var agent = navigator.userAgent.toLowerCase();
	var type;
	var opera = (agent.indexOf('opera') != -1);
	var forumName = '';

	if (agent.indexOf('iphone') != -1) {
	    type = 'iPhone';
	} else if (agent.indexOf('ipod') != -1) {
	    type = 'iPod Touch';
	} else if (agent.indexOf('ipad') != -1) {
	    type = 'iPad';
	} else {
	    return;
	}
	
	var operaMsg = 'This forum supports the ' + type + ' with an App!  Search for "Forum Runner" in the App Store to learn more about it.';
	var safariMsg = 'This forum supports the ' + type + ' with an App!  Tap OK to read more about Forum Runner for the ' + type + '.';

	if (forumName != '') {
	    operaMsg = forumName + ' supports the ' + type + ' with a free App!  Search for "' + forumName + '" in the App Store to learn more about it.';
	    safariMsg = forumName + ' supports the ' + type + ' with a free App!  Tap OK to download the app, or Cancel to dismiss this prompt indefinitely.';
	}

	if (opera) {
	    forumRunnerCookie();
	    alert(operaMsg);
	    return;
	}

	if (confirm(safariMsg)) {
	    window.location = 'http://itunes.apple.com/us/app/forum-runner-vbulletin/id362527234?mt=8';
	} else {
	    forumRunnerCookie();
	}
    }
}

forumRunnerDetect();
