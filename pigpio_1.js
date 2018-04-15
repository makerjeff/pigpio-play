var Gpio = require('pigpio').Gpio;
var motor = new Gpio(10, {mode: Gpio.OUTPUT});
var pulseWidth = 1000;
var increment = 250;

setInterval(function() {
	motor.servoWrite(pulseWidth);

	pulseWidth += increment;

	if (pulseWidth >= 2000) {
		increment = -100;
	}
	else if (pulseWidth <= 1000) {
		incremement = 100;
	}
}, 1000);
