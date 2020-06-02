var androidBranded = false;
var iphoneBranded = false;
var forumName = '3D Realms Forums';

function
forumRunnerCookie ()
{
    var expires = new Date();
    expires.setTime(expires.getTime() + (90 * 1000 * 60 * 60 * 24));
    document.cookie = 'skip_fr_detect=false;expires=' + expires.toGMTString() + ';path=/';
}

function
forumRunnerAndroid (opera)
{
    var msg;
    var operaMsg;
    if (androidBranded && forumName != '') {
	msg = forumName + ' supports this Android device with a free App!  Tap OK to download the app, or Cancel to dismiss this prompt indefinitely.';
	operaMsg = forumName + ' supports this Android device with a free App!  Search for "' + forumName + '" in the Market to learn more about it.  Reload the page to load the normal website.';
    } else {
	msg = 'This forum supports this Android device with an App!  Tap OK to read more about Forum Runner for Android OS.';
	operaMsg = 'This forum supports this Android device with an App!  Search for "Forum Runner" in the Market to learn more about it.  Reload the page to load the normal website.';
    }
    
    if (opera) {
	forumRunnerCookie();
	alert(operaMsg);
	return;
    }
	
    if (confirm(msg)) {
	window.location = 'market://details?id=net.endoftime.android.forumrunner';
    } else {
	forumRunnerCookie();
    }
}

function
forumRunnerIphone (type, opera)
{
    var operaMsg;
    var safariMsg;

    if (iphoneBranded) {
	operaMsg = forumName + ' supports the ' + type + ' with a free App!  Search for "' + forumName + '" in the App Store to learn more about it.';
	safariMsg = forumName + ' supports the ' + type + ' with a free App!  Tap OK to download the app, or Cancel to dismiss this prompt indefinitely.';
    } else {
	operaMsg = 'This forum supports the ' + type + ' with an App!  Search for "Forum Runner" in the App Store to learn more about it.';
	safariMsg = 'This forum supports the ' + type + ' with an App!  Tap OK to read more about Forum Runner for ' + type + '.';
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

function
forumRunnerDetect ()
{
    if (document.cookie.indexOf('skip_fr_detect=false') == -1) {
	var agent = navigator.userAgent.toLowerCase();
	var type;
	var opera = (agent.indexOf('opera') != -1);
	var android = iphone = false;

	if (agent.indexOf('iphone') != -1) {
	    type = 'iPhone';
	    iphone = true;
	} else if (agent.indexOf('ipod') != -1) {
	    type = 'iPod Touch';
	    iphone = true;
	} else if (agent.indexOf('ipad') != -1) {
	    type = 'iPad';
	    iphone = true;
	} else if (agent.indexOf('android') != -1) {
	    android = true;
	} else {
	    return;
	}

	if (android) {
	    forumRunnerAndroid(opera);
	} else if (iphone) {
	    forumRunnerIphone(type, opera)
	}
    }
}

forumRunnerDetect();
