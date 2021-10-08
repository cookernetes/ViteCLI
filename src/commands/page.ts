import type { Arguments, CommandBuilder } from 'yargs';
import chalk from 'chalk';
import * as logos from '../logos';
import fs from 'fs';

type Options = {
    name?: string;
};

export const command: string[] = ["page", "p"];
export const desc: string = 'Creates a page (just like the NextJS structure).';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
    yargs
        .options({
            name: { type: 'string' },
        });

//TODO: Check if component exists

export const handler = (argv: Arguments<Options>): void => {
    const { name } = argv;
    const componentName = name ? name : '';
    const fLCapitcal = componentName.charAt(0).toUpperCase() + componentName.slice(1)
    if (fs.existsSync(`./src/components/${fLCapitcal}`)) {
        console.log(chalk.red(`${logos.prefix} The page component with the name '${name}' already exists.`));
    } else {
        const msg = chalk.green(`${logos.prefix} The page component with the name '${name}' has successfully been created in: `);
        console.time(msg)
        fs.mkdirSync(`./src/pages/${fLCapitcal}`);
        fs.writeFileSync(`./src/pages/${fLCapitcal}/${fLCapitcal}.page.tsx`, `import React from 'react';\n\n// Styling imports \nimport './${fLCapitcal}.styles.scss';`);
        fs.writeFileSync(`./src/pages/${fLCapitcal}/${fLCapitcal}.styles.scss`, `// Add your stylings here!'`);
        console.timeEnd(msg);
    }
};