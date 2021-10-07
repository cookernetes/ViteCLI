import type { Arguments, CommandBuilder } from 'yargs';
import * as logos from '../logos';
import chalk from 'chalk';


export const command: string[] = ['test', 't'];
export const desc: string = 'Tests to see if the package is working. If it is, you will get a random, but nice text-art of the name of the project :)';

const logoIndex = Math.floor(Math.random() * 3);

const rightLogo: string = logos.logoArr[logoIndex]

export const handler = (): void => {
	console.clear();
	console.log(chalk.red.bold(rightLogo));
	console.log(chalk.green(`\n${logos.msg}`));
	console.log(chalk.blue(`\nLuckily for you, the module is working! Enjoy it while it lasts ;)\n`));
	var myInt = setTimeout(() => {},1500); 
};
