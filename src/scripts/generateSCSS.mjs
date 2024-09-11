// generateSCSS.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { HORIZONTAL_BREAKPOINTS, VERTICAL_BREAKPOINTS } from '../breakpoints.config.ts';

// Определение __filename и __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Функция генерации SCSS содержимого для горизонтальных брейкпоинтов
const generateHorizontalSCSS = (breakpoints) => {
  const beforeMixins = Object.keys(breakpoints).map(bp => `
/**
 * @mixin for-${bp}
 * @description Mixin for applying styles for screens greater than or equal to ${breakpoints[bp]}px.
 * @example
 *  @include for-${bp} {
 *    // your styles here
 *  }
 */
@mixin for-${bp}() {
  @include mob-first(${bp}) {
    @content;
  }
}`).join('\n');

  const afterMixins = Object.keys(breakpoints).map(bp => `
/**
 * @mixin before-${bp}
 * @description Mixin for applying styles for screens less than ${breakpoints[bp]}px.
 * @example
 *  @include before-${bp} {
 *    // your styles here
 *  }
 */
@mixin before-${bp}() {
  @include desk-first(${bp}) {
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
/**
 * @mixin v-for-${bp}
 * @description Mixin for applying styles for screens with height greater than or equal to ${breakpoints[bp]}px.
 * @example
 *  @include v-for-${bp} {
 *    // your styles here
 *  }
 */
@mixin v-for-${bp}() {
  @include v-mob-first(${bp}) {
    @content;
  }
}`).join('\n');

  const afterMixins = Object.keys(breakpoints).map(bp => `
/**
 * @mixin v-before-${bp}
 * @description Mixin for applying styles for screens with height less than ${breakpoints[bp]}px.
 * @example
 *  @include v-before-${bp} {
 *    // your styles here
 *  }
 */
@mixin v-before-${bp}() {
  @include v-desk-first(${bp}) {
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
