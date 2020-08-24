/*
In the node.js intro tutorial (http://nodejs.org/), they show a basic tcp 
server, but for some reason omit a client connecting to it.  I added an 
example at the bottom.
Save the following server in example.js:
*/

/*var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);
});

server.listen(10009, '172.16.3.44');
*/

/*
And connect with a tcp client from the command line using netcat, the *nix 
utility for reading and writing across tcp/udp network connections.  I've only 
used it for debugging myself.
$ netcat 127.0.0.1 1337
You should see:
> Echo server
*/

/* Or use this example tcp client written in node.js.  (Originated with 
example code from 
http://www.hacksparrow.com/tcp-socket-programming-in-node-js.html.) */

stx = String.fromCharCode(02);
fs = String.fromCharCode(28);
etx = String.fromCharCode(03);
us = String.fromCharCode(31);
version = "1.39";

var net = require('net');

var client = new net.Socket();
client.connect(10009, '172.16.2.101', function() {
	console.log('Connected');
	msg = stx + "T00" + fs + "1.39" + fs + "01" + fs + "1200" + fs + fs + "1-4-1" + us + us + us + us + us + "0" + fs + fs + "cms" + fs + us + us + "0" + fs + fs + "REPORTSTATUS=1" + etx + "0";

    // [02]T00[1c]1.47[1c]01[1c]100[1c][1c]1[1c][1c][1c][1c][1c]REPORTSTATUS=1[1c][1c]0[03]l
    // msg = stx + "T00" + fs + "1.47" + fs + "01" + fs + "100" + fs + fs + "1" + fs + fs + fs + fs + fs + "REPORTSTATUS=1" + fs + fs + "0" + etx + "l";
	
	client.write(msg);
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	//client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});
