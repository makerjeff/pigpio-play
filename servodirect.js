const chalk = require('chalk');
const clear = require('clear');

clear();

process.stdin.setEncoding('utf8');
process.stdout.write('ping> ');

process.stdin.on('readable', () => {
	const chunk = process.stdin.read();

	if (chunk !== null) {
		process_input(chunk);
	}
});

process.stdin.on('end', () => {
	process.stdout.write('end');
});

// Process the input
function process_input(input) {
	
	let buffer = input.trim();
	buffer = input.split(',');

	buffer[buffer.length-1] = buffer[buffer.length-1].replace(/\n/g, '');
	console.log(`pong: ${chalk.blue(buffer[0])}`);

	if (buffer[0] === 'a00') {
		console.log(chalk.green('processing command...'));

		for (let i = 1; i < buffer.length; i++) {
			console.log(chalk.red(buffer[i]));
		}

	} 
	
	else if (buffer[0] === 'exit' || buffer[0] === 'quit') {
		process.stdout.write(`${chalk.green('Goodbye!\n')}`);
		 process.exit(0);

	} else {
		process.stdout.write('No recognizable command. ');
		process.stdout.write('\n');
	}

	process.stdout.write('ping> ');
}


