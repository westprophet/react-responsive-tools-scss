// copyDefaultConfig.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Определение __filename и __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Путь к файлу конфигурации по умолчанию
const defaultConfigPath = path.resolve(__dirname, '../default.config.mjs');

// Путь для копии файла в корне проекта
const userConfigPath = path.resolve(__dirname, '../../../../breakpoints.config.js');

// Проверка, существует ли уже пользовательская конфигурация
if (!fs.existsSync(userConfigPath)) {
    fs.copyFileSync(defaultConfigPath, userConfigPath);
    console.log('Default configuration file has been copied to the root of the project as breakpoints.config.js');
} else {
    console.log('User configuration file already exists.');
}