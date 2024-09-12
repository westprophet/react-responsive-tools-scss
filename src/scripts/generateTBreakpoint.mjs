// generateTBreakpoint.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { HORIZONTAL_BREAKPOINTS, VERTICAL_BREAKPOINTS } from '../breakpoints.config.js';

// Определение __filename и __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Функция для генерации type alias на основе брейкпоинтов
const generateTypeAlias = (breakpoints, typeName) => {
  const types = Object.keys(breakpoints).map(bp => `    | '${bp}'`).join('\n');
  return `export type ${typeName} =\n${types}\n`;
};

// Генерируем содержимое файла TBreakpoint.ts
const content = `
${generateTypeAlias(HORIZONTAL_BREAKPOINTS, 'TBreakpoint')}

${generateTypeAlias(VERTICAL_BREAKPOINTS, 'TVerticalBreakpoint')}
`;

// Создаем файл TBreakpoint.ts и записываем туда содержимое
fs.writeFileSync(
    path.resolve(__dirname, '../interfaces/TBreakpoint.d.ts'),
    content.trim()
);

console.log('TBreakpoint.ts file has been generated successfully.');
