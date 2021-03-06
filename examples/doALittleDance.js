// Simplest possible example, car go move!
var client = require('../lib/car');

client.discover()
    .then(function(serialNumber) {
        console.log("Discoverd", serialNumber);
        return client.connect(serialNumber);
    }).then(function() {
        console.log("Enabling"); return client.enable();
    }).then(function() {
        console.log("Yay! start work");

        var steer = 1;
        var move = 0.5;

        // Full left (might be right...)
        client.steer(steer);

        // Full forward!
        client.move(move);

        // Let's dance
        setInterval(function() {

            // And the other way
            steer = -steer;
            move = -move;

            client.move(move);
            client.steer(steer);
        }, 800)
    });
