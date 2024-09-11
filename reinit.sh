#!/bin/bash

# Путь до каталога dist
DIST_DIR="./dist"
SCRIPT_DIR="$DIST_DIR/scripts"

# Проверка наличия каталога dist/scripts
if [ ! -d "$SCRIPT_DIR" ]; then
  echo "Scripts directory $SCRIPT_DIR does not exist."
  exit 1
fi

# Запуск createConfig.mjs из dist/scripts
echo "Running createConfig.mjs from package..."
node "$SCRIPT_DIR/createConfig.mjs"

if [ $? -ne 0 ]; then
  echo "Error occurred while running createConfig.mjs"
  exit 1
fi

# Запуск generateCustomBreakpointsSCSS.mjs из dist/scripts
echo "Running generateCustomBreakpointsSCSS.mjs from package..."
node "$SCRIPT_DIR/generateCustomBreakpointsSCSS.mjs"

if [ $? -ne 0 ]; then
  echo "Error occurred while running generateCustomBreakpointsSCSS.mjs"
  exit 1
fi

# Запуск generateSCSS.mjs из dist/scripts
echo "Running generateSCSS.mjs from package..."
node "$SCRIPT_DIR/generateSCSS.mjs"

if [ $? -ne 0 ]; then
  echo "Error occurred while running generateSCSS.mjs"
  exit 1
fi

# Запуск generateTBreakpoint.mjs из dist/scripts
echo "Running generateTBreakpoint.mjs from package..."
node "$SCRIPT_DIR/generateTBreakpoint.mjs"

if [ $? -ne 0 ]; then
  echo "Error occurred while running generateTBreakpoint.mjs"
  exit 1
fi

echo "All scripts have been executed successfully."
