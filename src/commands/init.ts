import type { Arguments, CommandBuilder } from 'yargs';
import * as logos from '../logos';
import chalk from 'chalk';
import fs from 'fs';


export const command: string[] = ['init', 'i'];
export const desc: string = 'This outlines the folder structure for your project. E.g, in the src directory - it will add a pages folder, a components folder, and styling folder to get you started.';

const isProject = () : boolean => {
    // Checks if the src folder is in the current working directory with fs
    return fs.existsSync("./src");
};

const initCheck = (): boolean => {
    if (fs.existsSync("./src/pages") || fs.existsSync("./src/scripting") || fs.existsSync("./src/components") || fs.existsSync("./src/styling") || fs.existsSync("./src/assets")) {
        return true;
    } else {
        return false;
    }
};

const timerMsg = `${logos.prefix} Success! The file structure has been set up/initialised.`;

export const handler = (): void => {
	if (isProject() !== true) {
        console.log(chalk.red(`${logos.prefix} Sorry but please run this command in the root directory of your Vite-ReactTS project.`));
        return;
    } else if (initCheck()) {
        console.log(chalk.red(`${logos.prefix} You already have a project set up/initialised!`));
    } else {
        console.time(chalk.green(timerMsg));
        fs.mkdirSync('./src/pages');
        fs.mkdirSync('./src/components');
        fs.mkdirSync('./src/scripting');
        fs.mkdirSync('./src/assets');
        console.timeEnd(chalk.green(timerMsg));
    }
};
