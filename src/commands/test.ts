import type { Arguments, CommandBuilder } from 'yargs';

type Options = {
};

export const command: string = 'test';
export const desc: string = 'Tests to see if the package is working. If it is, you will get a random, but nice text-art of the name of the project :)';

export const builder: CommandBuilder<Options> = (yargs) =>
	yargs
		.alias('test', 't');

export const handler = (argv: Arguments<Options>): void => {
	console.log('i agree.');
};