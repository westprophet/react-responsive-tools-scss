#!/bin/bash

# Получение директории, в которой расположен текущий скрипт
SCRIPT_DIR=$(dirname "$0")
PACKAGE_DIR=$(cd "$SCRIPT_DIR" && pwd)

# Запуск createConfig.mjs из пакета
echo "Running createConfig.mjs from package..."
node "$PACKAGE_DIR/src/scripts/createConfig.mjs"

if [ $? -ne 0 ]; then
echo "Error occurred while running createConfig.mjs"
exit 1
fi

# Запуск generateCustomBreakpointsSCSS.mjs из пакета
echo "Running generateCustomBreakpointsSCSS.mjs from package..."
node "$PACKAGE_DIR/src/scripts/generateCustomBreakpointsSCSS.mjs"

if [ $? -ne 0 ]; then
echo "Error occurred while running generateCustomBreakpointsSCSS.mjs"
exit 1
fi

# Запуск generateSCSS.mjs из пакета
echo "Running generateSCSS.mjs from package..."
node "$PACKAGE_DIR/src/scripts/generateSCSS.mjs"

if [ $? -ne 0 ]; then
echo "Error occurred while running generateSCSS.mjs"
exit 1
fi

# Запуск generateTBreakpoint.mjs из пакета
echo "Running generateTBreakpoint.mjs from package..."
node "$PACKAGE_DIR/src/scripts/generateTBreakpoint.mjs"

if [ $? -ne 0 ]; then
echo "Error occurred while running generateTBreakpoint.mjs"
exit 1
fi

echo "All scripts have been executed successfully."
