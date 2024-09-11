// generateSCSS.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { HORIZONTAL_BREAKPOINTS, VERTICAL_BREAKPOINTS } from '../breakpoints.config.mjs';

// Определение __filename и __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Функция генерации SCSS содержимого для горизонтальных брейкпоинтов
const generateHorizontalSCSS = (breakpoints) => {
  const beforeMixins = Object.keys(breakpoints).map(bp => `
// ${bp} - ${breakpoints[bp]}
@mixin for-${bp}(){
  @include mob-first(${bp}){
    @content;
  }
}`).join('\n');
  const afterMixins = Object.keys(breakpoints).map(bp => `
// ${bp} - ${breakpoints[bp]}
@mixin before-${bp}(){
  @include desk-first(${bp}){
    @content;
  }
}`).join('\n');
  return `
@import "horizontal";

${beforeMixins}

${afterMixins}
`;
};

// Функция генерации SCSS содержимого для вертикальных брейкпоинтов
const generateVerticalSCSS = (breakpoints) => {
  const beforeMixins = Object.keys(breakpoints).map(bp => `
// ${bp} - ${breakpoints[bp]}
@mixin v-for-${bp}(){
  @include v-mob-first(${bp}){
    @content;
  }
}`).join('\n');
  const afterMixins = Object.keys(breakpoints).map(bp => `
// ${bp} - ${breakpoints[bp]}
@mixin v-before-${bp}(){
  @include v-desk-first(${bp}){
    @content;
  }
}`).join('\n');
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
