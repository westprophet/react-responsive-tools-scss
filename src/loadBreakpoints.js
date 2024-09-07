// loadBreakpoints.js
import {
  HORIZONTAL_BREAKPOINTS as defaultHorizontalBreakpoints,
  VERTICAL_BREAKPOINTS as defaultVerticalBreakpoint
} from './breakpoints.configs';

import fs from 'fs';
import path from 'path';

// Путь к пользовательскому конфигурационному файлу
const userConfigPath = path.resolve(__dirname, './breakpoints.config.js');

// Функция объединения значений по умолчанию с пользовательскими значениями
const mergeConfigs = (defaultConfig, userConfig) => ({
  ...defaultConfig,
  ...userConfig,
});

let horizontalBreakpoints = defaultHorizontalBreakpoints;
let verticalBreakpoints = defaultVerticalBreakpoint;

// Проверяем, существует ли пользовательский конфигурационный файл
if (fs.existsSync(userConfigPath)) {
  const userConfig = require(userConfigPath);
  horizontalBreakpoints = mergeConfigs(defaultHorizontalBreakpoints, userConfig.HORIZONTAL_BREAKPOINTS || {});
  verticalBreakpoints = mergeConfigs(defaultVerticalBreakpoints, userConfig.VERTICAL_BREAKPOINTS || {});
}

const generateSCSSContent = (breakpoints, name) => {
  return `$${name}-breakpoints: (\n${Object.entries(breakpoints)
      .map(([key, value]) => `  ${key}: ${value}`)
      .join(',\n')}\n);`;
};

const scssContent = `
// Этот файл генерируется автоматически. Не редактируйте его напрямую.
${generateSCSSContent(horizontalBreakpoints, 'horizontal')}
${generateSCSSContent(verticalBreakpoints, 'vertical')}
`;

fs.writeFileSync(
    path.resolve(__dirname, './scss/_custom-breakpoints.scss'),
    scssContent
);
