#!/bin/bash

# Запуск createConfig.js
echo "Running createConfig.js..."
node src/scripts/createConfig.js

# Проверка наличия ошибок
if [ $? -ne 0 ]; then
  echo "Error occurred while running createConfig.js"
  exit 1
fi

# Запуск generateCustomBreakpointsSCSS.js
echo "Running generateCustomBreakpointsSCSS.js..."
node src/scripts/generateCustomBreakpointsSCSS.js

# Проверка наличия ошибок
if [ $? -ne 0 ]; then
  echo "Error occurred while running generateCustomBreakpointsSCSS.js"
  exit 1
fi

# Запуск generateSCSS.js
echo "Running generateSCSS.js..."
node src/scripts/generateSCSS.js

# Проверка наличия ошибок
if [ $? -ne 0 ]; then
  echo "Error occurred while running generateSCSS.js"
  exit 1
fi

# Запуск generateTBreakpoint.js
echo "Running generateTBreakpoint.js..."
node src/scripts/generateTBreakpoint.js

# Проверка наличия ошибок
if [ $? -ne 0 ]; then
  echo "Error occurred while running generateTBreakpoint.js"
  exit 1
fi

echo "All scripts have been executed successfully."