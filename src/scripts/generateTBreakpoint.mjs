// generateTBreakpoint.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { HORIZONTAL_BREAKPOINTS, VERTICAL_BREAKPOINTS } from '../breakpoints.config.js';

// Definition of __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to generate a type alias based on breakpoints
const generateTypeAlias = (breakpoints, typeName) => {
    const types = Object.keys(breakpoints).map(bp => `    | '${bp}'`).join('\n');
    return `export type ${typeName} =\n${types}\n`;
};

// Generate the contents of the TBreakpoint.ts file
const content = `
${generateTypeAlias(HORIZONTAL_BREAKPOINTS, 'TBreakpoint')}

${generateTypeAlias(VERTICAL_BREAKPOINTS, 'TVerticalBreakpoint')}
`;

// Create the TBreakpoint.ts file and write the contents into it
fs.writeFileSync(
    path.resolve(__dirname, '../interfaces/TBreakpoint.d.ts'),
    content.trim()
);

console.log('TBreakpoint.ts file has been generated successfully.');
