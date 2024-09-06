// loadBreakpoints.js
import { horizontalBreakpoints, verticalBreakpoints } from './breakpoints.config';
import fs from 'fs';
import path from 'path';

const generateSCSSContent = (breakpoints, name) => {
  return `$${name}-breakpoints: (\n${Object.entries(breakpoints)
    .map(([key, value]) => `  ${key}: ${value}`)
    .join(',\n')}\n);`;
};

const scssContent = `
// This file is auto-generated. Do not edit directly.
${generateSCSSContent(horizontalBreakpoints, 'horizontal')}
${generateSCSSContent(verticalBreakpoints, 'vertical')}
`;

fs.writeFileSync(
  path.resolve(__dirname, './scss/_custom-breakpoints.scss'),
  scssContent
);
