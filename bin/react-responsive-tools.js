#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

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