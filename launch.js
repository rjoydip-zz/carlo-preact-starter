const os = require('os');
const {
	join
} = require('path');
const {
	echo,
	exec,
	rm
} = require('shelljs');
const chalk = require('chalk');
const clear = require('console-clear');
const pkg = require('./package');

const platform = os.platform();
const buildPath = join(__dirname, 'build');
const wwwPath = join(__dirname, 'www');

rm('-rf', buildPath);
rm('-rf', wwwPath);

clear();
echo(chalk.blue(`Preact build started ...\n`));

if (process.env.DEV === 'true') {
	exec('npm run build');
	carloBuild();
}
else {
	exec('npm run build');
	carloBuild();
}

function carloBuild() {
	clear();
	echo(chalk.blue(`Carlo build started ...\n`));
	exec('npm run pack');
}

function launchLog() {
	clear();
	echo(chalk.blue('Launching app ...\n'));
}

if (platform === 'win32') {
	launchLog();
	exec(join(buildPath, `${pkg.name}-win.exe`));
}
else if (platform === 'linux') {
	launchLog();
	exec(join(buildPath, `${pkg.name}-linux`));
}
else {
	launchLog();
	exec(join(buildPath, `${pkg.name}-macos`));
}