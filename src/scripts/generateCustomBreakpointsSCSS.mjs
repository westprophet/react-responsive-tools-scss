// generateSCSSMaps.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; // Импортируем необходимую функцию из 'url'
import { HORIZONTAL_BREAKPOINTS, VERTICAL_BREAKPOINTS } from '../breakpoints.config.ts';

// Определение __filename и __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Функция генерации SCSS map
const generateSCSSMap = (breakpoints, name) => {
  return `$${name}-breakpoints: (\n${Object.entries(breakpoints)
      .map(([key, value]) => `  ${key}: ${value}`)
      .join(',\n')}\n);`;
};

// Создаем содержимое SCSS файла
const scssContent = `
${generateSCSSMap(HORIZONTAL_BREAKPOINTS, 'horizontal')}
${generateSCSSMap(VERTICAL_BREAKPOINTS, 'vertical')}
`;

// Записываем содержимое в файл _custom-breakpoints.scss
fs.writeFileSync(
    path.resolve(__dirname, '../scss/_custom-breakpoints.scss'),
    scssContent
);

console.log('SCSS file with breakpoints maps has been generated successfully.');
