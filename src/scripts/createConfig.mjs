// createConfig.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
    HORIZONTAL_BREAKPOINTS as defaultHorizontalBreakpoints,
    VERTICAL_BREAKPOINTS as defaultVerticalBreakpoints,
    PREFERRED_VARIANT as defaultPreferredVariant,
} from '../default.config.js';

// Definition of __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the user configuration file
const userConfigPath = path.resolve(__dirname, '../../../../breakpoints.config.js');

const mergeBreakpointConfigs = async () => {
    let horizontalBreakpoints = defaultHorizontalBreakpoints;
    let verticalBreakpoints = defaultVerticalBreakpoints;
    let preferredVariant = defaultPreferredVariant;

    // Check if the user configuration file exists
    if (fs.existsSync(userConfigPath)) {
        try {
            console.log(`User config file found at: ${userConfigPath}`);
            const userConfig = await import(userConfigPath);
            console.log(`Loaded user config: ${JSON.stringify(userConfig, null, 2)}`);

            if (userConfig.HORIZONTAL_BREAKPOINTS) {
                horizontalBreakpoints = userConfig.HORIZONTAL_BREAKPOINTS;
                console.log('Using user provided horizontal breakpoints.');
            } else {
                console.log('Using default horizontal breakpoints.');
            }

            if (userConfig.VERTICAL_BREAKPOINTS) {
                verticalBreakpoints = userConfig.VERTICAL_BREAKPOINTS;
                console.log('Using user provided vertical breakpoints.');
            } else {
                console.log('Using default vertical breakpoints.');
            }

            if (userConfig.PREFERRED_VARIANT) {
                preferredVariant = userConfig.PREFERRED_VARIANT;
                console.log('Using user provided preferred variant.');
            } else {
                console.log('Using default preferred variant.');
            }
        } catch (error) {
            console.error('Error loading user config:', error);
        }
    } else {
        console.log(`User config file not found at: ${userConfigPath}. Using default breakpoints.`);
    }

    const mergedConfigContent = `
    // breakpoints.config.mjs
    const HORIZONTAL_BREAKPOINTS = ${JSON.stringify(horizontalBreakpoints, null, 2)};

    const VERTICAL_BREAKPOINTS = ${JSON.stringify(verticalBreakpoints, null, 2)};

    const PREFERRED_VARIANT = ${JSON.stringify(preferredVariant)};

    export { HORIZONTAL_BREAKPOINTS, VERTICAL_BREAKPOINTS, PREFERRED_VARIANT };
    `;

    try {
        // Create a new file named breakpoints.config.js
        fs.writeFileSync(path.resolve(__dirname, '../breakpoints.config.js'), mergedConfigContent);
        console.log('Config file has been generated successfully.');
    } catch (error) {
        console.error('Error writing merged config file:', error);
    }
};

// Run the function
mergeBreakpointConfigs();
