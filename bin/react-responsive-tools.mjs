#!/usr/bin/env node

import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

// Получение имени файла и директории текущего модуля
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Полный путь к вашему скрипту
const scriptPath = path.resolve(__dirname, '../reinit.sh');

const command = process.argv[2];

if (command === 'run' && process.argv[3] === 'reinit') {
  try {
    execSync(`sh ${scriptPath}`, { stdio: 'inherit' });
  } catch (error) {
    console.error('Error executing the reinit.sh script:', error);
    process.exit(1);
  }
} else {
  console.log('Usage: react-responsive-tools run reinit');
}
