// mergeBreakpointConfigs.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { HORIZONTAL_BREAKPOINTS as defaultHorizontalBreakpoints, VERTICAL_BREAKPOINTS as defaultVerticalBreakpoints } from '../default.config.js';

// Определение __filename и __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Путь к пользовательскому конфигурационному файлу
const userConfigPath = path.resolve(__dirname, '../breakpoints.config.js');

// Функция объединения значений по умолчанию с пользовательскими значениями
const mergeConfigs = (defaultConfig, userConfig) => ({
  ...defaultConfig,
  ...userConfig,
});

const mergeBreakpointConfigs = async () => {
  let horizontalBreakpoints = defaultHorizontalBreakpoints;
  let verticalBreakpoints = defaultVerticalBreakpoints;

  // Проверяем, существует ли пользовательский конфигурационный файл
  if (fs.existsSync(userConfigPath)) {
    const userConfig = await import(userConfigPath);
    horizontalBreakpoints = mergeConfigs(defaultHorizontalBreakpoints, userConfig.HORIZONTAL_BREAKPOINTS || {});
    verticalBreakpoints = mergeConfigs(defaultVerticalBreakpoints, userConfig.VERTICAL_BREAKPOINTS || {});
  }

  const mergedConfigContent = `
// breakpoints.config.js
const HORIZONTAL_BREAKPOINTS = ${JSON.stringify(horizontalBreakpoints, null, 2)};

const VERTICAL_BREAKPOINTS = ${JSON.stringify(verticalBreakpoints, null, 2)};

export { HORIZONTAL_BREAKPOINTS, VERTICAL_BREAKPOINTS };
`;

  // Создаем новый файл с именем breakpoints.config.js
  fs.writeFileSync(
      path.resolve(__dirname, '../breakpoints.config.js'),
      mergedConfigContent
  );

  console.log('Config file have been generated successfully.');
};

mergeBreakpointConfigs();
