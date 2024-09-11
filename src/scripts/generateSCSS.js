// generateSCSS.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { HORIZONTAL_BREAKPOINTS, VERTICAL_BREAKPOINTS } from '../breakpoints.config.js';

// Определение __filename и __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Функция генерации SCSS содержимого для горизонтальных брейкпоинтов
const generateHorizontalSCSS = (breakpoints) => {
  const beforeMixins = Object.keys(breakpoints).map(bp => `@mixin for-${bp}(){\n  @include mob-first(${bp}){\n    @content;\n  }\n}`).join('\n');
  const afterMixins = Object.keys(breakpoints).map(bp => `@mixin before-${bp}(){\n  @include desk-first(${bp}){\n    @content;\n  }\n}`).join('\n');
  return `
@import "horizontal";

${beforeMixins}

${afterMixins}
`;
};

// Функция генерации SCSS содержимого для вертикальных брейкпоинтов
const generateVerticalSCSS = (breakpoints) => {
  const beforeMixins = Object.keys(breakpoints).map(bp => `@mixin v-for-${bp}(){\n  @include v-mob-first(${bp}){\n    @content;\n  }\n}`).join('\n');
  const afterMixins = Object.keys(breakpoints).map(bp => `@mixin v-before-${bp}(){\n  @include v-desk-first(${bp}){\n    @content;\n  }\n}`).join('\n');
  return `
@import "vertical";

${beforeMixins}

${afterMixins}
`;
};

// Создаем файлы SCSS с миксинами
const horizontalSCSSContent = generateHorizontalSCSS(HORIZONTAL_BREAKPOINTS);
const verticalSCSSContent = generateVerticalSCSS(VERTICAL_BREAKPOINTS);

fs.writeFileSync(
    path.resolve(__dirname, '../scss/_horizontal-breakpoints.scss'),
    horizontalSCSSContent
);

fs.writeFileSync(
    path.resolve(__dirname, '../scss/_vertical-breakpoints.scss'),
    verticalSCSSContent
);

console.log('SCSS files have been generated successfully.');
