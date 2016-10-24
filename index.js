const path = require('path');
const fs = require('fs');
const rename = require("gulp-rename");
const Enquirer = require('enquirer');
const debug = require('debug')('ft');
const stringHelpers = require('handlebars-helpers').string();
const assembleApp = require('assemble')();
const utils = require('assemble/lib/utils');

const META_PROPERTY = 'meta';
const NEWLINE = '\n';
const ICON_INFO = assembleApp.log.symbol.info;
const ICON_SUCCESS = assembleApp.log.symbol.success;
const handlebarsEngine = assembleApp.engines['.hbs'];
const templatesSourcePath = path.join(assembleApp.cwd, 'templates');
const enquirer = new Enquirer();

assembleApp.option('silent', true);
assembleApp.option('engine', 'hbs');
assembleApp.engine('tpl', handlebarsEngine);

/**
 * Retrieves all the folders with templates expected to be found in 
 * project's root directory /templates folder.
 */
getAvailableTemplates(templatesSourcePath)
	.then(availableTemplates => {
		if (!availableTemplates.length) {
			console.error(`There are not templates defined. 
                Please create some templates inside a templates directory
                in the root of your project`);

			process.exit(1);
		}

		availableTemplates.forEach(
			templateName => registerAssembleTask(templateName, availableTemplates)
		);
	})
	.catch(err => {
		console.error('Can not access the templates folder. Make sure it exists');
		process.exit(1);
	});

module.exports = assembleApp;

// Private declarations

function registerAssembleTask(templateName, availableTemplates) {
	let currentTemplatePath = path.join(templatesSourcePath, templateName);

	assembleApp.task(templateName, () => templateTaskHandler(currentTemplatePath));

	function templateTaskHandler(currentTemplatePath) {
		if (!assembleApp.options.tasks.length) {
			console.error('No template specified');
			process.exit(1);
		}

		if (assembleApp.options.tasks.length < 2) {
			console.error('No destination specified');
			process.exit(1);
		}

		const templateToCompile = assembleApp.options.tasks[0];
		let destination = assembleApp.options.tasks[1];

		if (availableTemplates.indexOf(templateToCompile) === -1) {
			console.error(templateToCompile + ' template does not exist');
			process.exit(1);
		}

		let templateConfig = getTemplateConfig(currentTemplatePath);

		if (!templateConfig) {
			console.error(`Config file for the template can't be parsed`);
			process.exit(1);
		}

		showTaskDescriptionFromConfig(templateConfig);

		return requestDataFromUser(templateConfig)
			.then(userData => Object.assign(templateConfig, userData))
			.then(templateData => {
				let templateFolderGlob = path.join(currentTemplatePath, '**/*.*');
				return compileTemplateFolder(templateData, templateFolderGlob, destination);
			});
	}
}

function compileTemplateFolder(templateData, templateFolderGlob, destination) {
	debug('Inside compileTemplateFolder');
	debug('templateData', templateData);
	debug('templateFolderGlob', templateFolderGlob);
	debug('destination', destination);

	let generatedFiles = [];

	return assembleApp.src(templateFolderGlob)
		.pipe(assembleApp.renderFile(templateData))
		.pipe(rename(path => renameGeneratedPath(path, templateData)))
		.pipe(assembleApp.dest(destination))
		.on('data', (data) => {
			let finalPath = data.history[data.history.length - 1];
			generatedFiles.push(finalPath.replace(assembleApp.cwd, ''));
		})
		.on('end', () => {
			let successMessage = `${ICON_SUCCESS} Generated in ${destination}${NEWLINE}`;
			successMessage = utils.colors.bold(utils.colors.green(successMessage));
			console.log(NEWLINE + successMessage);
			console.log(generatedFiles.join(NEWLINE) + NEWLINE);
		});
}

function renameGeneratedPath(path, templateData) {
	let compiledDirname = handlebarsEngine.renderSync(path.dirname, templateData);
	let compiledName = handlebarsEngine.renderSync(path.basename, templateData);
	path.dirname = compiledDirname;
	path.basename = compiledName;
	path.extname = '';
	return path;
}

function getAvailableTemplates(templatesSourcePath, cb) {
	return new Promise((resolve, reject) => {
		fs.readdir(templatesSourcePath, (err, files) => {
			if (err) {
				return reject(err);
			}

			return resolve(files);
		});
	});
};

/**
 * Retrieves the content of the .config file inside the template's directory
 */
function getTemplateConfig(currentTemplatePath) {
	try {
		let configPath = path.join(currentTemplatePath, '.config');
		return JSON.parse(fs.readFileSync(configPath));
	} catch (err) {
		return;
	}
}

function requestDataFromUser(templateConfig) {
	debug(`Inside requestDataFromUser`);

	return Object.keys(templateConfig)
		.reduce(askQuestion, Promise.resolve({}));

	function askQuestion(accumulator, variableName) {
		if (variableName === META_PROPERTY) {
			return Promise.resolve(accumulator);
		}

		let userQuestion = templateConfig[variableName];
		let accumulatorValue;

		return accumulator
			.then(value => {
				accumulatorValue = value;
				return enquirer.ask(userQuestion);
			})
			.then(answer => {
				accumulatorValue[variableName] = answer[userQuestion];
				return Promise.resolve(accumulatorValue);
			});
	}
}

function showTaskDescriptionFromConfig(templateConfig) {
	let description = templateConfig[META_PROPERTY] && templateConfig[META_PROPERTY].description;

	if (description) {
		description = `${ICON_INFO} ${description}`;
		console.log(NEWLINE + utils.colors.bold(description) + NEWLINE);
	}
}

function registerAssembleDefaultTask() {
	assembleApp.task('default', function () {
		console.error('No template specified. Please specify one');
	});
}