if(isAndroid()) {
	$("script").attr("src", "../../../js/cordova-2.6.0-android.js").appendTo("head");
}

if(isiOS()) {
	$("script").attr("src", "../../../js/cordova-2.6.0-ios.js").appendTo("head");
}

if(isBlackBerry()) {
	$("script").attr("src", "../../../js/cordova-2.6.0-blackberry.js").appendTo("head");
}

function isAndroid(){
	return navigator.userAgent.indexOf("Android") > 0;
}

function isiOS(){
	return (navigator.userAgent.indexOf("iPhone") > 0 || navigator.userAgent.indexOf("iPad") > 0 || navigator.userAgent.indexOf("iPod") > 0); 
}

function isBlackBerry(){
	return navigator.userAgent.indexOf("BlackBerry") > 0;
}

function showAlert(title, message) {
	navigator.notification.alert(
		message,
		null,
		title,
		'V REDU'
	);
}