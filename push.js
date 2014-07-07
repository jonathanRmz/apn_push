//module APN
var apn = require('apn');

//Options to the APN
var options = {
		cert:"cert.pem",
		key:"key.pem",
		passphrase:"mypass",
		production: false
};

var apnConnection = new apn.Connection(options);

var myDevice = new apn.Device("tokenDevice"); 

var note = new apn.Notification();

note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
note.badge = 3;
note.sound = "Default";
note.alert = "\uD83D\uDCE7 \u2709 You have a new message";
note.payload = {'messageFrom': 'MyApp'};

apnConnection.pushNotification(note, myDevice);
